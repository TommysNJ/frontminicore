import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const URI = 'https://backend-mini-core.onrender.com/api/tareas/';

const CreateTarea = () => {
    const [descripcion, setDescripcion] = useState('');
    const [estado, setEstado] = useState('ToDo');
    const [empleados, setEmpleados] = useState([]);
    const [empleadoId, setEmpleadoId] = useState('');
    const [proyectos, setProyectos] = useState([]);
    const [proyectoId, setProyectoId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getDatos();
    }, []);

    const getDatos = async () => {
        const empleadosRes = await axios.get('https://backend-mini-core.onrender.com/api/empleados/');
        const proyectosRes = await axios.get('https://backend-mini-core.onrender.com/api/proyectos/');
        setEmpleados(empleadosRes.data);
        setProyectos(proyectosRes.data);
    };

    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, {
            descripcion, estado, Id_Empleado: empleadoId, Id_Proyecto: proyectoId
        });
        Swal.fire("Tarea Creada", "Se agregó una nueva tarea", "success");
        navigate('/tareas');
    };

    return (
        <div>
            <h3>AGREGAR TAREA</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Descripción</label>
                    <input
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Estado</label>
                    <select value={estado} onChange={(e) => setEstado(e.target.value)} className='form-control'>
                        <option value="ToDo">ToDo</option>
                        <option value="InProgress">InProgress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Empleado</label>
                    <select value={empleadoId} onChange={(e) => setEmpleadoId(e.target.value)} className='form-control'>
                        {empleados.map((empleado) => (
                            <option key={empleado.id} value={empleado.id}>
                                {empleado.nombre} {empleado.apellido}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Proyecto</label>
                    <select value={proyectoId} onChange={(e) => setProyectoId(e.target.value)} className='form-control'>
                        {proyectos.map((proyecto) => (
                            <option key={proyecto.id} value={proyecto.id}>
                                {proyecto.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <button type='submit' className='btn btn-primary'>Agregar</button>
            </form>
        </div>
    );
}

export default CreateTarea;
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const URI = 'https://backend-mini-core.onrender.com/api/empleados/';

const EditEmpleado = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();


    const getEmpleadoById = async () => {
        const res = await axios.get(`${URI}${id}`);
        setNombre(res.data.nombre);
        setApellido(res.data.apellido);
    };

    useEffect(() => {
        getEmpleadoById();
    }, [getEmpleadoById]); // Agregar getEmpleadoById como dependencia

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${URI}${id}`, { nombre, apellido });
        Swal.fire({
            title: "Empleado Actualizado",
            text: "El empleado ha sido actualizado correctamente",
            icon: "success"
        });
        navigate('/');
    };

    return (
        <div>
            <h2>Editar Empleado</h2>
            <form onSubmit={update}>
                <legend>Llena todos los campos</legend>
                <div className="campo">
                    <label>Nombre:</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className='form-control'
                        placeholder="Nombre Empleado"
                    />
                </div>
                <div className="campo">
                    <label>Apellido:</label>
                    <input
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        type="text"
                        className='form-control'
                        placeholder="Apellido Empleado"
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
    );
}

export default EditEmpleado;
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const URI = 'https://backend-mini-core.onrender.com/api/empleados/';

const CreateEmpleado = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, { nombre, apellido });
        Swal.fire("Empleado Creado", "Se agregó un nuevo empleado", "success");
        navigate('/');
    };

    return (
        <div>
            <h2>Nuevo Empleado</h2>
            <form onSubmit={store}>
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
                <button type='submit' className='btn btn-primary'>Agregar</button>
            </form>
        </div>
    );
}

export default CreateEmpleado;
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const URI = 'https://backend-mini-core.onrender.com/api/proyectos/';

const CreateProyecto = () => {
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, { nombre });
        Swal.fire("Proyecto Creado", "Se agregó un nuevo proyecto", "success");
        navigate('/proyectos');
    };

    return (
        <div>
            <h2>Nuevo Proyecto</h2>
            <form onSubmit={store}>
                <legend>Llena todos los campos</legend>
                <div className="campo">
                    <label>Nombre:</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className='form-control'
                        placeholder="Nombre Proyecto"
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Agregar</button>
            </form>
        </div>
    );
}

export default CreateProyecto;
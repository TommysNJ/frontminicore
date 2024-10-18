import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const URI = 'https://backend-mini-core.onrender.com/api/proyectos/';

const EditProyecto = () => {
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getProyectoById();
    }, [getProyectoById]); // Agregar getProyectoById como dependencia

    const getProyectoById = async () => {
        const res = await axios.get(`${URI}${id}`);
        setNombre(res.data.nombre);
    };

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${URI}${id}`, { nombre });
        Swal.fire({
            title: "Proyecto Actualizado",
            text: "El proyecto ha sido actualizado correctamente",
            icon: "success"
        });
        navigate('/proyectos');
    };

    return (
        <div>
            <h2>Editar Proyecto</h2>
            <form onSubmit={update}>
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
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
    );
}

export default EditProyecto;
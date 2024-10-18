import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const URI = 'https://backend-mini-core.onrender.com/api/proyectos/';

const Proyecto = ({ proyecto }) => {
    const { id, nombre } = proyecto;

    const eliminarProyecto = async (id) => {
        Swal.fire({
            title: "Confirmación",
            text: "No es posible revertir esta acción",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Eliminar"
        }).then(async (result) => {
            if (result.value) {
                try {
                    await axios.delete(`${URI}${id}`);
                    Swal.fire("Proyecto Eliminado", "El proyecto ha sido eliminado", "success");
                } catch (error) {
                    Swal.fire("Error", "No se pudo eliminar el proyecto", "error");
                }
            }
        });
    };

    return (
        <li className="proyecto">
            <div className="info-proyecto">
                <p className="nombre">{nombre}</p>
            </div>
            <div className="acciones">
                <Link to={`/proyectos/edit/${id}`} className="btn btn-azul">Editar Proyecto</Link>
                <button onClick={() => eliminarProyecto(id)} className="btn btn-rojo btn-eliminar">Eliminar Proyecto</button>
            </div>
        </li>
    );
};

export default Proyecto;
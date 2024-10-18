import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const URI = 'https://backend-mini-core.onrender.com/api/tareas/';

const Tarea = ({ tarea }) => {
    const { id, descripcion, estado, Empleado, Proyecto } = tarea;

    const eliminarTarea = async (id) => {
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
                    Swal.fire("Tarea Eliminada", "La tarea ha sido eliminada", "success");
                } catch (error) {
                    Swal.fire("Error", "No se pudo eliminar la tarea", "error");
                }
            }
        });
    };

    return (
        <li className="tarea">
            <div className="info-tarea">
                <p className="descripcion">{descripcion}</p>
                <p className="estado">Estado: {estado}</p>
                <p className="empleado">Empleado: {Empleado?.nombre} {Empleado?.apellido}</p>
                <p className="proyecto">Proyecto: {Proyecto?.nombre}</p>
            </div>
            <div className="acciones">
                <Link to={`/tareas/edit/${id}`} className="btn btn-azul">Editar Tarea</Link>
                <button onClick={() => eliminarTarea(id)} className="btn btn-rojo btn-eliminar">Eliminar Tarea</button>
            </div>
        </li>
    );
};

export default Tarea;
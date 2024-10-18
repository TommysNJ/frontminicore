import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const URI = 'https://backend-mini-core.onrender.com/api/empleados/';

const Empleado = ({ empleado }) => {
    const { id, nombre, apellido } = empleado;

    const eliminarEmpleado = async (id) => {
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
                    Swal.fire("Empleado Eliminado", "El empleado ha sido eliminado", "success");
                } catch (error) {
                    Swal.fire("Error", "No se pudo eliminar el empleado", "error");
                }
            }
        });
    };

    return (
        <li className="empleado">
            <div className="info-empleado">
                <p className="nombre">{nombre} {apellido}</p>
            </div>
            <div className="acciones">
                <Link to={`/empleados/edit/${id}`} className="btn btn-azul">Editar Empleado</Link>
                <button onClick={() => eliminarEmpleado(id)} className="btn btn-rojo btn-eliminar">Eliminar Empleado</button>
            </div>
        </li>
    );
};

export default Empleado;
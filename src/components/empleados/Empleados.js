import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Empleado from './Empleado';

const URI = 'https://backend-mini-core.onrender.com/api/empleados/';

const ShowEmpleados = () => {
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        getEmpleados();
    }, []);

    const getEmpleados = async () => {
        const res = await axios.get(URI);
        setEmpleados(res.data);
    };

    return (
        <div>
            <Link to="/empleados/create" className='btn btn-verde nvo-empleado'>
                <i className="fas fa-plus-circle"></i> Nuevo Empleado
            </Link>
            <ul className="listado-empleados">
                {empleados.map((empleado) => (
                    <Empleado key={empleado.id} empleado={empleado} />
                ))}
            </ul>
        </div>
    );
};

export default ShowEmpleados;
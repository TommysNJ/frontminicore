import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tarea from './Tarea';

const URI = 'https://backend-mini-core.onrender.com/api/tareas/';

const ShowTareas = () => {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        getTareas();
    }, []);

    const getTareas = async () => {
        const res = await axios.get(URI);
        setTareas(res.data);
    };

    return (
        <div>
            <Link to="/tareas/create" className='btn btn-verde nvo-tarea'>
                <i className="fas fa-plus-circle"></i> Nueva Tarea
            </Link>
            <ul className="listado-tareas">
                {tareas.map((tarea) => (
                    <Tarea key={tarea.id} tarea={tarea} />
                ))}
            </ul>
        </div>
    );
};

export default ShowTareas;
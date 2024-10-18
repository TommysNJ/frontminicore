import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Proyecto from './Proyecto';

const URI = 'https://backend-mini-core.onrender.com/api/proyectos/';

const ShowProyectos = () => {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        getProyectos();
    }, []);

    const getProyectos = async () => {
        const res = await axios.get(URI);
        setProyectos(res.data);
    };

    return (
        <div>
            <Link to="/proyectos/create" className='btn btn-verde nvo-proyecto'>
                <i className="fas fa-plus-circle"></i> Nuevo Proyecto
            </Link>
            <ul className="listado-proyectos">
                {proyectos.map((proyecto) => (
                    <Proyecto key={proyecto.id} proyecto={proyecto} />
                ))}
            </ul>
        </div>
    );
};

export default ShowProyectos;
import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
    return (
        <aside className="sidebar col-3">
            <h2>Administrar</h2>
            <nav className="navegacion">
                <Link to="/empleados" className="empleados">Empleados</Link>
                <Link to="/proyectos" className="proyectos">Proyectos</Link>
                <Link to="/tareas" className="tareas">Tareas</Link>
                <Link to="/reporte" className="reportes">Reportes</Link>
            </nav>
        </aside>
    );
};

export default Navegacion;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de componentes
import Header from './components/layout/Header.js';
import Navegacion from './components/layout/Navegacion.js';
import ShowEmpleados from './components/empleados/Empleados.js';
import CreateEmpleado from './components/empleados/NuevoEmpleado.js';
import EditEmpleado from './components/empleados/EditarEmpledo.js';
import ShowProyectos from './components/proyectos/Proyectos.js';
import CreateProyecto from './components/proyectos/NuevoProyecto.js';
import EditProyecto from './components/proyectos/EditarProyectos.js';
import ShowTareas from './components/tareas/Tareas.js';
import CreateTarea from './components/tareas/NuevaTarea.js';
import EditTarea from './components/tareas/EditarTarea.js';
import Reporte from './components/reportes/Reporte.js';

function App() {
    return (
        <Router>
            <Header />
            <div className="grid contenedor contenido-principal">
                <Navegacion />
                <main className="caja-contenido col-9">
                    <Routes>
                        <Route path="/" element={<ShowEmpleados />} />
                        <Route path="/empleados" element={<ShowEmpleados />} />
                        <Route path="/empleados/create" element={<CreateEmpleado />} />
                        <Route path="/empleados/edit/:id" element={<EditEmpleado />} />
                        <Route path="/proyectos" element={<ShowProyectos />} />
                        <Route path="/proyectos/create" element={<CreateProyecto />} />
                        <Route path="/proyectos/edit/:id" element={<EditProyecto />} />
                        <Route path="/tareas" element={<ShowTareas />} />
                        <Route path="/tareas/create" element={<CreateTarea />} />
                        <Route path="/tareas/edit/:id" element={<EditTarea />} />
                        <Route path="/reporte" element={<Reporte />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
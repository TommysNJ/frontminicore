import axios from "axios";
import { useState } from "react";

const URI = 'https://backend-mini-core.onrender.com/api/reportes/atrasadas/';

const Reporte = () => {
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [resultados, setResultados] = useState({});

    const fetchData = async (e) => {
        e.preventDefault();
        const res = await axios.get(`${URI}${fechaInicio}/${fechaFin}`);
        setResultados(res.data);
    };

    return (
        <div>
            <h2>Reporte de Tareas Atrasadas</h2>
            <form onSubmit={fetchData}>
                <div className="campo">
                    <label>Fecha Inicio:</label>
                    <input
                        type="date"
                        value={fechaInicio}
                        onChange={(e) => setFechaInicio(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label>Fecha Fin:</label>
                    <input
                        type="date"
                        value={fechaFin}
                        onChange={(e) => setFechaFin(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={!fechaInicio || !fechaFin}>Generar Reporte</button>
            </form>
            {resultados.totalAtrasadas !== undefined && (
                <div>
                    <h3>Total de Tareas Atrasadas: {resultados.totalAtrasadas}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Tarea</th>
                                <th>Empleado</th>
                                <th>Proyecto</th>
                                <th>Fecha Inicio</th>
                                <th>Fecha Estimada Finalización</th>
                                <th>Días Programados</th>
                                <th>Días Atrasados</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultados.tareasAtrasadas.map((tarea, index) => (
                                <tr key={index}>
                                    <td>{tarea.descripcion}</td>
                                    <td>{tarea.Empleado?.nombre} {tarea.Empleado?.apellido}</td>
                                    <td>{tarea.Proyecto?.nombre}</td>
                                    <td>{new Date(tarea.fechaInicio).toLocaleDateString()}</td>
                                    <td>{new Date(tarea.fechaEstimadaFinalizacion).toLocaleDateString()}</td>
                                    <td>{tarea.tiempoEstimado}</td>
                                    <td>{tarea.diasAtrasados}</td>
                                    <td>{tarea.estado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Reporte;
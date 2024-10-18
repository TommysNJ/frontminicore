MINICORE

Descripción del proyecto:

MiniCore es una aplicación que permite la gestión de empleados, proyectos y tareas de manera eficiente. Está diseñada para simplificar la creación, edición, eliminación y seguimiento de estos elementos, asegurando un control adecuado de las tareas asignadas a los empleados dentro de un proyecto. El proyecto está dividido en dos partes:

Backend: Desarrollado con Node.js, Express y Sequelize para interactuar con una base de datos MySQL.
Frontend: Construido con React.js, desplegado en Netlify, y que interactúa con el backend desplegado en Render.
Tabla de contenidos

Instalación
Uso del Proyecto
Despliegue
Endpoints del Backend
Características
Tecnologías Utilizadas
Licencia
Instalación

Backend:

Clonar el repositorio del backend: git clone https://github.com/TommysNJ/BackendMiniCore.git cd BackendMiniCore
Instalar las dependencias: npm install
Iniciar el servidor: nodemon app
El backend estará corriendo en http://localhost:8000.
Frontend:

Clonar el repositorio del frontend: git clone https://github.com/TommysNJ/FrontMiniCore.git cd FrontMiniCore
Instalar las dependencias: npm install
Iniciar la aplicación: npm start
El frontend estará corriendo en http://localhost:3000.
Uso del Proyecto

El backend gestiona las siguientes entidades:

Empleados: Crear, editar, eliminar y listar empleados.
Proyectos: Crear, editar, eliminar y listar proyectos.
Tareas: Crear, editar, eliminar y listar tareas asignadas a empleados en proyectos. Funcionalidades del Frontend:
Visualizar listas de empleados, proyectos y tareas.
Crear nuevos empleados, proyectos y tareas.
Editar o eliminar registros existentes.
Generar reportes de tareas atrasadas.
Despliegue

Backend en Render

El backend ha sido desplegado en Render. Puedes acceder a la API en la siguiente URL: https://backend-mini-core.onrender.com Frontend en Netlify
El frontend ha sido desplegado en Netlify y se conecta con el backend para todas las operaciones CRUD. Puedes acceder al frontend en: https://elaborate-lokum-24e27c.netlify.app/
Endpoints del Backend

Empleados

GET /api/empleados: Lista todos los empleados.
GET /api/empleados/:id: Obtiene un empleado por ID.
POST /api/empleados: Crea un nuevo empleado.
PUT /api/empleados/:id: Actualiza un empleado existente.
DELETE /api/empleados/:id: Elimina un empleado.
Proyectos

GET /api/proyectos: Lista todos los proyectos.
GET /api/proyectos/:id: Obtiene un proyecto por ID.
POST /api/proyectos: Crea un nuevo proyecto.
PUT /api/proyectos/:id: Actualiza un proyecto existente.
DELETE /api/proyectos/:id: Elimina un proyecto.
Tareas

GET /api/tareas: Lista todas las tareas.
GET /api/tareas/:id: Obtiene una tarea por ID.
POST /api/tareas: Crea una nueva tarea.
PUT /api/tareas/:id: Actualiza una tarea existente.
DELETE /api/tareas/:id: Elimina una tarea.
Características

CRUD Completo: Permite crear, editar, visualizar y eliminar empleados, proyectos y tareas.
Reportes: Genera reportes sobre el estado de las tareas y los empleados asignados.
Autenticación: El frontend y backend pueden ser extendidos para incluir autenticación de usuarios.
Despliegue Profesional: Backend desplegado en Render y frontend en Netlify.
Tecnologías Utilizadas

Backend

Node.js
Express
Sequelize
MySQL
Render (para despliegue)
Frontend

React.js
Netlify (para despliegue)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Licencia

Este proyecto está licenciado bajo la Licencia MIT.

![](
https://i.ibb.co/gtx0hzC/Captura-de-pantalla-2023-05-30-a-la-s-18-09-39.png)

# Mi Proyecto de React

Este proyecto utiliza React para crear un CRUD (Crear, Leer, Actualizar, Eliminar) de tareas. Permite realizar operaciones como crear una nueva tarea, actualizar una tarea existente, eliminar una tarea y mostrar una lista de tareas.

## Instalación de React

Para ejecutar este proyecto, asegúrate de tener Node.js y npm instalados en tu sistema. Luego, sigue estos pasos:

1. Clona este repositorio en tu máquina local.

2. Navega hasta la carpeta raíz del proyecto en la terminal.

3. Ejecuta el siguiente comando para instalar las dependencias necesarias:


### npm install


4. Una vez que se completen las instalaciones, ejecuta el siguiente comando para iniciar la aplicación:

### npm start


Esto abrirá la aplicación en tu navegador.

## Descripción del Código

El archivo `ShowTasks.js` contiene el componente principal llamado `TaskList`. Aquí se importan los módulos necesarios, se configuran los estados y las funciones para manejar las tareas.

El componente `TaskList` se encarga de mostrar el formulario de creación/actualización de tareas, la lista de tareas y las acciones para eliminar o actualizar una tarea.

El código utiliza el hook `useEffect` para realizar una solicitud HTTP al servidor al cargar el componente y obtener la lista de tareas.

Para ejecutar el proyecto, se utiliza axios para realizar las solicitudes HTTP al servidor REST que proporciona las API necesarias para el CRUD de tareas.

## URL

La URL donde se va a desplegar es 

[http://localhost:3000](http://localhost:3000)

Exito.


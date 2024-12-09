# Proyecto de Gestión de Alumnos:

Este es un proyecto en React con TypeScript que permite gestionar una lista de alumnos, añadiendo sus nombres, apellidos y notas. Además, calcula y muestra el promedio de las notas ingresadas.

## Instalación:

Una vez clonado el repositorio y tener el proyecto disponible, se debe comprobar si están instaladas todas las dependencias.  
Para ello, ejecuta lo siguiente:

npm install 

## Ejecutar el proyecto:

Una vez que el proyecto está listo para ser ejecutado, ejecuta lo siguiente:

npm run dev

De esta manera, el proyecto se ejecutará en el navegador.

## Componentes y clases principales del proyecto:

- App.tsx --> Este es el componente principal, donde se realiza la llamada al componente AlumList.

- AlumList.tsx --> En este componente se muestra la lista de alumnos, además mostrarse el promedio de las notas en tiempo real.

- AlumForm.tsx --> Este componente es un formulario donde se puede ingresar el nombre, apellidos y nota de cada alumno.

- Alumno.ts --> Esta es la clase alumno formada por el nombre, los apellidos y la nota.

## Funcionalidades:

Estas son las funcionalidades que se han implementado:

- Agregar alumno.
- Ver la lista de alumnos.
- Ver promedio de notas.

## Otros detalles:

Se ha añadido un css básico en el fichero index.css.
import { useState } from "react";
import { AlumForm } from "./AlumForm";

export function AlumList() {

    const [alumnos, setAlumno] = useState<any[]>([]);
    
    const deleteAlumno = (index: number) => {
        setAlumno((prevAlumnos) => prevAlumnos.filter((_, i) => i !== index));
      };

    const promedio = alumnos.length > 0 
      ? alumnos.reduce((acc, alumno) => acc + alumno.nota, 0) / alumnos.length
      : 0;

    return (
      <>
        <AlumForm setAlumno={setAlumno}/>

        <br/>

        <h1>Lista de Alumnos</h1>
        <ul>
            {alumnos.map((alumno, index) => (
                <li key={index}>

                    {alumno.nombre} {alumno.apellidos} - Nota: {alumno.nota}
                    <button onClick={() => deleteAlumno(index)}>Borrar</button>
                    
                </li>
            ))}
        </ul>

        <p>Promedio de Notas: {promedio.toFixed(2)}</p>
      </>
    );
  }
  
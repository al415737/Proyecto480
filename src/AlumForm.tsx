import { useState } from "react";
import { Alumno } from "./alumno"


interface AlumFormProps {
  setAlumno: React.Dispatch<React.SetStateAction<any[]>>; 
}

export function AlumForm ({ setAlumno }: AlumFormProps) {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [nota, setNota] = useState(0);
  const [errors, setErrors] = useState<{ nombre?: string; apellidos?: string; nota?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    let newErrors: { nombre?: string; apellidos?: string; nota?: string } = {};

    if (nombre.trim() == '') newErrors.nombre = "ERROR. El campo nombre no puede estar vacío";

    if (apellidos.trim() == '') newErrors.apellidos = "ERROR. El campo apellidos no puede estar vacío";

    if (nota < 0 || nota > 10) newErrors.nota = "ERROR. El campo nota tiene que estar entre 0 - 10";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const alumno: Alumno = new Alumno(nombre, apellidos, nota);
    setNombre(''); setApellidos(''); setNota(0); setErrors({});

    setAlumno((prevAlumnos) => [...prevAlumnos, alumno]);  
  
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <h1>Añadir Alumno</h1>
          
          <label >Nombre: </label>
          <input 
            type="text" 
            name="nombre"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errors.nombre && <span className="error-message">{errors.nombre}</span>}

          <br />

          <label>Apellidos: </label>
          <input
            type="text"
            name="apellidos"
            id="apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)} 
          />
          {errors.apellidos && <span className="error-message">{errors.apellidos}</span>}

          <br />
          
          <label>Nota: </label>
          <input
            type="number"
            name="nota"
            id="nota"
            step="0.01"
            value={nota}
            onChange={(e) => setNota(Number(e.target.value))} 
          />
          {errors.nota && <span className="error-message">{errors.nota}</span>}

          <br />
          
          <button type="submit">Añadir Alumno</button>
        </form>
      </>
    );
  }
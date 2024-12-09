export class Alumno {
    private nombre: string;
    private apellidos: string;
    private nota: number;

    constructor (nombre: string, apellidos: string, nota: number) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nota = nota;
    }
}
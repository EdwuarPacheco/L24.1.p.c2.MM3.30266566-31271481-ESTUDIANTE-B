export default class Cl_Estudiante {
    constructor(Nom, Notas, Canti) {
        this.Nom = Nom;
        this.Notas = Notas;
        this.Canti = Canti;
    }
    promedio() {
        return this.Notas / this.Canti;
    }

}
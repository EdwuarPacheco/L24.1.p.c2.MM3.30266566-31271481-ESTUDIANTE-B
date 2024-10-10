import Cl_Estudiante from "./Cl_Estudiante.js";

export default class Cl_Deportista extends Cl_Estudiante {
    constructor(Nom, Notas, Canti, edad, deporte) {
        super(Nom, Notas, Canti);
        this.edad = edad;
        this.deporte = deporte;
    }
    admitido() {
        if (this.deporte == 1 && this.promedio() > 14 && this.Canti > 21){
            return true;
        } else if(this.deporte == 2 && this.promedio() >= 12 && this.Canti >= 19){
            return true;
        } else return false;
    }   
}
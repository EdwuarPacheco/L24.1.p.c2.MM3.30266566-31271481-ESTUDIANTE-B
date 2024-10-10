/**
ESTUDIANTE-B

El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
Un estudiante deportista es admitido en el equipo universitario de beisbol si su promedio de
notas es superior a 14 y tiene más de 21 años; para el equipo de fútbol ingresa con 19 años y
promedio mínimo de 12 (1=beisbol - 2=fútbol).

Diseñe las clases Cl_estudiante y Cl_deportista, usando herencia, de manera que procese un
estudiante y reporte si es admitido en el equipo que solicita.
*/

import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_Deportista from "./Cl_Deportista.js";

const deportista = new Cl_Deportista("Juan", 100, 5, 22, 1);
const deportista2 = new Cl_Deportista("Pedro", 110, 6, 15, 2);
const estudiante = new Cl_Estudiante("Juan", 100, 5);
const estudiante2 = new Cl_Estudiante("Pedro", 110, 6);


let salida = document.getElementById("Salida");

salida.innerHTML = `
<br> Nombre del estudiante: ${deportista.Nom} 
<br> Acumulado de notas: ${deportista.Notas}
<br> Cantidad de Materias: ${deportista.Canti}
<br> Deporte: ${deportista.deporte}
<br> Edad: ${deportista.edad}
<br> Nota promedio: ${deportista.promedio().toFixed(2)}
<br> ¿Se admite en el equipo?: ${deportista.admitido()}
<br><br>`

salida.innerHTML += `
<br> Nombre del estudiante: ${deportista2.Nom} 
<br> Acumulado de notas: ${deportista2.Notas}
<br> Cantidad de Materias: ${deportista2.Canti}
<br> Deporte: ${deportista2.deporte}
<br> Edad: ${deportista2.edad}
<br> Nota promedio: ${deportista2.promedio().toFixed(2)}
<br> ¿Se admite en el equipo?: ${deportista2.admitido()}`

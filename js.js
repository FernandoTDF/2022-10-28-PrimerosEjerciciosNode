//npm install readline-sync
//require('readline-sync');

let readline = require("readline-sync");
let mensaje = readline.question("ingrese cualquier texto : ");
console.log("el texto ingresado es: " + mensaje);

//ejercicio de la superficie
let base = readline.question("ingrese la base : ");
let altura = readline.question("ingrese la altura : ");
console.log("La superficie es: " + base * altura)

//ejercicio de auto

let tiemposDeVueltas = new Array(4);
let suma = 0;
for (let i = 0 ; i < tiemposDeVueltas.length ; i++){
  tiemposDeVueltas[i] = readline.questionInt("ingrese el tiempo de la vuelta n" + (i+1) +" : ");
  suma = suma + tiemposDeVueltas[i]
}
let promedio = suma / tiemposDeVueltas.length

for (let i=0 ; i < tiemposDeVueltas.length ; i++){
  console.log("el tiempo de la vuelta n" + (i+1) +" es : " + tiemposDeVueltas[i]);
}

console.log("el promedio de las vueltas es: " + promedio)
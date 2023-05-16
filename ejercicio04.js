
let str_1 = "Francisco";
let str_2 = " Cansino";


let estudiante = "Estudiante: ";
console.log(estudiante.concat(str_1, str_2));

let estudianteMayus = "ESTUDIANTE";
console.log(estudiante.toUpperCase().concat(str_1, str_2));

let estudianteMinus = "Francisco Cansino"
console.log(estudianteMinus.toLowerCase());

let numeroLetras = "";
console.log(estudiante.length);

let primeraLetra = "";
console.log(str_1.charAt(0));

let ultimaLetra = "";
console.log(str_2.charAt(6))


console.log(estudiante.trim())



var estaContenido = estudiante.includes(str_1);

console.log(estaContenido);


// Ejercicio07--FECHAS
const fecha = new Date();
console.log(fecha);
// 
const fechaNacimiento = new Date(1999, 0, 27, 09,30,00 );
console.log(fechaNacimiento);
// 
const fecha2 = new Date();
console.log(fecha2.getTime() > fechaNacimiento.getTime())
// 
const fecha3 = new Date(27)
console.log(fecha3)


const diaNacimiento = fechaNacimiento.getDate()
const mesNacimiento = fechaNacimiento.getMonth() + 1
const anyoNacimiento = fechaNacimiento.getFullYear()
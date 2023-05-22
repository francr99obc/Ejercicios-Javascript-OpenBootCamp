// Ejercicio 07--Objetos
const datos = {
    nombre: "Francisco",
    apellido: "Cansino",
    edad: 24,
    altura: 1.75,
    isDeveloper: true,
}

const prop = "edad";
console.log(datos[prop])

const listaAmigos = [ {
    ...datos
},{
    nombre: "Juan",
    apellido: "Perez",  
    edad: 25,   
    altura: 1.75,
    isDeveloper: true,
},{
    nombre: "Pedro",
    apellido: "Perez",
    edad: 25,
    altura: 1.75,
    isDeveloper: false,
}
]

const listaOrdenada = listaAmigos.sort((a, b) => b.prop - a-prop)

console.log(listaOrdenada)
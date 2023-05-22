// Ejercicio 06---Creacion variable con lista
let listaCompra = ["Leche", "Pan", "Azúcar", "Huevos", "Miel"];
console.log(listaCompra)
// añadir 1 a la lista
listaCompra.push("Aceite de Girasol");
console.log(listaCompra)
// eliminar 1 de la lista
listaCompra.pop()
console.log(listaCompra)
//lista con objetos
const peliculasFav = [
    {nombre: "Fury", director: "David Ayer", fecha: 2014 },
    {nombre: "Creed 2", director: "Steven Caple Jr", fecha: 2018},
    {nombre: "The Dark Knight", director: "Christopher Nolan", fecha: 2012},
]
console.log(peliculasFav)
//filter
const peliculasPost = peliculasFav.filter(pelicula => pelicula.fecha 
    > 2010);
console.log(peliculasPost);
//map 
const peliculasDirector = peliculasFav.map(pelicula => {
    return pelicula.director;
})
console.log(peliculasDirector);
// map 2
const peliculasTitulo = peliculasFav.map(pelicula => {
    return pelicula.nombre;
})
console.log(peliculasTitulo);
// concat
const peliculasTituloConcat = peliculasTitulo.concat(" ", peliculasDirector);
console.log(peliculasTituloConcat);
// factor de propagacion
const newArray = [...peliculasDirector, ...peliculasTitulo];
console.log(newArray);
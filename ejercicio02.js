// Ejercicio 2 OpenBootCAMP

const lista = ["Francisco", 24, "¿Eres desarrollador?", Date, Object]
if(true) {
    console.log("Sí, lo soy")
    
}

const fecha_cadena = new Date("jan 27 1999");
console.log(fecha_cadena);

const libroFavorito= {
    titulo: "El poder del ahora",
    autor:"Eckhart Tolle",
    fecha: 1997,
    url: "https://www.amazon.es/poder-del-ahora-iluminaci%C3%B3n-espiritual/dp/8484452069"
}

console.log(lista)
libroFavorito


// Solucion 

const miInformacion = {
    nombre: "Francisco",
    edad: 24,
    esDesarrollador: true,
    fechaDeNacimiento: new Date(1999, 1, 27), 
    libroFavorito: {
      titulo: "El Principito",
      autor: "Antoine de Saint-Exupéry",
      fecha: 1943,
      url: "https://es.wikipedia.org/wiki/El_principito"
    }
  };
  
  console.log(miInformacion);

//   Solucion 2

const miInformacion2 = ["Francisco", 24, true, new Date(1999, 1, 27), {titulo: "El Principito", autor: "Antoine de Saint-Exupéry", fecha: 1943, url: "https://es.wikipedia.org/wiki/El_principito"}];

if(true) {
    console.log("Sí, lo soy");
}

console.log(miInformacion2);

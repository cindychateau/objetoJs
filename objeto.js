var text = "Este es un texto";
var i = 0;
var arreglo = [3, 4, 5, 6];
var bool = false;

var nombre = "Juan";
var apellido = "Perez";
var edad = 25;
var hobbies = ["Leer", "Ejercicio", "Ver pelis"];

var estudiante1 = {
    nombre : "Juan",
    apellido: "Perez",
    edad : 25,
    hobbies: ["Leer", "Ejercicio", "Ver pelis"],
    infoCompleta: function() {
        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.edad);
    }
}

var estudiante2 = {
    nombre : "Juan",
    apellido: "Perez",
    edad : 25,
    hobbies: ["Leer", "Ejercicio", "Ver pelis"],
    infoCompleta: function() {
        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.edad);
    }
}

var lista = [estudiante1, estudiante2];

console.table(lista);
/*Es simplemente un objeto del cual
otro objeto hereda sus propiedades*/

//Definimos una funcion constructora
function Animal(nombre,genero){
    this.nombre=nombre;
    this.genero=genero;
}

//Metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo");
}

Animal.prototype.saludar = function(){
    console.log("Hola me llamno " + this.nombre);
}

//Herencia Prototipica
function Perro (nombre,genero,tamanio){
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
}

//Perro hereda de Animal
Perro.prototype = new Animal();
Perro.prototype.constuctor = Perro;

//Sobreescritura de metodos del Prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function(){
    console.log("Gua gua!!!");
}

const snoopy = new Animal("Snoopy", "Macho");
const lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

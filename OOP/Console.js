//Console
console.log(console);
console.error("Es un error");
console.warn("Es una advertencia");

let nombre = "Luis";
    apellido = "Mendoza",
    edad = 32;
console.log('hola mi nombre es %s %s y tengo %s años',nombre,apellido,edad);


//Crea en consola un grupo : Cursos de programacion
console.group("Cursos de programacion");
console.log("React");
console.log("Java");
console.log("CSS");
console.groupEnd();

//Crea una tabla con las propiedades de un objeto: console.table
let persona = {
    nombre: 'luis',
    edad : 32
}

console.table(Object.entries(persona));
console.table(persona);


//Para saber cuanto tiempo tarda en ejecutar un bloque de codigo
console.time("tiempo de ejecucion");
const arreglo = Array(1000);
for(let i = 0; i<arreglo.length; i++){
    arreglo[i]=i;
}
console.timeEnd("tiempo de ejecucion");


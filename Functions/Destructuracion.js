//Destructuracion de objetos

let persona = {
    nombre: 'luis',
    apellido: 'Mendoza',
    edad: 24,
}

let {nombre,apellido} = persona;

console.log(nombre,apellido);

//Destructuracion de arrays

const numeros = [10,12,13,15,17];

const [pc1,pc2,...tareas] = numeros;
console.log(pc1);
console.log(pc2);
console.log(tareas);
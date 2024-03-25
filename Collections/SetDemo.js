//Creacion de un objeto Set
const set1 = new Set([1,2,4,'hola',{}]);
console.log(set1.size);

const demo = new Set();
demo.add(1);
demo.add(21);
demo.add(4);
demo.add(true);
demo.add(0);

console.log(demo.size);

//Iterando un objeto Set
for(item of demo){
    console.log(item);
}
console.log("######2da forma######")
demo.forEach((item)=>console.log(item));

//Convirtiendo un Set en un arreglo
let array = Array.from(demo);
console.log(array[0]);


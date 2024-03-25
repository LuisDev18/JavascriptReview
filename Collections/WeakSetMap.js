let weakSet = new WeakSet();

let obj3 = {};
let obj4 = {};

weakSet.add(obj3);
weakSet.add(obj4);
weakSet.add(obj3); // Intento de agregar obj1 nuevamente, pero no se almacenará ya que WeakSet no permite duplicados

console.log(weakSet.has(obj1)); // Devuelve true

obj1 = null; // Eliminamos la referencia a obj1


//Creacion de un WeakMap
const weakMap = new WeakMap();

//Las claves tienen que ser objetos
let obj1={};
let obj2={};

weakMap.set(obj1,"foo");
weakMap.set(obj2,"bar");

//Eliminamos la referencia al obj1

obj1=null;
//Como el obj1 ya no tiene ninguna referencia, el valor asociado "foo" 
//tambien es eliminado.



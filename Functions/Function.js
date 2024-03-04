//Function declarations
function sumar(a,b){
    return a+b;
}
//Function expressions: Se caracteriza por estar asociada a una variable o consta , y esta no tiene nombre.
//Son recomendables cuando se pasa una funcion como parametro de otra funcion.

const resta = function(a,b){
    return a-b;
}

//Parametros de una function:
//-Rest param: Almacena una serie de argumentos infinitos de uan funcion en un arreglo
function sumando(a,b,...elementos){
    let result = a+b;
    elementos.map((n)=>{
        result = result +n;
    })
   /* elementos.forEach(function(n){
        result = result + n;
    })*/
  return result;
} 

console.log(sumando(1,2,5,6,10));

//-Default param
function multiplicando(a,b){
    b= typeof b!== "undefined"?b:1;
    return a*b;
}


function multiplicar(a,b=4){
    return a*b;
}
console.log(multiplicar(2,5));


//Operador Spread: Permite descomponer una expresion iterable en elementos individuales.
let notas_pc1 = [10,11,12,13];
let tareas_pc1 = [15,16,17,18];

//Se usa el Operador Spread para combinar 2 arrays en uno.

let nota_final = [...notas_pc1,...tareas_pc1];
console.log(nota_final);

//Ejemplo 2:
function sumando_tres(a,b,c){
    return a+b+c;
}

let numeros =[5,4,3];
//Usando el operador Spread para pasar los elementos del array como elementos individuales a la funcion
let resultado = sumando_tres(...numeros);
console.log(resultado);




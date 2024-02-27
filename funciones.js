//Expresion de una funcion con un valor predeterminado:
let sumar=function(a,b=0){
    return a+b;
}

console.log(sumar(5,4));

let restar=(a,b)=>{
    let resultado= a-b;
    return resultado;;
}

console.log(restar(4,10));   

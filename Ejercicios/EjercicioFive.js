//21: Desarrolle una funcion que dado un array numerico devuelve otro array
//array con los numeros elevados al cuadrado


const elevarCuadrado = (arraynumeros=[])=>{
    if(arraynumeros.length===0)return console.log("Ingrese un numero");
    let arrayNumerosFinal = [];

    //Usando for of
   /* for(let key of arraynumeros){
         arrayNumerosFinal=[...arrayNumerosFinal,Math.pow(key,2)]
    }*/

    /*Usando forEach
    arraynumeros.forEach((e)=>{
        arrayNumerosFinal.push(Math.pow(e,2));
    })*/

    arraynumeros.map((e)=>{
        arrayNumerosFinal.push(Math.pow(e,2));
    })

    return console.log(arrayNumerosFinal);

}

elevarCuadrado([5,4,3]);

//22)Desarrolle una funcion que dado un array devuelva el numero mas alto y bajo
/*
const maxAndMin=(arrayNum=[])=>{
    if(arrayNum.length===0)return console.log("Ingrese numeros en el array");
  
    let max =(Math.max(...arrayNum));
    let min = Math.min(...arrayNum);
    return console.log(`El numero max es : ${max} y el numero min es : ${min}`);
  
}

maxAndMin([4,5,10,-2]);*/

//2da forma:
function encontrarMaximoYMinimo(array) {
    if (array.length === 0) {
      return "El array está vacío";
    }
    
    let maximo = array[0];//8
    let minimo = array[0];//1
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maximo) {
        maximo = array[i];
      } else if (array[i] < minimo) {
        minimo = array[i];
      }
    }
    
    return console.log(`El numero maximo es: ${maximo}, el numero min es: ${minimo}` );
  }

encontrarMaximoYMinimo([1, 5, 2, 8, 4, 10]);

//23 Desarrolle una funcion que recibe un array de numeros, devuelva un objeto con 2 arreglos
//en el primero almacena los numeros pares y en el segundo los numeros impares

const arrayParesImpares = (...numeros)=>{
     if(numeros.length===0) return console.log("Ingrese valores en el arreglo");

     let result = {
         arrayPares :[],
         arrayImpares: [],
     }

     for(key of numeros){
      (key%2===0)?result.arrayPares.push(key):result.arrayImpares.push(key);     
     }

     return result;
    }
console.log(arrayParesImpares(1,4,2,5,3,8));


//24 Desarrolle uan funcion que dado un arreglo de numeros, devuelva un objeto con 2 arreglos,
//el primero los numeros ordenados ascendente y el 2do los numeros ordenados descendentes


const ordenamiento = (numeros=[])=>{

  let result = {
      arrayAsc: [],
      arrayDesc: [],
  }
  
  result.arrayAsc =numeros.sort((a,b)=>{
    return a-b});

  //El operador spread realiza una copia del arreglo original
  result.arrayDesc =[...numeros].sort((a,b)=>{
    return b-a});

  return result;
}

console.log(ordenamiento([5,2,1,4,3]));
  
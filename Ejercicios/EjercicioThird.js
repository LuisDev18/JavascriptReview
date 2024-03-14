//9)Desarrolla una funcion que obtenga numeros aleatorias entre 501-600

let aleatorio=()=>console.log(Math.round(Math.random()*100)+500);

aleatorio();

//10)Crear una funcion y verifica si un numero es capicua o no.(Se lee igual al revez Ej. 2002) true
const capicua = (numero = 0)=>{
    if(!numero) return console.log("No ingresaste un numero");

    if(typeof numero !== "number") return console.log(`El valor ${numero} ingresado, no es un numero`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves)?console.log("Si es capicua"):console.log("No es capicua");
}

capicua(152);
capicua({});
//11)Funcion que halle el factorial de un numero. Productos de numeros enteros positivos.

const factorial = (numero = 0)=>{

    if(!numero) return console.log("Ingrese un numero");
    if(numero<0) return console.log("Ingrese un numero entero positivo");

    let result=1;
    for(let i=1;i<=numero;i++){
         result=result*i;
    }
    return console.log(result);
}

factorial(6);

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const primo = (numero = 0)=>{
      if(!numero) return console.log("Ingrese un numero");
      let divisible = [];
      let resto = 0;
      for(let i=1;i<=numero;i++){
          resto=(numero % i);
          if(resto===0){
            divisible=[...divisible,numero];
          }
      }
      return(divisible.length===2)? console.log(`El numero ${numero} es primo`): console.log(`El numero ${numero} no es primo`);
      
}

primo(8);

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const isPar=(numero=0)=>{
    if(!numero) return console.log("Ingrese un numero entero");
    return (numero %2 === 0)?console.log(`El numero: ${numero} es par`): console.log(`El numero: ${numero} es impar`);
}

isPar(24);
//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const conversionToF=(valor = 0, grado="")=>{
    if(!valor) return console.log("Ingrese un numero");
    switch(grado){
        case "C":
            console.log("La temperatura en F° es: " +(((valor*9)/5) +32) + "°");
            break;
        case "F":
            console.log("La temperatura en C° es :" + ((5*(valor-32))/9) + "°");
            break;
        default:
            console.log("Grado no valido");
    }
}

conversionToF(20,"F");


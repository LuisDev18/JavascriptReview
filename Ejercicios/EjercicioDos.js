//5)Desarrolla una funcion que invierta las palabras de una cadena de texto.
//Solucion 1:
function revertir(mensaje=""){
    let result = "";
    let arreglo = [];

      for(i=0;i<mensaje.length;i++){
           arreglo=[...arreglo,mensaje[i]];
      }

      for(j=arreglo.length-1;j>=0;j--){
        result=result+ arreglo[j];
      }
     return result;
}

console.log(revertir("Payasita"));

//Solucion 2: usando metodo split y join

const invertirCadena = (cadena ="")=>
   (!cadena)?console.log("No ingresaste una cadena de texto")
   :console.log(cadena.split("").reverse().join(""));

invertirCadena("Esta mal la cadena");


//6 Desarrolla una funcion para contar el numero de veces que se repite una palabra buscada

function repetir(mensaje=""){
    let contador = 0;
    let arreglo = [];
    let palabra = "";

        for(i=0;i<mensaje.length;i++){
            if(mensaje[i]!==" "){
                palabra = palabra + mensaje[i]; 
            }else{
                arreglo=[...arreglo,palabra];
                palabra="";
            }         
        }
        arreglo.push(palabra);
       
        for(let i = 0; i < palabra.length; i++) {
            for(let j = i + 1; j < palabra.length; j++) {
                if(palabra[i] === palabra[j]) {
                    contador++;
                }
            }
        }
    
           return contador;
    
}

console.log(repetir("hola mundo hola familia"));


//Solucion 2: Usando el metodo indexOf(texto,posicion) sino encuentra la posicion te devuelve -1
const textoEnCadena = (cadena ="",texto="")=>{
    if(!cadena) return console.log("No ingresaste el texto");
    if(!texto) return console.log("No ingresaste la palabra a evaluar");

    let contador = 0;
    let i = 0;

    while(i !== -1){
        i= cadena.indexOf(texto,i);
        if(i!==-1){
            i++;
            contador++;
        }
    }
    return console.log(`La palabra ${texto} se repite ${contador} veces`);
}

textoEnCadena("cerdo cara de papita invitame una papita","papita");


//7 Desarrolla una funcion que verifique si una cadena de texto se lee igual en sentido contrario
function esPalindromo(cadena) {
    // Convertir la cadena a minúsculas y eliminar los espacios en blanco
    let cadenaProcesada = cadena.toLowerCase().replace(/\s/g, "");
    
    // Obtener el reverso de la cadena
    let reverso = cadenaProcesada.split("").reverse().join("");
    
    // Verificar si la cadena original y su reverso son iguales
    return cadenaProcesada === reverso;
}
console.log(esPalindromo("anita lava la tina")); // true


//Solucion 2:

const palindromo=(palabra="")=>{
    if(!palabra) return console.log("No ingresaste una cadena de texto");

    palabra = palabra.toLocaleLowerCase().replace(/\s/g, "");


    let alReves = palabra.split("").reverse().join("");
    return (palabra===alReves)
       ?console.log(`Si es palindromo, palabra original: ${palabra} , palabra alrevez: ${alReves}`)
       :console.log(`No es palindromo la palabra: ${palabra}`);
}


palindromo("anita lava la tina");


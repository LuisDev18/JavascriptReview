
//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo")
 //devolverá 10.

 /*const mensaje = function(cadena){
    let contador = 0;
    if(typeof cadena === 'string'){
      return  contador = cadena.length;
    } else{
        throw new Error("Ingrese una cadena de texto valida");
    }
 }

 try{
    const resultado = mensaje(25);
    console.log("El mensaje tiene :" + resultado +" caracteres");
 }catch(error){
    console.error("Ha ocurrido un error:", error.message);
 }
*/
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
//pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function separadora(mensaje, contador){
       if(typeof mensaje === "string"){
        let arreglo = [];
        let text =  [];
        //Agrega a un arreglo los caracteres de un mensaje
        for(let i =0; i<mensaje.length;i++){
              arreglo=[...arreglo,mensaje.charAt(i)];
        }
        //Filtrar los elementos del arreglo segun el contador de caracteres
        for(let j=0;j<contador;j++){
              text=[...text,arreglo[j]];
        }

        //Concateno cada elemento del nuevo arreglo en una cadena de texto
        let new_message="";
        for(k=0;k<text.length;k++){
            new_message=new_message+text[k];
        }

        return new_message;
    
       }
}

console.log(separadora("tengo frio jhony",12));

//Usando el metodo slice(indice de posicion inicial, indice posicion final)
//2da forma:

const recortarTexto=(cadena="", longitud=undefined)=>
   (!cadena)?console.log("No ingresaste una cadena de texto"):(longitud === undefined)
     ?console.log("No ingresaste la longitud para recortar al texto")
     :console.log(cadena.slice(0,longitud))

     recortarTexto("Hola mundo",4);

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function separadorEspecial(texto,separador){
    let arrayDeTextos = []; // Inicializamos un arreglo para almacenar los textos separados
    let textoActual = ''; // Inicializamos una variable para construir cada texto separado
    
    // Recorremos la cadena de texto caracter por caracter
    for (let i = 0; i < texto.length; i++) {
        // Comprobamos si el carácter actual es igual al separador
        if (texto[i] === separador) {
            // Si encontramos el separador, agregamos el texto actual al arreglo y lo reiniciamos
            if (textoActual !== '') {
                arrayDeTextos.push(textoActual);
                textoActual = '';
            }
        } else {
            // Si no es el separador, construimos el texto actual
            textoActual += texto[i];
        }
    }
    
    // Agregamos el último texto al arreglo si no está vacío
    if (textoActual !== '') {
        arrayDeTextos.push(textoActual);
    }
    
    return arrayDeTextos;
    }
     
    console.log(separadorEspecial('hola,que,tal', ','));
    


//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repetir(mensaje,repeticiones){
    if(repeticiones <0){
        return console.error("El numero de repeticiones no puede ser negativo");
    }else{
        let salida= '';
        for(i=0;i<repeticiones;i++){
            salida+=mensaje;
        }
        return console.log(salida);
    } 
}

repetir("una pavita ",3);




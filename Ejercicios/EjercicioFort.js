//15 Desarrolla una funcion para convertir numeros de base binaria a decimal y viceversa.
const convertirBinarioDecimal = (numero = undefined, base = undefined)=>{
    if(numero===undefined)return console.log("No ingreso un valor numerico");
    if(typeof numero !== "number")return console.log(`El numero ${numero} ingresado no es un numero`);
    if(base===undefined)return console.log("No ingreso una valor numerico para la base");
    if(typeof base!=="number") return console.log(`El valor ${base} ingresado no es un numero`);

    if(base ===2){
        return console.log(`El numero ${numero} en base ${base} = ${parseInt(numero,base)} en base 10`);
    }else if(base ===10){
        return console.log(`El numero ${numero} en base ${base} = ${numero.toString(2)} en base 2`);
    }
}

convertirBinarioDecimal(4,10);

//16 Desarrolla una funcion que devuelve el monto final despues de aplicar un descuento
const descuent = (monto = 0,descuento = 0)=>{
     if(!monto) return console.log("El valor del monto no puede ser vacio");
     if(monto<=0) return console.log("Ingrese un monto con un valor mayor a 0 para aplicar el descuento");
     if(typeof monto !== "number") return console.log("El valor del monto debe ser un numero");

     let valorNeto=0;
     return valorNeto=(monto*descuento)/100;
 
}

console.log(descuent(100,50));

//Ejercicios de Expresiones Regulares
//17: Desarrolle una funcion que devuelva la cantidad de vocales y consontantes de una palabra.
const contadorVocales = (palabra="")=>{
    if(!palabra) return console.log("Ingrese una palabra");
    if(typeof palabra !== "string") return console.log("Ingrese una cadena de texto");

    let contadorVocales=0;
    let contadorConsonantes=0;
    let expReg=/[aeiouAEIOU]/;
    let expRegCons=/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;

    for(let i=0;i<palabra.length;i++){

        if(expReg.test(palabra[i]) === true){
            contadorVocales++;
           }

         if(expRegCons.test(palabra[i]) === true){
           contadorConsonantes++;
         }  

    }

    return console.log(`La palabra ${palabra} tiene: ${contadorVocales} vocales y tiene ${contadorConsonantes} consonantes`);
   
}

contadorVocales("hola me llamo Luis");

//18: Desarrolle una funcion que cuando se ingresa un Nombre sea un texto valido
const validateName = (nombre="")=>{
    if(!nombre) return console.log("Ingrese un nombre")
    expRegular=/^[A-Z][a-z]*( [A-Z][a-z]*)*$/;
    
    return (expRegular.test(nombre)===true?console.log("Nombre correcto"):console.log(`El nombre no esta bien escrito ${nombre}`));
}

validateName("Luis Pepinillo Rick");

//19:Desarrolle una funcion que permita que un correo sea valido
const checkEmail = (email="")=>{
    if(!email) return console.log("Ingrese un email");
    let expRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(expRegular.test(email)===true){
      return  console.log("Correo valido");
    }else{
      return  console.log("Correo invalido");
    }
}

checkEmail("luis_18@gmail.com");
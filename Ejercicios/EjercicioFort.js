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




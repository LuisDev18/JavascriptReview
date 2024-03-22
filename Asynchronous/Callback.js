function modify (callback){
   return callback();
}

const aumentarNota = (notas=[],puntos)=>{
    notaFinal=[];
    for(let i = 0;i<notas.length;i++){
       notaFinal=[...notaFinal,notas[i]+puntos];
    }
    return notaFinal;
}
const notasPc = [12,10,15,18,8,11];
console.log(modify(()=>aumentarNota(notasPc,2)));


//Callback hell: Es la forma piramidal que tiene el 
//usar callbacks de forma continua

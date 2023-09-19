/*let miPromesa=()=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           const exito = false;
           if(exito){
                const datos=['dato1','dato2','dato3','dato4','dato5']
                resolve(datos);
           }else{
                reject('No se puedenb leer los datos');
           }
    },2000);
});
}

//Llamar a la promesa
miPromesa()
  .then((resultado)=>{
    console.log('La operación tuvo éxito',resultado);
  })
  .catch((error)=>{
    console.log('La operación no tuvo éxito',error);
  });
*/

//Promesas encadenadas
//Promesa que simula una operacion para obtener un usuario por id
async function obtenerUsuarioPorId(id){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(id<=0){
        reject('Id no valido');
      }else{
        const usuario={
          id:id,
          nombre:'Usuario'+id
        };
        resolve(usuario);
      }    
    },1000);
  })

}

//Funcion que simula una operacion para obtener los detalles de un usuario
async function obtenerDetallesUsuario(usuario){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(!usuario){
        reject('Usuario no valido');
      }else{
        const detalles=`Detalles del usuario ${usuario.nombre}`;
        resolve(detalles);  
      }
    },1000);
  })
}

//Funcion principal asincrona que usa el async/await:: Reemplaza al then().catch()
async function obtenerUsuarioYdetalles(){
  try{
     const usuario = await obtenerUsuarioPorId(1);
     console.log('Usuario obtenido:',usuario);
     
     const detalles= await obtenerDetallesUsuario(usuario);
     console.log('Detalles obtenidos:',detalles);
  }catch(error){
    console.log('Error:',error);
  }
}

obtenerUsuarioYdetalles();  

/*
//Llamar a las promesas encadenadas
obtenerUsuarioPorId(1)
  .then((usuario)=>{
    console.log('Usuario obteneido:',usuario);
    return obtenerDetallesUsuario(usuario);
  })
  .then((detalles)=>{
    console.log('Detalles obtenidos:',detalles);
  })
  .catch((error)=>{
    console.log('Error:',error);
  })*/
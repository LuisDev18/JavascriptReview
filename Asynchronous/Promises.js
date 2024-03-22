const miPromesa = new Promise((resolve, reject) => {
    // Simulamos una operación asincrónica exitosa
    setTimeout(() => {
      const exito = true;
      if (exito) {
        resolve("Operación exitosa"); // Se resuelve la promesa con un mensaje
      } else {
        reject("Hubo un error"); // Se rechaza la promesa con un mensaje de error
      }
    }, 1000);
  });
  
  miPromesa.then(resultado => {
    console.log("Resultado exitoso:", resultado); // Se ejecuta si la promesa se resuelve exitosamente
    return resultado;
  })
  .catch(error => {
    console.error("Error:", error); // Se ejecuta si la promesa es rechazada
  });


 /* Chaining Promises */
 
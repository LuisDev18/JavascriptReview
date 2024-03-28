//Metodo call
function saludar() {
    console.log(`Hola, ${this.nombre}!`);
  }
  
  const persona = { nombre: "Juan" };
  
  saludar.call(persona); // Imprimirá: "Hola, Juan!"


  //Metodo apply
  function sumar(a, b) {
    return a + b;
  }
  
  const numeros = [3, 5];
  
  console.log(sumar.apply(null, numeros)); // Imprimirá: 8
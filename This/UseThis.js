/*This en un metodo*/
let user = {
    name: "John",
    age: 30,
    //Definimos un metodo como propiedad  de un objeto
    sayHi() {
        //this:hace referencia al objeto "user"
      console.log( this.name ); 
    }
  
  };

user.sayHi();

/*This en una funcion constructora: Hace referencia al objeto*/
function Persona(name) {
    this.name = name;
  }
  
  const persona1 = new Persona("Juan");
  console.log(persona1.name); // Imprimirá: "Juan"


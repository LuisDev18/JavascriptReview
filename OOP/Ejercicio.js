//Las clases en JS conocidas como azucar sintatico 
class Animal{

    nombre;
    genero;

    constructor(nombre,genero){
        this.nombre=nombre;
        this.genero=genero;
    }

    //Métodos
    sonar(){
        console.log("Hago sonido por que estoy vivo");
    }

    saludar(){
        console.log('hola me llamo: '+ this.nombre);
    }
}

const mimi = new Animal('michifus','macho');
mimi.sonar();
mimi.saludar();


//Herencia
class Perro extends Animal{

    constructor(nombre,genero,tamanio){
         super(nombre,genero);
         this.tamanio=tamanio;
         this.raza=null;
    }

    sonar(){
        console.log("Soy un perro y ladro fuerte");
    }

    ladrar(){
        console.log("Guaaaaaaaaaaaaaaaauu");
    }

    static dormir(){
        console.log("No molestar estoy durmiendo");
    }
    //Metodos set y get
    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza=raza;
    }

}

const perrito = new Perro("scot","macho","chikito");
perrito.sonar();
perrito.ladrar();
Perro.dormir();

perrito.setRaza="Dalmata";
console.log(perrito.getRaza);
console.log(console);


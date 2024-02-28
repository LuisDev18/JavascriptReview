/*Tipo Number*/
var numberA = 5;
var numberB = 10;
var result= numberA+numberB;
console.log(result);

console.log(typeof result);


/*Tipo String*/

var userName = "Speedbox";
var typeHeal = 'Priest';
console.log(userName + "es un: " +typeHeal);

/*Tipo Boolean*/
var isReainDay = true;
var isBatteryLow = false;
/*Conversion de un tipo a Boolean con !! o Boolean()*/
var isTypeHeal = !!typeHeal;
console.log(isTypeHeal);

/*Tipo undefined*/

var version;
console.log(version);

/*Tipo null*/
let saldo = null;
console.log(saldo);

/*tipo Symbol: Es un valor unico e inmutable*/
//Crea un Symbol llamado mySymb
const mySymb = Symbol();
console.log(mySymb);
//Crea un objeto vacio llamado myObject
const myObject = {};
//Asignar un valor unico e inmutable a la propiedad mySymb
myObject[mySymb] = 'Hola';
console.log(myObject[mySymb]);
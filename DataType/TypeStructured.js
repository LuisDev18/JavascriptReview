//Object Literal
/*
let user = {
    name : "Katty",
    edad : 30,
    isSinger : true ,
}

for( let key in user){
    console.log(key + "  : "+ user[key]);
}
*/

//Ejercicio 1:
let salarios = {
    john: 100,
    Ann: 160,
    Pete: 130,
}

let result = 0;
for (let costo in salarios){
    result+= salarios[costo];
}

(result===0)?console.log(0): console.log(result);

/**Ejercicio #2 */
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}

function multiplyNumeric (menu){
    for(let key in menu){
        if(typeof menu[key] == 'number'){
            menu[key] = menu[key]*2;
        }
    }
}

multiplyNumeric(menu); // Llama a la función para modificar el objeto menu
console.log(menu);

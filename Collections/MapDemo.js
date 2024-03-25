//Creacion de un Map

let mapa = new Map();
mapa.set("carrera","Derecho");
mapa.set("edad",15);
mapa.set("esMayor",true);

console.log(mapa.size);
console.log(mapa.has("edad"));
console.log(mapa.get("carrera"));

//Iterando una Coleccion Map
for (let [key,value] of mapa){
    console.log(`Llave ${key}, Valor: ${value}`)
}


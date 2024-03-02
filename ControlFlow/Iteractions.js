/*While statement:
let nota= 0;
while(nota<10){
    console.log(nota);
    nota++;
}*/

/*Do while statement:
let edad = 5;
do{
   console.log(edad);
   edad++;
} while(edad<8);*/

//For statement:
let notas = [10,12,15,20];

for(let i = 0; i<notas.length;i++){
    console.log(notas[i]);
}

//For in:
let persona ={
    nombre: 'Luis',
    edad: 25,
    peso: 76, 
}

for(let key in persona){
   // console.log(key + ":" +persona[key]);
    console.log(`${key}: ${persona[key]}`)
}

//For of: Es para iterar sobre elementos como arrays y colecciones
// Supongamos que tenemos un array de pedidos
const listaDePedidos = [
    { id: 1, producto: "Camiseta", cantidad: 2 },
    { id: 2, producto: "Pantalón", cantidad: 1 },
    { id: 3, producto: "Zapatos", cantidad: 1 }
];

// Usamos un for...of para recorrer el array de pedidos
for (const pedido of listaDePedidos) {
    console.log(`Pedido #${pedido.id}: ${pedido.cantidad} ${pedido.producto}`);
}

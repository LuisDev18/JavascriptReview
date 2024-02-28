/*Es simplemente un objeto del cual
otro objeto hereda sus propiedades*/


function Compra (cantidad, producto, precio){
    this.cantidad = cantidad;
    this.producto = producto;
    this.precio = precio;
}

Compra.prototype.marca= 'LG';
Compra.prototype.subTotal=function(cantidad,precio){
    return(cantidad*precio);
}

let compra1 = new Compra(10,'teclado',140);
console.log(compra1.marca);
console.log(compra1.subTotal(compra1.cantidad,compra1.precio));

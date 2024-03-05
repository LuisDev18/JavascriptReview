console.log(Date()); //imprime el uso horario

//Dia de la semana:
let fecha = new Date();
//DLMMJVS -> 0 1 2 3 4 5 6
console.log(fecha.getDay());
console.log(fecha.getFullYear());
console.log(fecha.toLocaleString()); //Tue Mar 05 2024, 09:34:02
console.log(fecha.toDateString()); // Tue Mar 05 2024
console.log(fecha.toLocaleDateString()); // 5/3/2024
console.log(fecha.toLocaleTimeString()); //09:34:52

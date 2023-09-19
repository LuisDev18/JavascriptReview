
console.log('******Operacion Asincrona****');

let mascota=(nombre)=>{
    setTimeout(()=>{
        console.log(`Cuidado perrita ${nombre} durmiendo`)
        setTimeout(()=>{
          console.log('Corre la has despertado');
        },1500)
    },2000)
}
mascota('gordita');
console.log('Ya fue mano gg la life');

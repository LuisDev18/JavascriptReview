/*The setTimeout() is executed only once.

If you need repeated executions, use setInterval() instead.
for clear use clearInterval().
To clear a timeout, use the id returned from setTimeout(): 
Then you can to stop the execution by calling clearTimeout():*/

setTimeout(()=>{
    console.log('hola mundo')
},3000);



let intervalo=setInterval(()=>{
    console.log(new Date().toLocaleTimeString())
},2000);

clearInterval(intervalo);
console.log("Deteniendo el intervalo");




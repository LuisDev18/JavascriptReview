const data = [{
    title: 'Aprendiendo js',
    year: '2021',
    isb: '991-104-292929',
    author: 'Luis Mendoza'
},
{
    title: 'Aprendiendo js',
    year: '2021',
    isb: '991-104-292929',
    author: 'Luis Mendoza'
},
{
    title: 'Aprendiendo js',
    year: '2021',
    isb: '991-104-292929',
    author: 'Luis Mendoza'
}]

function getData(){
    return new Promise((resolve,reject)=>{
        if(data.length===0){
            reject(new Error('El arreglo esta vacio'));
        }
        setTimeout(()=>{
            resolve(data)
        },2000);
    })
}

//Llamando a la promesa:
/*getData()
   .then((response)=>console.log(response))
   .catch((err)=>console.log(err.message));*/

//Usando Async-await para llamar una promesa:

async function fetchingData (){
    try{
        const datosFetch = await getData();
        console.log(datosFetch);
    }catch(error){
        console.log(error.message);
    }
}

fetchingData();
 



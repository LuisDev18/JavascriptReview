//Funcion anonima auto-ejecutable uitilizando el objeto XMLHttpRequest
(() => {
  //Paso 1: Crear el objeto XMLHttpRequest
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  //Paso 2: Asignar los eventos
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      // console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText);
      console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      //Operador de Cortocircuito ||
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  //Paso 3: Abrir la conexion
  //xhr.open("GET","https://jsonplaceholder.typicode.com/users");
  xhr.open("GET", "assets/users.json");

  //Paso 4: Enviar la peticion
  xhr.send();
})();

//Funcion anonima autoejecutalbe utilizando la API Fetch
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res);
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      console.log("Estamos en el catch", err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      console.log(
        "Esto se ejecutara independientemente del resultado de la Promesa Fetch"
      );
    });
})();

//function anonima autoejecutable utilizando la API Fetch + Async-Await
(() => {
  const $fetchAsync = document.getElementById("fetch-async");
  const $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      json = await res.json();
      console.log(res, json);

      //if(!res.ok) throw new Error("Ocurrio un error al solicitar los datos");
      if (!res.ok)
        throw {
          status: res.status,
          statusText: res.statusText,
        };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      console.log(
        "Esto se ejecutara independientemente del resultado de la Promesa Fetch"
      );
    }
  }

  getData();
})();


//Funcion anonima autoejecutable utilizando la libreria de AXIOS
(()=>{
   const $axios = document.getElementById("axios");
   const $fragment = document.createDocumentFragment();
  
   axios.get("https://jsonplaceholder.typicode.com/user")
   .then((res)=>{
    console.log(res);
    let json = res.data;

    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);  
    });
      $axios.appendChild($fragment);
   })
   .catch((err)=>{
     console.log("Estamos en el catch",err.response);
     let message = err.responseText || "Ocurrio un error";
     $axios.innerHTML = `Error ${err.response.status}: ${message}`;
   })
   .finally(()=>{
    console.log("Esto se ejecutara independiente del resultado de AXIOS")
   });

})();


//Funcion anonima autoejecutable utilizando la libreria de AXIOS + Async-Await
(()=>{
    const $axiosAsync = document.getElementById("axios-async");
    const $fragment = document.createDocumentFragment();

   async function getData(){
    try{
    let res = await axios.get("https://jsonplaceholder.typicode.com/users")
    json = await res.data;
    console.log(res,json);


    json.forEach((el)=>{
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    })

    $axiosAsync.appendChild($fragment);

    }catch(err){
       console.log(err.response);
       let message = err.response.statusText || "Ocurrio un error";
       $axiosAsync.innerHTML = `Error ${err.response.status} : ${message}`;
    } finally{
      console.log("Esto se ejecutara independientemente")
    }
  
   }

   getData();
    
})();
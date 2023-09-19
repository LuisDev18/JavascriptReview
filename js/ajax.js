//Funcion anonima auto-ejecutable
(()=>{
 //Paso 1: Crear el objeto XMLHttpRequest
  const xhr = new XMLHttpRequest(),
  $xhr = document.getElementById("xhr"),
  $fragment = document.createDocumentFragment();

  //Paso 2: Asignar los eventos
  xhr.addEventListener("readystatechange", (e) => {
    if(xhr.readyState !==4) return;
    console.log(xhr);

    if(xhr.status >= 200 && xhr.status < 300){
   // console.log(xhr.responseText);
    let json= JSON.parse(xhr.responseText);
    console.log(json);

    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });

    $xhr.appendChild($fragment);
    }else{
        //Operador de Cortocircuito || 
        let message = xhr.statusText || "Ocurrio un error";
        $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
  });

  //Paso 3: Abrir la conexion
  //xhr.open("GET","https://jsonplaceholder.typicode.com/users");
  xhr.open("GET","assets/users.json");

  //Paso 4: Enviar la peticion
  xhr.send();
})();
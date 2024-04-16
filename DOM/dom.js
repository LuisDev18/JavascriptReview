console.log("*********Elementos del DOM*********");

/*DOM:Nodos-elementos-selectores*/

console.log(document.getElementsByClassName("card"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"))
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll(".card"));

/*DOM: Interactuar con Atributos y Data-Atributes*/

console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

//Es buena practica que las variables declaradas para manipular el DOM tengan el simbolo $

const $linkDOM = document.querySelector(".link-dom");

//Modificando atributos del elemento <a>
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("href","https://www.youtube.com/watch?v=l6npGZa_vgc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=64");

//Data-attributes
console.log($linkDOM.getAttribute("data-description"));

//DOM:Asignando Estilos y Variables CSS
console.log($linkDOM.style);//Te trae todas las propiedades del elemento en un estilo camelCase
console.log($linkDOM.style.backgroundColor);

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";

//Variables CSS - Custom Properties CSS

const $html = document.documentElement;
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
/*
$html.style.setProperty("--dark-color","pink");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color",varDarkColor);*/


/*DOM:Clases CSS*/
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
$card.classList.add("rotate-45","opacity-80","sepia");
console.log($card.className);
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45","opacity-80","sepia");
console.log($card.className);

/*DOM: Text - html*/
const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>El modelo OSI describe por medio de capas la transmision de datos</p>
<p>El modelo OSI describe por medio de capas la transmision de datos</p>
<p>El modelo OSI describe por medio de capas la transmision de datos</p>
`;

$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;

/*DOM Traversing
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);//Retorna elementos  hijos directos
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);*/

/*Creando elementos y fragmentos*/
const $figure = document.createElement("figure");
$img = document.createElement("img");
$figcaption = document.createElement("figcaption");
$figcaptionText = document.createTextNode("Animals");
$cards = document.querySelector(".cards");

$img.setAttribute("src","galaxy.jpeg");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");

//Agregando al arbol del DOM
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//2da forma de añadir elemntos al DOM:
$figure2 = document.createElement("figure");
$figure2.innerHTML=`
<img src="galaxy.jpeg" alt="tech">
<figcaption>RIPLEY</figcaption>
`

$figure2.classList.add("card");
$cards.appendChild($figure2);
//DOM-Template
$template = document.getElementById("template-card").content;
$fragment = document.createDocumentFragment();
cardContent = [
    {
        title: "Adidas",
        img: "galaxy.jpeg"
    },
    {
        title: "Reebok",
        img: "galaxy.jpeg"
    },
    {
        title: "Puma",
        img: "galaxy.jpeg"
    },

]

cardContent.forEach(el =>{
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone);
})


$cards.appendChild($fragment);
//Modificando Elementos del DOM(Old Style)
$newCard = document.createElement("figure");

$newCard.innerHTML = `
<img src="paneton.jpeg" alt="tech">
<figcaption>Donofrio</figcaption>
`

$newCard.classList.add("card");//agrega un estilo .card a un elemento html

//$cards.replaceChild($newCard,$cards.children[2])
$cards.removeChild($cards.lastElementChild);


//Manejador de Eventos:
//La funcion que se convetira en un event handler
function holaMundo(){
    alert("Hola Mundo");
    console.log(event);
}

//Evento Semantico: El problema es que este ejecuta una sola funcion
const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo;//Llamamos a la funcion holaMundo() pero no usamos ()

$eventoSemantico.onclick = function (e){
    alert("Hola mundo by manejador de evento semantico");
    console.log(e);
}

//Evento Multiple: uso del addEventListener
$eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click",holaMundo)
$eventoMultiple.addEventListener("click",(e)=>{
  alert("Hola Mundo soy un Manejador de Eventos Multiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
})
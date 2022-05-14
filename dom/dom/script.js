/*
let texto = "Hola, soy tu amigo digital"

const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto); 
*/
/*
console.log("*************Elementos del Documento*************");
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() =>{
    console.log(document.getSelection().toString()); 
}, 3000);

document.write("<h2>Hola desde el DOM</h2>");
*/

/*
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener"); //evita hackeos

$linkDOM.setAttribute("href","https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documeto");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a mi canal y comparte";
console.log($linkDOM.dataset.description);
*/





/*
const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log(window.getComputedStyle($linkDOM)); // esto accede a todas la propiedades del style de la pagina
console.log(getComputedStyle($linkDOM).getPropertyValue("color")); // si necesitara acceder a solo una elemento en especifico

$linkDOM.style.setProperty("text-decoration", "none"); // le quita el subrrayado al link de DOM
$linkDOM.style.setProperty("display", "block"); // esto hace que el btn DOM ocupe todo el ancho disponible

// si queremos que ocupe el 50 % del ancho disponible

$linkDOM.style.width = "50%";

// exto alineado en el centro
$linkDOM.style.textAlign = "center";

// margenes 
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";

// el margen interior del objeto en el btn
$linkDOM.style.padding = "1rem";

// bordes redondeados del btn
$linkDOM.style.borderRadius = ".5rem"; // cuando llevan el signo $ es porque hacen referrencia en el dom
console.log(getComputedStyle($linkDOM));


// variables CSS-Custom Properties CSS( variables dinamicas)
const $html = document.documentElement,
    $body = document.body;
    // todas las variables en css empiezan con --
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor); // con esto accedimos a las variables de css en el html
// modficar el color de fondo y letra de manera dinámica:
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

*/







//Acceder a las clases:
/*
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList.contains("rotate-45")); // le pregunto s tiene esa clase
// agregar una clase
$card.classList.add("rotate-45"); // para que la card se rote en 45 grados
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);

// remove para remover el metodo aplicadp:
$card.classList.remove("rotate-45");

// toggle lo que hace es evaluar si tiene la clase o se la agrega
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

// replace nos reemplazara el metodo que le pasamos como parametro
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
// add nos agragara clases adicionales:
$card.classList.add("opacity-80","sepia");
$card.classList.add("opacity-100");
$card.classList.remove("sepia");
$card.classList.remove("rotate-45", "rotate-135");
*/





/*
// Esto nos sustituye el texto:
const $whatIsDOM = document.getElementById("que-es");

let text = ` 
    <p>
        el modelo de objeto de documento (<br><i>DOM-Document Object Model</i></br>) es un API para documento HTML y XML.
    </p>
    <p>
        Este provee una representación estructural del documento, permitiendo 
        modificar su contenido y presentaciín visual mediante código JS.
    </p>
    <p>
        <mark>El DOM no es parte de la especificación de JavasScript es una API 
        para los navegadores</mark>
    </p>
    `;
//$whatIsDOM.innerText = text; // no se ocupa
//$whatIsDOM.innerHTML = text; // esto se utiliza para insertar codigo HTML
//$whatIsDOM.textContent = text; // esto es parte del estandar para introducir texto
$whatIsDOM.outerHTML = text; // esto reemplaza el texto y en la consola que no me gusta muestra el <p> de manera independiente
*/






/*
// DOM Traversing: Recorriendo el DOM 
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children); // los hijos serian cada una de las tarjetas en el cards
console.log($cards.childNodes);
console.log($cards.children[2]); // para acceder a una cards en especifico
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
//console.log($cards.previousSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div")); //busca los ansestros
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
*/






/*
// DOM: Creando Elementos(o etiquetas HTML) y Fragmentos:
// Agregar de manera dinámica una tarjeta(card):
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards");

    $img.setAttribute("src","https://placeimg.com/200/200/animals");
    $img.setAttribute("alt","Animals");
    $figure.classList.add("card");

    $figcaption.appendChild($figcaptionText);

    $figure.appendChild($img);
    $figure.appendChild($figcaption);
    $cards.appendChild($figure);
// dinamicamente agregar otra tarjeta con el HTML:
$figure2 = document.createElement("figure");
$figure2.innerHTML = ` 
    <img src="https://placeimg.com/200/200/people" alt="People" >
    <figcaption>People</figcaption>
    `;

$figure2.classList.add("card");
$cards.appendChild($figure2);
*/






/*
// Agregar una lista que este dentro de un array, en el document
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

// Agregar una segunda lista:

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
//$ul2.innerHTML = ""; // para llenar de manera rapida de contenido, primero debo mostrarlo vacio
continentes.forEach((el) => ($ul2.innerHTML += ` <li>${el}</li> `));

// agregar un tercer arreglo:
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
*/







/*
// generar elementos de manera dinamica (el appendChild):
const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,

$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title: "Tecnologia",
        img: "https://placeimg.com/200/200/tech",
    },
    {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals",

    },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",

    },
    {
        title: "Gente",
        img: "https://placeimg.com/200/200/people",

    },
    {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature",

    },
];

cardContent.forEach(el =>{
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment); //esto agreaga al final del ultimo nodo
*/








/*
// Modificando elementos(old style):
const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");
$cloneCards = $cards.cloneNode(true);// esto clonará la sección de tarjetas en 5 tarjetas más


$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card");



//$cards.replaceChild($newCard, $cards.children[2]);// replaceChild nos sirve para reemplazar

// esto la agrega antes de los nodos a reemplazar
//$cards.insertBefore($newCard, $cards.firstElementChild);

//para eliminar la ultima:
//$cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards); //esto me clonara la seccion de tarjetas al final de la seccion de la misma
*/







/* Modificando Elementos (Cool Style):
.insertAdjacent... 
.insertAdjacentElement(position, el) esto seria como el appendChild o el inserBefore
.insertAdjacentHTML(position, html) esto seria como el innerHTML, agrega contenido HTML
.insertAdjacentText(position, text) esto seria como el textContent

Posiciones:
beforebegin(hermno anterior) si tuvieras un párrafo, lo pondrias antes de ese texto
afterbegin(primer hijo) el primer elemento hijo que tomes como referencia
beforeend(ultimo hijo)
afterend(hermano siguiente)

*/
/*
const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");


$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//$cards.insertAdjacentElement("beforebegin", $newCard);
//$cards.insertAdjacentElement("afterbegin", $newCard); //esto hara que la tarjeta se inserte junto con las demas tarjetas en el content
//$cards.insertAdjacentElement("beforeend", $newCard);
//$cards.insertAdjacentElement("afterend", $newCard);

const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");


let $contenCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
//$cards.insertAdjacentElement("afterbegin", $newCard);

//$cards.prepend($newCard); // agrega la tarjeta Any como primer hijo(en la primera parte de las cards)
//$cards.before($newCard);
$cards.append($newCard); // esto agregará la tarjeta al final de las tarjetas :(
$cards.after($newCard);// de manera posterior
*/







/*
//Curso JavaScript: 72. DOM: Manejadores de Eventos :
function holaMundo(){
    alert("Hola a todes");
    console.log(event);
}

function saludar(nombre = "Desconocid@"){
    alert(`Hola ${nombre}`);
    console.log(event);
}


const $eventoSemantico = document.getElementById("evento-semantico");
$eventoMultiple = document.getElementById("evento-multiple");
$eventoRemover = document.getElementById("evento-remover");


$eventoSemantico.onclick = holaMundo; // sin los parentesis ya que en el momento en que se cargue la página este se ejecutaria de inmediato
// funcion anonima o arrow function:
$eventoSemantico.onclick = function(e){
    alert("este es el manejador de eventos semanticos");
    console.log(e);
    console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) =>{ // se puede acceder como parametro a esta funcion manejadora de ventos solo la letra e
    alert("este es el manejador de eventos semanticos");
    console.log(e);
    console.log(e.type); // para detectar el tipo de vento
    console.log(e.target); // detecta el objeto que lo origina
    console.log(event);
});

//$eventoMultiple.addEventListener("click",saludar);
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("anita");
});


const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);// esto nos deshabilita el evento de doble click al momento de ejecutar el dobe click la primera vez
    $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick",removerDobleClick);
*/








/*
// Flujo de eventos burbuja y captura:
const $divsEventos = document.querySelectorAll(".eventos-flujo div");
$linkeventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){ // el evento esta representado por la letra 'e'
    console.log(`hola te saluda ${this.className}, el click lo originó ${e.target.className}`
    );

    e.stopPropagation(); // esto evita el efecto de burbujas y solo lo ejecuta una una vez generado el click
}

console.log($divsEventos);

$divsEventos.forEach(div => {
    // fase de burbuja:
    div.addEventListener("click", flujoEventos);
  //div.addEventListener("click",flujoEventos,false);
    //fase de captura:
    // div.addEventListener("click",flujoEventos,true);
    // capture: false,
    // once: true,
});

//Curso JavaScript: 75. DOM: stopPropagation & preventDefault
$linkeventos.addEventListener("click",(e) => {
    alert("Hola soy tu amigue digital");
    e.preventDefault(); // esto nos bloquea la opción de abrir en una nueva pestaña la página
    e.stopPropagation();
});
*/







// Curso JavaScript: 76. DOM: Delegación de Eventos

/*
function flujoEventos(e){ // el evento esta representado por la letra 'e'
    console.log(`hola te saluda ${this.className}, el click lo originó ${e.target.className}`
    );
}

document.addEventListener("click",(e) => {
    console.log("Click en",e.target);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("Hola soy tu amigue digital");
        e.preventDefault(); // esto nos bloquea la opción de abrir en una nueva pestaña la página
        
    }
});
*/









/*Curso JavaScript: 77. BOM: Propiedades y Eventos
window.addEventListener("resize",(e)=> {
    console.clear();
    console.log("******Eventos Resize******");
    console.log(window.innerWidth);// innerWidth :tamaño del ancho de la ventana(viewport) en el navegador
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

window.addEventListener("resize",(e)=> {
    console.clear();
    console.log("******Eventos Scroll******");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load",(e)=> {
    //console.clear();
    console.log("******Eventos Load******");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});


document.addEventListener("DOMContentLoaded",(e) => {
    console.log("******Eventos DOMCoontentLoaded******");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
    
});
*/
/* 








*/
/*
Curso JavaScript: 78. BOM: Métodos
//alert("Alerta!");
//confirm("Confirmación");
//prompt("aviso");

const $btnAbrir = document.getElementById('abrir-ventana'),
$btnCerrar = document.getElementById('cerrar-ventana'),
$btnImprimir = document.getElementById('imprimir-ventana');

let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = open("https://jonmircha.com");
});

$btnCerrar.addEventListener("click", e => {
    ventana.close();
});
// esto imprimira o guardará en pdf la pantalla que esta en ese momento:
$btnImprimir.addEventListener("click", e => {
    window.print();
});

console.log(window);
console.log(document);
*/

/*








/*
Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador
console.log("******Objeto URL (location)******");
console.log(location);
console.log(location.origin); // la ruta de donde se origina
console.log(location.host);
console.log(location.protocol); //http
console.log(location.hostname);
console.log(location.port); // 5500 el puerto donde esta escuchando
console.log(location.href);
console.log(location.hash); // deteca el valor de la url
console.log(location.pathname); // es el archivo al cual se esta consultando
//location.reload(); // para el manejo de las rutas
console.log(location.search); // almacena las variables que se esten pasando por la url
*/





/*

//<iframe width="1290" height="500" src="https://www.youtube.com/embed/P5VxI53U_WI?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//History (historial)

console.log("******Objeto Hitorial(history******)");
console.log(history); // cuantas paginas podemos navegar hacia atras
console.log(history.length); // cuantas paginas hemos visitado
// history.back(aqui le pasamos un numero que representa cuantas paginas queremos retroceder,)navegar entre páginas, hacia atrás o adelante, o history.forward(cuantas paginas necesitamos volver al futuro).
// history.go(le decimos cuantas pág queremos ir hacia adelante)
//history.go(-1) esto nos devolvera a la pagina anterior en menos uno.
*/


/*
// Objeto navegator(navehación):
console.log("******Objeto Navegador******");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices); // dispositivos como: cámaras, micrófonos
console.log(navigator.mimeTypes);
console.log(navigator.onLine); // deteccion de eventos de conneccion
console.log(navigator.serviceWorker); // nos sirve para que en el navegador nos reconozca la pagina como una app de escritorio y se pueda descargar(progresive web app)
console.log(navigator.storage); // almacenamiento
console.log(navigator.userAgent);
console.log(navigator.usb); //cuando estan usando usb para conectarse
*/

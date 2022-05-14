/* acá se ejecutarán todos los documentos de javascript */
import scrollTopButton from "./boton_scroll.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import {digitalClock, alarm} from "./reloj.js";
import { moveBall,shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e) => { // a la carga del documento
    // el menú hamburguesa:
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    // reloj digital:
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    // alarma
    alarm("assets/alarma.mp3","#activar-alarma", "#desactivar-alarma");
    // cuenta regresiva:
    countdown(
        "countdown", 
        "Octubre 07, 2021 23:34:57", 
        "Feliz Cumpleaños 🎉🎉🎉🎉"
        ); // el segundo parámetro que le damos es la fecha y hora de hasta cuando debe llegar la cuenta regresiva

        scrollTopButton(".scroll-top-btn");
        // pág responsiva
        responsiveMedia(
            "youtube", 
            "(min-width: 1024px)", 
             `<a href="https://www.youtube.com/watch?v=PV1hF2ER_Ws" target="_blank" rel="noopener">Ver Video</a>`, //"Contenido Móvil", 
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/PV1hF2ER_Ws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`//"Contenido Escritorio"
        );

        responsiveMedia(
            "gmaps", 
            "(min-width: 1024px)", 
            `<a href="https://goo.gl/maps/wq4HtwNMqYVfq4Ds7" target="_blank" rel="noopener">Ver Mapa</a>`, //"Contenido Móvil", 
            //"Contenido Móvil", 
            `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2015632318644!2d-70.60857878504204!3d-33.41798900323259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf69d4854951%3A0x9a87ef2fefaad0df!2sCostanera%20Center!5e0!3m2!1ses!2scl!4v1618184881352!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>` //"Contenido Escritorio"
        );

        //responsive tester:
        responsiveTester("responsive-tester");
        // Detección de dispositivos User Agent:
        userDeviceInfo("user-device");
        getGeolocation("geolocation");

    });
    // pelotita del juego:
    d.addEventListener("keydown",(e)=>{
        shortcuts(e);
        moveBall(e,".ball",".stage"); //video 85
    });
    // el tema oscuro de la pág y el tema claro:
    darkTheme(".dark-theme-btn","dark-mode");
function findMe(){
    var output = document.getElementById("map");
    if (navigator.geolocation){
        output.innerHTML = `
        <p>Tu navegador soporta Geolocalización</p>`;
    }else{
        output.innerHTML = `
        <p>Tu navegador no soporta Geolocalización</p>`;
    }
    function localizacion(posicion){
        var latitude = posicion.coords.latitude;
        var longitude = posicion.coords.longitude;

        var imgUrl = "https://maps.googleapis.com/maps/api/starticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=AIzaSyCdg6QVbTG8hQHmBwUEOpyCTZDzhq_XU4Y";
        //output.innerHTML = "<p>latitud: "+latitude+"<br>longitud: "+longitude+"</p>" ; 
    }
    function error(){
        output.innerHTML = `<p>No se pudo obtener tu ubicación</p>`;
    }
    navigator.geolocation.getCurrentPosition(localizacion,error);
}

let menuVisible= false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
//Funcion que oculta el menu una vez seleccionada opcion
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false; 
}

//Función que aplica las animaciones de las skills
function efectoHabilidades(){
   var skills = document.getElementById("skills");
   var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
   if(distancia_skills >= 300){
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("php");
    habilidades[3].classList.add("wordpress");
    habilidades[4].classList.add("laravel");
    //profesional skills
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajoequipo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
    habilidades[9].classList.add("gestionproyectos");
   }
}
//detecto el scrolling para aplicar la animación de la barra de skills
window.onscroll = function(){
    efectoHabilidades();
}
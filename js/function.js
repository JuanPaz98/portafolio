
const btnMenu= document.querySelector('.boton');
const barNavegacion = document.querySelector('.barra_navegacion');
const seccion = document.querySelector('.seccion');
const espacioHeader = document.querySelector('.header');
const foot = document.querySelector('.foot')
const homeClick = document.querySelector(".home")
const aboutClick = document.querySelector(".about")
const skillsClick = document.querySelector(".skills")
const projectsClick = document.querySelector(".projects")
const contactClick = document.querySelector(".contact")

const sliders = [...document.querySelectorAll(".slider-body")]
const arrowRight = document.querySelector("#after")
const arrowLeft = document.querySelector("#before")
let value;

arrowRight.addEventListener("click", () => changePosition(1));
arrowLeft.addEventListener("click", () => changePosition(-1));

function changePosition(change){
    const current = Number(document.querySelector(".slider-body--show").dataset.id)
    
    value = current
    value += change

    console.log(value) 

    if(value === 0 || value === sliders.length +1){
        value =  value === 0 ? sliders.length : 1
    }

    sliders[current-1].classList.toggle("slider-body--show")
    sliders[value-1].classList.toggle("slider-body--show")
}


function toggleActive(x) {
    x.onclick = function(){
        btnMenu.classList.toggle('active');
        barNavegacion.classList.toggle('active');
        seccion.classList.toggle('active');
        espacioHeader.classList.toggle('active');
        foot.classList.toggle('active');
    }
}
 
toggleActive(btnMenu)
toggleActive(homeClick)
toggleActive(aboutClick)
toggleActive(skillsClick)
toggleActive(projectsClick)

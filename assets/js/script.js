
function pintar() {
    ele.style.backgroundColor = 'yellow'
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);


const brush = function(color){
    fondo = document.querySelector("body")
    fondo.style.backgroundColor = color
}


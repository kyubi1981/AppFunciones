
function pintar_color() {
    //alert("pintando...");
    const ele = document.getElementById("elemento");
    ele.style.backgroundColor = "yellow";
    ele.addEventListener("click", pintar_color);
}




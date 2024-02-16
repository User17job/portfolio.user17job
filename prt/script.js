// alert("actully in process");
window.sr = ScrollReveal();
sr.reveal('.section1', {
    duration: 1000,
});
sr.reveal('.section__nav', {
     duration: 2000,
     origin:'bottom',
     distance: '-100px'
});
sr.reveal('.section2', {
     duration: 2000,
     origin:'left',
     distance: '-100px'
});
sr.reveal('.section3', {
     duration: 2000,
     origin:'right',
     distance: '-100px'
});
sr.reveal('.section4', {
     duration: 2000,
     distance: '-100px'
});
sr.reveal('#footer', {
     duration: 2000,
     origin:'top',
     distance: '-100px'
});
sr.reveal('.div--content-imgs', {
     duration: 2000,
     distance: '-50px'
});
let btnUp = document.querySelector('.up')   
btnUp.addEventListener('click', function(){
   window.scrollBy({top:-500, behavior: "smooth"})
});
let btnDown = document.querySelector('.down')   
btnDown.addEventListener('click', function(){
   window.scrollBy({top:500, behavior: "smooth"})
});


// Obtener el elemento div
const move = document.getElementById("move");

// Inicializar las variables para guardar la posición del mouse y del move
let mouseX = 0;
let mouseY = 0;
let moveX = 0;
let moveY = 0;

// Indicar si el move está siendo arrastrado o no
let arrastrando = false;

// Función para manejar el evento mousedown
function iniciarArrastre(e) {
  // Obtener la posición actual del mouse y del move
  mouseX = e.clientX;
  mouseY = e.clientY;
  moveX = parseInt(move.style.left) || 0;
  moveY = parseInt(move.style.top) || 0;

  // Activar el arrastre
  arrastrando = true;
}

// Función para manejar el evento mousemove
function continuarArrastre(e) {
  // Si el move está siendo arrastrado
  if (arrastrando) {
    // Calcular la diferencia entre la posición actual y la anterior del mouse
    let dx = e.clientX - mouseX;
    let dy = e.clientY - mouseY;

    // Actualizar la posición del move sumando la diferencia
    move.style.left = (moveX + dx) + "px";
    move.style.top = (moveY + dy) + "px";
  }
}

// Función para manejar el evento mouseup
function terminarArrastre(e) {
  // Desactivar el arrastre
  arrastrando = false;
}

// Asignar las funciones a los eventos correspondientes
move.addEventListener("mousedown", iniciarArrastre);
document.addEventListener("mousemove", continuarArrastre);
document.addEventListener("mouseup", terminarArrastre);




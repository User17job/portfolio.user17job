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
   window.scrollBy({top:-640, behavior: "smooth"})
});
let btnDown = document.querySelector('.down')   
btnDown.addEventListener('click', function(){
   window.scrollBy({top:640, behavior: "smooth"})
});
// 

const sol = document.querySelector('.ico1')
const luna = document.querySelector('.ico2')
const darckMOde = document.querySelector(".darkLight");
const darckMOdenav = document.querySelector("#seccion1__nav");
const Color =  document.getElementById('app');
const backg1 =document.getElementById("back1")
const backg2 =document.getElementById("back2")
let chc=1
cambio();
darckMOde.addEventListener('click', cambio)
function cambio() {
     if(chc===1){
          sol.style.display='none'
          luna.style.display='block'

          document.body.style.color=' #29ffbb'

          backg1.style.display='block'
          backg2.style.display='none'
          chc=2
     }else{
          sol.style.display='block'
          luna.style.display='none'

          document.body.style.color='black'
          backg1.style.display='none'
          backg2.style.display='block'
          chc=1
     }
};
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

document.querySelector('#active').addEventListener('click',function(){
// Swal.fire("89898!");
Swal.fire({
  title: "Actually looking for a job!!!",
  html: `
  '<a href="https://wa.link/8a5lg8" target="_blank" class="anchor">Contact me</a>'
`,
  width: 500,
  padding: "3em",
//   color: "#716add",
  color: "#black",

  background: "#fff url(/images/trees.png)",
});
});

document.querySelector('.recargar').addEventListener('click',function(){
     window.scrollBy({top:-4500, behavior: "smooth"});
});

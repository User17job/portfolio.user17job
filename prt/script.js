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
   window.scrollBy({top:-640, behavior: "smooth"})
});
let btnDown = document.querySelector('.down')   
btnDown.addEventListener('click', function(){
   window.scrollBy({top:640, behavior: "smooth"})
});
// 
const darckMOde = document.querySelector(".darkLight");
const darckMOdenav = document.querySelector("#seccion1__nav");
const Color =  document.getElementById('app');
darckMOde.addEventListener('click', ()=> {
     Color.classList.toggle("negro");
     darckMOdenav.classList.toggle('blanco')
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
//   backdrop: `
//     rgba(0,0,123,0.4)
//     url("/images/nyan-cat.gif")
//     left top
//     no-repeat
//   `
});


// Swal.fire({
//      title: "<strong>HTML <u>example</u></strong>",
//      icon: "info",
//      html: `
//        You can use <b>bold text</b>,
//        <a href="#">links</a>,
//        and other HTML tags
//      `,
//      showCloseButton: true,
//      showCancelButton: true,
//      focusConfirm: false,
//      confirmButtonText: `
//        <i class="fa fa-thumbs-up"></i> Great!
//      `,
//      confirmButtonAriaLabel: "Thumbs up, great!",
//      cancelButtonText: `
//        <i class="fa fa-thumbs-down"></i>
//      `,
//      cancelButtonAriaLabel: "Thumbs down"
//    });

});

document.querySelector('.recargar').addEventListener('click',function(){
     window.scrollBy({top:-4500, behavior: "smooth"});
});


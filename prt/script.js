/*
// Seleccionar los elementos
let objeto1 = document.getElementById("objeto1");
let html = document.getElementById("objeto2");
let css = document.getElementById("objeto2");
let js = document.getElementById("objeto2");
let gith = document.getElementById("objeto2");
let gitt = document.getElementById("objeto2");
 */

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
/*
const carrito = document.querySelector('.cinco').animate(
  [
   { top: "0px", left: "0px" },    
   { top: "0px", left: "300px" },
   // El segundo movimiento hacia abajo
   { top: "300px", left: "300px" },
   // El tercer movimiento hacia la izquierda
   { top: "300px", left: "0px" },
   // El cuarto movimiento hacia arriba
   { top: "0px", left: "0px" }
  ],
  {
    // La duración de la animación en milisegundos
    duration: 4000,
    // El retraso de la animación en milisegundos
    delay: 1000,
    // La dirección de la animación (normal, reverse, alternate o alternate-reverse)
    direction:'normal',
    // El número de iteraciones de la animación (un número positivo o "infinite")
    iterations: 'infinite',
    // La función de sincronización de la animación (linear, ease, ease-in, ease-out, ease-in-out o una función personalizada)
    easing:"linear"
  } 
)
 
*/
//
//  function mover(){
//   // alert('alo');
  
//   derecha();
  
//   function derecha(){
//     carrito.style.transform = 'translate(200px, 0px)';
//     carrito.style.transition ='2s';
//   }

//   abajo();

//   function abajo(){
//     carrito.style.transform = 'translate(200px, 50px)';
//     carrito.style.transition ='2s';
//   }

//  } 

//  setInterval(mover, 5000);


// Obtener el elemento circulo del documento
 

// Definir los keyframes de la animación

// Definir las opciones de la animación
 

// Llamar a la función animate sobre el elemento circulo con los keyframes y las opciones definidas
// let opciones = {
//   // La duración de la animación en milisegundos
//   duration: 4000,
//   // El retraso de la animación en milisegundos
//   delay: 1000,
//   // La dirección de la animación (normal, reverse, alternate o alternate-reverse)
//   direction: "normal",
//   // El número de iteraciones de la animación (un número positivo o "infinite")
//   iterations: "infinite",
//   // La función de sincronización de la animación (linear, ease, ease-in, ease-out, ease-in-out o una función personalizada)
//   easing: "linear"
// };




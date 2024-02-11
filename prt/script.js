/*
// Seleccionar los elementos
let objeto1 = document.getElementById("objeto1");
let html = document.getElementById("objeto2");
let css = document.getElementById("objeto2");
let js = document.getElementById("objeto2");
let gith = document.getElementById("objeto2");
let gitt = document.getElementById("objeto2");
 */

alert("actully in process")
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
     duration: 4000,
     origin:'left',
     distance: '-100px'
   });
   sr.reveal('.section3', {
     duration: 4000,
     origin:'right',
     distance: '-100px'
   });
   sr.reveal('.section4', {
     duration: 5000,
     distance: '-100px'
   });
   sr.reveal('#footer', {
     duration: 6000,
     origin:'top',
     distance: '-100px'
   });
   sr.reveal('.div--content-imgs', {
     duration: 2000,
     distance: '-100px'
   });

let btnUp = document.querySelector('.up')   
btnUp.addEventListener('click', function(){
   window.scrollBy({top:-500, behavior: "smooth"})
})

let btnDown = document.querySelector('.down')   
btnDown.addEventListener('click', function(){
   window.scrollBy({top:500, behavior: "smooth"})
})

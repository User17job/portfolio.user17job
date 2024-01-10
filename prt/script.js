// Seleccionar los elementos
let objeto1 = document.getElementById("objeto1");
let html = document.getElementById("objeto2");
let css = document.getElementById("objeto2");
let js = document.getElementById("objeto2");
let gith = document.getElementById("objeto2");
let gitt = document.getElementById("objeto2");


// Crear una función que mueva el objeto2 a una posición aleatoria
function moverObjeto2() {
  // Generar números aleatorios entre 0 y 300
  let x = Math.floor(Math.random() * 300);
  let y = Math.floor(Math.random() * 300);

  // Asignar las coordenadas al objeto2 usando la propiedad style
   html.style.left = x + "px";
  html.style.top = y + "px";
}

// Asignar la función al evento mouseover del objeto1
objeto1.addEventListener("mouseover", moverObjeto2);

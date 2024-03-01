const form = document.querySelector('.cont__div--div');
const nom = document.getElementById('name');
const eg = document.getElementById('email');
const pass = document.getElementById("password");
const parr = document.getElementById("warnings");
const btn = document.querySelector('#btn__buttonS');


let validn = false 
let validE = false 
let validP = false
btn.addEventListener('click', function(e){
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    
    
    let input = document.getElementById('name');
    input.addEventListener('input', function() {
        let regex = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g;
        input.value = input.value.replace(regex, '');
    });

    if (nom.value.length < 3){ 
        validn = false;
    }else{
        validn = true;
    } 

    if(!regexEmail.test(eg.value)){  
        validE=false;
    }else{
        validE=true;
    }
     
   if(pass.value.length <8){
    validP=false;
   }else{
    validP=true;
   }

if(validn === true){
    if(validE===true){
        if(validP===true){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            form.reset();
        }else{alert('err in P');
              return false}
    }else{alert('err in E');
              return false}
}else{alert('err in N');
              return false}

});
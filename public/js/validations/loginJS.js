window.addEventListener('load', function(){
    
    let formulario = document.querySelector('#form-login');
    let campoEmail = document.querySelector('#email')
    let campoContraseña = document.querySelector('#password')
    let ulErroresEmail= document.querySelector('.ul-errores-email');
    let ulErroresContraseña= document.querySelector('.ul-errores-contraseña');
    campoEmail.focus()
    formulario.addEventListener('submit', e=>{
        let expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/
        let errores = [];
        campoEmail.focus()

        if(campoEmail.value ==''){
            let errorEmail = 'Debes completar el campo de email'
            errores.push(errorEmail)
            campoEmail.classList.add("errorFatal");
        }
        else if (!expEmail.test (campoEmail.value)) {
            let errorValidacion = "Por favor, escribe un mail válido"
            errores.push(errorValidacion);
            campoEmail.classList.add("errorFatal");
        }
        else{
            campoEmail.classList.remove("errorFatal");
            campoContraseña.focus();
        }
        
        if(campoContraseña.value ==''){
            let errorContraseña = 'Debes ingresar una contraseña'
            errores.push(errorContraseña)
            campoContraseña.classList.add("errorFatal");
        }
        else{
            campoContraseña.classList.remove("errorFatal");
        }

        if(errores.length > 0){
            e.preventDefault();

            ulErroresEmail.innerHTML = "";
            ulErroresContraseña.innerHTML="";

            let er= errores.indexOf('Debes completar el campo de email')
            let erro = errores.indexOf( "Por favor, escribe un mail válido")
            if(er != -1){
                ulErroresEmail.innerHTML += `<li class="text-danger">${errores[er]}</li>`
            }

            else if(erro != -1){
                ulErroresEmail.innerHTML += `<li class="text-danger">${errores[erro]}</li>`
            }
            let err = errores.indexOf('Debes ingresar una contraseña')
            if(err != -1){
                ulErroresContraseña.innerHTML += `<li class="text-danger">${errores[err]}</li>`
            }
        }
    })
})



//for (let r = 0; r < ulErrores.length; r++) {
  //  ulErrores[i].innerHTML += '<li class="text-danger">'+ errores[r] + '</li>' 
//}
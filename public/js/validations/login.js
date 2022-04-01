window.addEventListener('load', function (){
    let formulario = document.querySelector('#form-login')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let validacion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/

    //campo de errores ul
    let errorEmail = document.querySelector('#errorEmail')
    let errorPassword = document.querySelector('#errorPassword')

    email.addEventListener('blur', function(){
        if(this.value == ''){
            errorEmail.textContent = 'Ingrese su e-mail'
            email.classList.add('errorFatal')
            errorEmail.style.textAlign = 'center'
        } else if(!validacion.test(email.value)){
            errorEmail.textContent = 'Formato de e-mail incorrecto'
            email.classList.add('errorFatal')
            errorEmail.style.textAlign = 'center'
        } else {
            errorEmail.textContent = ''
            email.classList.remove('errorFatal')
        }
    })

    password.addEventListener('blur', function(){
        if(this.value == ''){
            errorPassword.textContent = 'Ingrese su contraseña'
            password.classList.add('errorFatal')
            errorPassword.style.textAlign = 'center'
        } else {
            errorPassword.textContent = ''
            password.classList.remove('errorFatal')
        }
    })


    formulario.addEventListener('submit', function(event){
        let errores = []
        if(email.value == ''){
            let error = 'Ingrese su correo'
            errores.push(error)
            email.classList.add('errorFatal')
        }else if(!validacion.test(email.value)){
            let error = 'Formato de e-mail incorrecto'
            errores.push(error)
            email.classList.add('errorFatal')
        }else{
            email.classList.remove('errorFatal')
        }

        if(password.value == ''){
            let error = 'Ingrese su contraseña'
            errores.push(error)
            password.classList.add('errorFatal')
        }else{
            password.classList.remove('errorFatal')
        }

        if(errores.length>0){
            event.preventDefault()
            errorEmail.innerHTML = ''
            errorPassword.innerHTML = ''

            let erroresEmail = errores.indexOf('Ingrese su correo')
            if(erroresEmail != -1){
                errorEmail.innerHTML += errores[erroresEmail]
            }
            errorEmail.style.textAlign = 'center'

            let erroresEmail2 = errores.indexOf('Formato de e-mail incorrecto')
            if( erroresEmail2 != -1){
                errorEmail.innerHTML += errores[erroresEmail2]
            }
            errorEmail.style.textAlign = 'center'

            let erroresPassword = errores.indexOf('Ingrese su contraseña')
            if(erroresPassword != -1){
                errorPassword.innerHTML += errores[erroresPassword]
            }
            errorPassword.style.textAlign = 'center'
        }

    })




})
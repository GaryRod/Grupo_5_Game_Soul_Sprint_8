window.addEventListener("load", () => {
    let formulario = document.getElementById("formulario-registro");
    let nombre = document.getElementById("registro-nombre");
    let email = document.getElementById("registro-email");
    let password = document.getElementById("registro-password");
    let fechaNacimiento = document.getElementById("registro-fechaNacimiento");
    let terminos = document.getElementById("tyc");
    let registroImagen = document.getElementById("registro-imagen");
    let formatoDeImagen = [".jpg", " .png"];
    let ulRegistroErroresNombre = document.getElementById("errores-ul-registro-nombre");
    let ulRegistroErroresEmail = document.getElementById("errores-ul-registro-email");
    let ulRegistroErroresContra = document.getElementById("errores-ul-registro-contraseña");
    let ulRegistroErroresFechaNacimiento = document.getElementById("errores-ul-registro-fechaNacimiento");
    let ulRegistroErroresImagen = document.getElementById("errores-ul-registro-imagen");
    let ulRegistroErroresTerminos = document.getElementById("errores-ul-registro-terminos");
    let expresionRegularValidacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/;
    let expresionRegularValidacionImagen = /\.(jpg|png|JPG|PNG)$/i;

    formulario.addEventListener("submit", (event) => {
        let errores = [];

        if (nombre.value == "") {
            let error = "Por favor, escribe un nombre"
            errores.push(error)
            nombre.classList.add("errorFatal");
            nombre.classList.add("errorFatalLetras");
        } else if (nombre.value.length <= 2) {
            let error = "Por favor, introduce un nombre con más de 2 carácteres"
            errores.push(error)
            nombre.classList.add("errorFatalDos");
            nombre.classList.add("errorFatalDosLetras");
        } else {
            nombre.classList.remove("errorFatal");
            nombre.classList.remove("errorFatalLetras");
            nombre.classList.remove("errorFatalDos");
            nombre.classList.remove("errorFatalDosLetras");
        }

        if (email.value == "") {
            let errorEmailVacio = "Por favor, escribe un mail";
            errores.push(errorEmailVacio);
            email.classList.add("errorFatal");
            email.classList.add("errorFatalLetras");
        } else if (!expresionRegularValidacionEmail.test(email.value)) {
            let errorEmailValido = "Por favor, escribe un mail válido";
            errores.push(errorEmailValido);
            email.classList.add("errorFatalDos");
            email.classList.add("errorFatalDosLetras");
        } else {
            email.classList.remove("errorFatal");
            email.classList.remove("errorFatalLetras");
            email.classList.remove("errorFatalDos");
            email.classList.remove("errorFatalDosLetras");
        }

        if (password.value == "") {
            let errorPasswordVacio = "Por favor, escribe una contraseña";
            errores.push(errorPasswordVacio);
            password.classList.add("errorFatal");
            password.classList.add("errorFatalLetras");
        } else if (password.value.length < 8) {
            let errorPasswordDebil = "Por favor, introduce una contraseña de al menos 8 carácteres";
            errores.push(errorPasswordDebil);
            password.classList.add("errorFatalDos");
            password.classList.add("errorFatalDosLetras");
        } else {
            password.classList.remove("errorFatal");
            password.classList.remove("errorFatalLetras");
            password.classList.remove("errorFatalDos");
            password.classList.remove("errorFatalDosLetras");
        }

        if (fechaNacimiento.value == "") {
            let errorFechaNacimientoVacia = "Por favor, elige tu fecha de nacimiento";
            errores.push(errorFechaNacimientoVacia);
            fechaNacimiento.classList.add("errorFatal");
            fechaNacimiento.classList.add("errorFatalLetras");
        } else {
            fechaNacimiento.classList.remove("errorFatal");
            fechaNacimiento.classList.remove("errorFatalLetras");
        }

        if(!terminos.checked) {
            let error = "Debes aceptar los términos y condiciones"
            errores.push(error)
        }

        if (registroImagen.value != '' && !(expresionRegularValidacionImagen).test(registroImagen.value)) {
            let errorImagen = 'Los formatos permitidos son ' + formatoDeImagen;
            errores.push(errorImagen);
        }

        if (errores.length > 0) {
            event.preventDefault();

            ulRegistroErroresNombre.innerHTML = "";
            ulRegistroErroresEmail.innerHTML = "";
            ulRegistroErroresContra.innerHTML = "";
            ulRegistroErroresFechaNacimiento.innerHTML = "";
            ulRegistroErroresImagen.innerHTML = "";
            ulRegistroErroresTerminos.innerHTML = "";

            let errorRegistroNombreUno = errores.indexOf("Por favor, escribe un nombre");
            let errorRegistroNombreDos = errores.indexOf("Por favor, introduce un nombre con más de 2 carácteres");

            if (errorRegistroNombreUno != -1) {
                ulRegistroErroresNombre.innerHTML += `<li class="text-danger">${errores[errorRegistroNombreUno]}</li>`
            } else if (errorRegistroNombreDos != -1) {
                ulRegistroErroresNombre.innerHTML += `<li class="text-danger">${errores[errorRegistroNombreDos]}</li>`
            }

            let errorRegistroEmailUno = errores.indexOf("Por favor, escribe un mail");
            let errorRegistroEmailDos = errores.indexOf("Por favor, escribe un mail válido");

            if (errorRegistroEmailUno != -1) {
                ulRegistroErroresEmail.innerHTML += `<li class="text-danger">${errores[errorRegistroEmailUno]}</li>`
            } else if (errorRegistroEmailDos != -1) {
                ulRegistroErroresEmail.innerHTML += `<li class="text-danger">${errores[errorRegistroEmailDos]}</li>`
            }

            let errorRegistroContraUno = errores.indexOf("Por favor, escribe una contraseña");
            let errorRegistroContraDos = errores.indexOf("Por favor, introduce una contraseña de al menos 8 carácteres");

            if (errorRegistroContraUno != -1) {
                ulRegistroErroresContra.innerHTML += `<li class="text-danger">${errores[errorRegistroContraUno]}</li>`
            } else if (errorRegistroContraDos != -1) {
                ulRegistroErroresContra.innerHTML += `<li class="text-danger">${errores[errorRegistroContraDos]}</li>`
            }

            let errorRegistroFechaNacimiento = errores.indexOf("Por favor, por una fecha de nacimiento");

            if (errorRegistroFechaNacimiento != -1) {
                ulRegistroErroresFechaNacimiento.innerHTML += `<li class="text-danger">${errores[errorRegistroFechaNacimiento]}</li>`
            }

            let errorRegistroImagen = errores.indexOf('Los formatos permitidos son '+ formatoDeImagen);

            if (errorRegistroImagen != -1) {
                ulRegistroErroresImagen.innerHTML += `<li class="text-danger">${errores[errorRegistroImagen]}</li>`
            }

            let errorRegistroTerminos = errores.indexOf("Debes aceptar los terminos y condiciones");

            if (errorRegistroTerminos != -1) {
                ulRegistroErroresTerminos.innerHTML += `<li class="text-danger">${errores[errorRegistroTerminos]}</li>`
            }

            /*let erroresUlRegistro = document.getElementById("erroresRegistro-ul");
            erroresUlRegistro.innerHTML = "";

            for (let i = 0; i < errores.length; i++) {
                erroresUlRegistro.innerHTML += `<li class="text-danger">${errores[i]}</li>`
            }*/ 
        }
    })
})
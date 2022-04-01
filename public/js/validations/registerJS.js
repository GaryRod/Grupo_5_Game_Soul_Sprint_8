window.addEventListener("load", () => {
    let formulario = document.getElementById("formulario-registro");
    let nombre = document.getElementById("registro-nombre");
    let email = document.getElementById("registro-email");
    let password = document.getElementById("registro-password");
    let fechaNacimiento = document.getElementById("registro-fechaNacimiento");
    let terminos = document.getElementById("tyc");
    let registroImagen = document.getElementById("registro-imagen");
    let formatoDeImagen = [".jpg", " .png"];
    let expresionRegularValidacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/;
    let expresionRegularValidacionImagen = /\.(jpg|png|JPG|PNG)$/i;

    formulario.addEventListener("submit", (event) => {

        let hayErrores = {
            errorNombre: nombreValidacion(),
            errorEmail: emailValidacion(),
            errorContra: contraValidacion(),
            errorFechaNacimiento: fechaNacimientoValidacion(),
            errorTerminos: terminosValidacion(),
            errorImagen: imagenValidacion()
        }

        if (hayErrores.errorNombre || hayErrores.errorEmail || hayErrores.errorContra || hayErrores.errorFechaNacimiento || hayErrores.errorTerminos || hayErrores.errorImagen) {
            event.preventDefault()
        }

    })

    nombre.addEventListener("blur", nombreValidacion);
    email.addEventListener("blur", emailValidacion);
    password.addEventListener("blur", contraValidacion);
    fechaNacimiento.addEventListener("blur", fechaNacimientoValidacion);
    terminos.addEventListener("blur", terminosValidacion);
    registroImagen.addEventListener("change", imagenValidacion);

    writeMsg = ( ...arrToWrite ) => {
        arrToWrite.forEach(elementoAEscribir => {
            document.getElementById(elementoAEscribir.identificadorDIV).innerHTML = elementoAEscribir.mensajeError;
            document.getElementById(elementoAEscribir.identificadorDIV).style.color = "red";
        });
    }

    function nombreValidacion() {
        let identificadorDIV = "errores-ul-registro-nombre";
        if (nombre.value == "" || nombre.value == null) {
            writeMsg({identificadorDIV, mensajeError: "Por favor, escribe un nombre"});
            nombre.classList.add("errorFatal");
            nombre.classList.add("errorFatalLetras");
            return true;
        } else if (nombre.value.length <= 2) {
            writeMsg({identificadorDIV, mensajeError: "Por favor, escribe un nombre que contenga más de 2 caracteres"});
            nombre.classList.add("errorFatalDos");
            nombre.classList.add("errorFatalDosLetras");
            return true;
        } else {
            writeMsg({identificadorDIV, mensajeError: ""});
            nombre.classList.remove("errorFatal");
            nombre.classList.remove("errorFatalLetras");
            nombre.classList.remove("errorFatalDos");
            nombre.classList.remove("errorFatalDosLetras");
            return false;
        }
    }

    function emailValidacion() {
        let identificadorDIV = "errores-ul-registro-email";
        if (email.value == "") {
            writeMsg({identificadorDIV, mensajeError: "Por favor, escribe un mail"});
            email.classList.add("errorFatal");
            email.classList.add("errorFatalLetras");
            return true;
        } else if (!expresionRegularValidacionEmail.test(email.value)) {
            writeMsg({identificadorDIV, mensajeError: "Por favor, escribe un mail válido"});
            email.classList.add("errorFatalDos");
            email.classList.add("errorFatalDosLetras");
            return true;
        } else {
            writeMsg({identificadorDIV, mensajeError: ""});
            email.classList.remove("errorFatal");
            email.classList.remove("errorFatalLetras");
            email.classList.remove("errorFatalDos");
            email.classList.remove("errorFatalDosLetras");
            return false;
        }
    }

    function contraValidacion() {
        let identificadorDIV = "errores-ul-registro-contraseña";
        if (password.value == "") {
            writeMsg({identificadorDIV, mensajeError: "Por favor, escribe una contraseña"});
            password.classList.add("errorFatal");
            password.classList.add("errorFatalLetras");
            return true;
        } else if (password.value.length < 8) {
            writeMsg({identificadorDIV, mensajeError: "Por favor, introduce una contraseña de al menos 8 caracteres"});
            password.classList.add("errorFatalDos");
            password.classList.add("errorFatalDosLetras");
            return true;
        } else {
            writeMsg({identificadorDIV, mensajeError: ""});
            password.classList.remove("errorFatal");
            password.classList.remove("errorFatalLetras");
            password.classList.remove("errorFatalDos");
            password.classList.remove("errorFatalDosLetras");
            return false;
        }
    }

    function fechaNacimientoValidacion() {
        let identificadorDIV = "errores-ul-registro-fechaNacimiento";
        if (fechaNacimiento.value == "") {
            writeMsg({identificadorDIV, mensajeError: "Por favor, pon una fecha de nacimiento"});
            fechaNacimiento.classList.add("errorFatal");
            fechaNacimiento.classList.add("errorFatalLetras");
            return true;
        } else {
            writeMsg({identificadorDIV, mensajeError: ""});
            fechaNacimiento.classList.remove("errorFatal");
            fechaNacimiento.classList.remove("errorFatalLetras");
            return false;
        }
    }

    function terminosValidacion() {
        let identificadorDIV = "errores-ul-registro-terminos";
        if(!terminos.checked == true) {
            writeMsg({identificadorDIV, mensajeError: "Por favor, acepta los términos"});
            return true;
        } else {
            writeMsg({identificadorDIV, mensajeError: ""});
            return false;
        }
    }

    function imagenValidacion() {
        let identificadorDIV = "errores-ul-registro-imagen";
        if (registroImagen.value != "" && !(expresionRegularValidacionImagen).test(registroImagen.value)) {
            writeMsg({identificadorDIV, mensajeError: "Los formatos permitidos son: " + formatoDeImagen});
            return true;
        } else {
            writeMsg({identificadorDIV, mensajeError: ""});
            return false;
        }
    }
})
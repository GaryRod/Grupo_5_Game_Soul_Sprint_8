window.addEventListener("load", () => {
    let formulario = document.getElementById("form-login");
    let campoEmail = document.getElementById("email-login");
    let campoContraseña = document.getElementById("password-login");
    let expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/;

    formulario.addEventListener("submit", (event) => {

        let hayErroresLogin = {
            errorLoginEmail: emailLoginValidacion(),
            errorLoginContra: contraLoginValidacion()
        }

        if (hayErroresLogin.errorLoginEmail || hayErroresLogin.errorLoginContra) {
            event.preventDefault();
        }

    })

    campoEmail.addEventListener("blur", emailLoginValidacion);
    campoContraseña.addEventListener("blur", contraLoginValidacion);

    writeMsg = ( ...arrToWrite ) => {
        arrToWrite.forEach(elementoAEscribir => {
            document.getElementById(elementoAEscribir.identificadorDIV).innerHTML = elementoAEscribir.mensajeError;
            document.getElementById(elementoAEscribir.identificadorDIV).style.color = "red";
        });
    }

    function emailLoginValidacion() {
        let identificadorDIV = "ul-errores-email";
        if(campoEmail.value == ""){
            writeMsg({identificadorDIV, mensajeError: "Por favor, escribe un mail"});
            campoEmail.classList.add("errorFatal");
            campoEmail.classList.add("errorFatalLetras");
            return true;
        }
        else if (!expEmail.test(campoEmail.value)) {
            writeMsg({identificadorDIV, mensajeError: "Por favor, escribe un mail válido"});
            campoEmail.classList.add("errorFatalDos");
            campoEmail.classList.add("errorFatalDosLetras");
            return true;
        }
        else {
            writeMsg({identificadorDIV, mensajeError: ""});
            campoEmail.classList.remove("errorFatal");
            campoEmail.classList.remove("errorFatalLetras");
            campoEmail.classList.remove("errorFatalDos");
            campoEmail.classList.remove("errorFatalDosLetras");
            return false;
        }
    }

    function contraLoginValidacion() {
        let identificadorDIV = "ul-errores-contraseña";
        if(campoContraseña.value == "") {
            writeMsg({identificadorDIV, mensajeError: "Debes ingresar una contraseña"});
            campoContraseña.classList.add("errorFatal");
            campoContraseña.classList.add("errorFatalLetras");
            return true;
        }
        else {
            writeMsg({identificadorDIV, mensajeError: ""});
            campoContraseña.classList.remove("errorFatal");
            campoContraseña.classList.remove("errorFatalLetras");
            return false;
        }
    }
})



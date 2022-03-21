window.addEventListener('load', function(){

    let nombre = document.querySelector('#nombre_editar_producto')
    let descripcion = document.querySelector('#descripcion_editar_producto')
    let imagen = document.querySelector('#imagen_editar_producto')
    let formatoDeImagen = ['jpg',' jpeg',' png',' gif']
    let formulario = document.querySelector('#formulario_editar_producto')
    let precio = document.querySelector('#precio_editar_producto')
    let genero = document.querySelector("#genero_editar_producto")
    let edicion = document.querySelector('#edicion_editar_producto')
    formulario.addEventListener('submit', function(event){

        let errores=[] 

        if(nombre.value == '' || nombre.value.length < 6){
            let error = 'El nombre debe contener mínimo 5 caracteres'
            errores.push(error)
            nombre.classList.add("errorFatal");
            nombre.classList.add("errorFatalLetras");            
        }else{
            nombre.classList.remove("errorFatal");
            nombre.classList.remove("errorFatalLetras");
        }
        if(descripcion.value == '' || descripcion.value.length <21){
            let error = 'La descripción debe contener mínimo 20 caracteres'
            errores.push(error)
            descripcion.classList.add("errorFatal");
            descripcion.classList.add("errorFatalLetras");            
        }else{
            descripcion.classList.remove("errorFatal");
            descripcion.classList.remove("errorFatalLetras");
        }
        if(genero.value == '- Género -'){
            let error = 'Seleccione un género'
            errores.push(error)
            genero.classList.add("errorFatal");
            genero.classList.add("errorFatalLetras");            
        }else{
            genero.classList.remove("errorFatal");
            genero.classList.remove("errorFatalLetras");
        }
        if(edicion.value == '- Edición -'){
            let error = 'Seleccione una edición'
            errores.push(error)
            edicion.classList.add("errorFatal");
            edicion.classList.add("errorFatalLetras");            
        }else{
            edicion.classList.remove("errorFatal");
            edicion.classList.remove("errorFatalLetras");
        }
        if(precio.value == '' || isNaN(precio.value) == true){
            let error = 'Escriba un precio, solo se aceptan números'
            errores.push(error)            
            precio.classList.add("errorFatal");
            precio.classList.add("errorFatalLetras");            
        } else if (precio.value <= 0) {
            let error = 'El valor debe ser mayor a cero'
            errores.push(error)
            precio.classList.add("errorFatal");          
            edicion.classList.add("errorFatalLetras");
        } else {
            precio.classList.remove("errorFatal");
            precio.classList.remove("errorFatalLetras");
        }
        
        if (imagen.value != '' && !(/\.(jpg|png|gif|jpeg)$/i).test(imagen.value)) {
            let error = 'Los formatos permitidos son '+ formatoDeImagen;
            errores.push(error)
        }
        if (errores.length > 0) {
            event.preventDefault();

            let errorNombre = document.querySelector('#error_nombre')
            let errorDescripcion = document.querySelector('#error_descripcion')
            let errorImagen = document.querySelector('#error_imagen')
            let errorPrecio = document.querySelector('#error_precio')
            let errorGenero = document.querySelector('#error_genero')
            let errorEdicion = document.querySelector('#error_edicion')

            errorNombre.innerHTML = ''
            errorDescripcion.innerHTML = ''
            errorImagen.innerHTML = ''
            errorPrecio.innerHTML = ''
            errorGenero.innerHTML = ''
            errorEdicion.innerHTML = ''

            let erroresNombre = errores.indexOf('El nombre debe contener mínimo 5 caracteres')
            if(erroresNombre != -1){
                errorNombre.innerHTML += errores[erroresNombre]
            }
            errorNombre.style.textAlign='center'
            let erroresDescripcion = errores.indexOf('La descripción debe contener mínimo 20 caracteres')
            if(erroresDescripcion != -1){
                errorDescripcion.innerHTML += errores[erroresDescripcion]
            }
            errorDescripcion.style.textAlign='center'
            let erroresImagen = errores.indexOf('Los formatos permitidos son '+ formatoDeImagen)
            if(erroresImagen != -1){
                errorImagen.innerHTML += errores[erroresImagen]
            }
            errorImagen.style.textAlign='center'
            let erroresImagen2 = errores.indexOf('Seleccione un archivo de imágen')
            if(erroresImagen2 != -1){
                errorImagen.innerHTML += errores[erroresImagen2]
            }
            errorImagen.style.textAlign='center'
            let erroresPrecio = errores.indexOf('Escriba un precio, solo se acpetan números')
            if(erroresPrecio != -1){
                errorPrecio.innerHTML += errores[erroresPrecio]
            }
            errorPrecio.style.textAlign='center'
            let erroresPrecio2 = errores.indexOf('El valor debe ser mayor a cero')
            if(erroresPrecio2 != -1){
                errorPrecio.innerHTML += errores[erroresPrecio2]
            }
            errorPrecio.style.textAlign='center'
            let erroresGenero = errores.indexOf('Seleccione un género')
            if(erroresGenero != -1){
                errorGenero.innerHTML += errores[erroresGenero]
            }
            errorGenero.style.textAlign='center'
            let erroresEdicion = errores.indexOf('Seleccione una edición')
            if(erroresEdicion != -1){
                errorEdicion.innerHTML += errores[erroresEdicion]
            }
            errorEdicion.style.textAlign='center'
        }
    })
})
window.addEventListener('load', function(){

    let nombre = document.querySelector('#nombre_crear_producto')
    let descripcion = document.querySelector('#descripcion_crear_producto')
    let imagen = document.querySelector('#imagen_crear_producto')
    let formatoDeImagen = ['jpg',' jpeg',' png',' gif']
    let formulario = document.querySelector('#formulario_crear_producto')
    let precio = document.querySelector('#precio_crear_producto')
    let genero = document.querySelector("#genero_crear_producto")
    let edicion = document.querySelector('#edicion_crear_producto')
    let consola = document.querySelector('#consola_crear_producto')
    let video = document.querySelector('#video_crear_producto')
    
    //Campo de <p> para los errores
    
    let errorNombre = document.querySelector('#error_nombre')
    let errorDescripcion = document.querySelector('#error_descripcion')
    let errorImagen = document.querySelector('#error_imagen')
    let errorPrecio = document.querySelector('#error_precio')
    let errorGenero = document.querySelector('#error_genero')
    let errorEdicion = document.querySelector('#error_edicion')
    let errorConsola = document.querySelector('#error_consola')
    let errorVideo = document.querySelector('#error_video')

    let validarURL = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi

    nombre.addEventListener('blur', function(){
        if(this.value == '' || nombre.value.length < 5){   
        errorNombre.textContent = 'El nombre debe contener mínimo 5 caracteres'
            nombre.classList.add("errorFatal");
            errorNombre.style.textAlign = 'center'           
        } else {
            errorNombre.textContent = ''
            nombre.classList.remove("errorFatal");
        }
    })
    descripcion.addEventListener('blur', function(){
        if(this.value == '' || descripcion.value.length <20){   
            errorDescripcion.textContent = 'La descripción debe contener mínimo 20 caracteres'
                descripcion.classList.add("errorFatal");
                errorDescripcion.style.textAlign = 'center'           
            }else{
                errorDescripcion.textContent = ''
                descripcion.classList.remove("errorFatal");
        }
    })

    genero.addEventListener('blur', function(){
        if(this.value == '- Género -'){   
            errorGenero.textContent = 'Seleccione un género'
                genero.classList.add("errorFatal");
                errorGenero.style.textAlign = 'center'           
            }else{
                errorGenero.textContent = ''
                genero.classList.remove("errorFatal");
        }
    })
    edicion.addEventListener('blur', function(){
        if(this.value == '- Edición -'){   
            errorEdicion.textContent = 'Seleccione una edición'
                edicion.classList.add("errorFatal");
                errorEdicion.style.textAlign = 'center'           
            }else{
                errorEdicion.textContent = ''
                edicion.classList.remove("errorFatal");
        }
    })
    consola.addEventListener('blur', function(){
        if(this.value == '- Consola -'){   
            errorConsola.textContent = 'Seleccione una consola'
                consola.classList.add("errorFatal");
                errorConsola.style.textAlign = 'center'           
            }else{
                errorConsola.textContent = ''
                consola.classList.remove("errorFatal");
        }
    })

    precio.addEventListener('blur', function(){
        if(this.value == ''|| isNaN(precio.value) == true){
            errorPrecio.textContent = 'Escriba un precio, solo se aceptan números'
            precio.classList.add("errorFatal");
            errorPrecio.style.textAlign = 'center'           
        } else if (precio.value <= 0) {
            errorPrecio.textContent = 'El valor debe ser mayor a cero'
            precio.classList.add("errorFatal");
            errorPrecio.style.textAlign = 'center'           
        } else {
            errorPrecio.textContent = ''
            precio.classList.remove("errorFatal");
        }
    })
    imagen.addEventListener('blur', function(){
        if(this.value == ''){
            errorImagen.textContent = 'Seleccione un archivo de imágen'
            imagen.classList.add("errorFatal");
            errorImagen.style.textAlign = 'center'           
        } else if (imagen.value != '' && !(/\.(jpg|png|gif|jpeg|JPG|PNG|GIF|JPEG)$/i).test(imagen.value)) {
            errorImagen.textContent = 'Los formatos permitidos son '+ formatoDeImagen;
            imagen.classList.add("errorFatal");
            errorImagen.style.textAlign = 'center'  
        } else {
            errorImagen.textContent = ''
            imagen.classList.remove("errorFatal");
        }
    })  
    video.addEventListener('blur', function(){
        if(this.value == ''){
            errorVideo.textContent = 'Seleccione una URL'
            video.classList.add("errorFatal");
            errorVideo.style.textAlign = 'center'           
        } else if (!validarURL.test(video.value)) {
            errorVideo.textContent = 'URL inválida';
            video.classList.add("errorFatal");
            errorVideo.style.textAlign = 'center'  
        } else {
            errorVideo.textContent = ''
            video.classList.remove("errorFatal");
        }
    })  

    formulario.addEventListener('submit', function(event){

        let errores=[] 

        if(nombre.value == '' || nombre.value.length < 5){
            let error = 'El nombre debe contener mínimo 5 caracteres'
            errores.push(error)
            nombre.classList.add("errorFatal");
        }else{
            nombre.classList.remove("errorFatal");
            
        }
        if(descripcion.value == '' || descripcion.value.length <20){
            let error = 'La descripción debe contener mínimo 20 caracteres'
            errores.push(error)
            descripcion.classList.add("errorFatal");
        }else{
            descripcion.classList.remove("errorFatal");
            
        }
        if(genero.value == '- Género -'){
            let error = 'Seleccione un género'
            errores.push(error)
            genero.classList.add("errorFatal");
        } else {
            genero.classList.remove("errorFatal");
        }
        if(edicion.value == '- Edición -'){
            let error = 'Seleccione una edición'
            errores.push(error)
            edicion.classList.add("errorFatal");
        } else {
            edicion.classList.remove("errorFatal");
        }
        if(consola.value == '- Consola -'){
            let error = 'Seleccione una consola'
            errores.push(error)
            consola.classList.add("errorFatal");
        }else {
            consola.classList.remove("errorFatal");
        }
        if(precio.value == '' || isNaN(precio.value) == true){
            let error = 'Escriba un precio, solo se aceptan números'
            errores.push(error)
            precio.classList.add("errorFatal");          
            
        } else if (precio.value <= 0) {
            let error = 'El valor debe ser mayor a cero'
            errores.push(error)
            precio.classList.add("errorFatal");          
        } else {
            edicion.classList.remove("errorFatal");
        }
        if(imagen.value == ''){
            let error = 'Seleccione un archivo de imágen'
            errores.push(error)
        }
        if (imagen.value != '' && !(/\.(jpg|png|gif|jpeg|JPG|PNG|GIF|JPEG)$/i).test(imagen.value)) {
            let error = 'Los formatos permitidos son '+ formatoDeImagen;
            errores.push(error)
        }

        if(video.value == ''){
            let error = 'Seleccione una URL'
            errores.push(error)
            video.classList.add("errorFatal");          
        } else if (!validarURL.test(video.value)) {
            let error = 'URL inválida';
            errores.push(error)
            video.classList.add("errorFatal");
        } else {
            video.classList.remove("errorFatal");
        }

        if (errores.length > 0) {
            event.preventDefault();

            errorNombre.innerHTML = ''
            errorDescripcion.innerHTML = ''
            errorImagen.innerHTML = ''
            errorPrecio.innerHTML = ''
            errorGenero.innerHTML = ''
            errorEdicion.innerHTML = ''
            errorConsola.innerHTML = ''
            errorVideo.innerHTML = ''

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
            let erroresVideo = errores.indexOf('URL inválida')
            if(erroresVideo != -1){
                errorVideo.innerHTML += errores[erroresVideo]
            }
            errorVideo.style.textAlign='center'
            let erroresVideo2 = errores.indexOf('Seleccione una URL')
            if(erroresVideo2 != -1){
                errorVideo.innerHTML += errores[erroresVideo2]
            }
            errorVideo.style.textAlign='center'
            let erroresPrecio = errores.indexOf('Escriba un precio, solo se aceptan números')
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
            let erroresConsola = errores.indexOf('Seleccione una consola')
            if(erroresConsola != -1){
                errorConsola.innerHTML += errores[erroresConsola]
            }
            errorConsola.style.textAlign='center'
        }
    })
})
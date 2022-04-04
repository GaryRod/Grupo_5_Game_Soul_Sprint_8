window.addEventListener("load", () => {
    let descripcionProducto = document.getElementById("descripcion-juego");
    let videoHTML = document.getElementById("video-html");
    let botonDescripcion = document.getElementById("boton-descripcion");
    let botonVideo = document.getElementById("boton-video");
    let botonFichaTecnica = document.getElementById('descripcion-ficha-tecnica')
    let fichaTecnica = document.getElementById('ficha-tecnica')
    descripcionProducto.style.display ='none'
    botonVideo.addEventListener("click", () => {
        descripcionProducto.style.display = "none";
        fichaTecnica.style.display = 'none'
        videoHTML.style.display = "block";
    })

    botonDescripcion.addEventListener("click", () => {
        fichaTecnica.style.display = 'none'
        videoHTML.style.display = "none";
        descripcionProducto.style.display = "block";
    })

    botonFichaTecnica.addEventListener('click', function(){
        descripcionProducto.style.display = 'none'
        videoHTML.style.display = 'none'
        fichaTecnica.style.display = 'block'
    })

})
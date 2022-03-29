window.addEventListener("load", () => {
    let descripcionProducto = document.getElementById("descripcion-juego");
    let videoHTML = document.getElementById("video-html");
    let botonDescripcion = document.getElementById("boton-descripcion");
    let botonVideo = document.getElementById("boton-video");

    botonVideo.addEventListener("click", () => {
        descripcionProducto.style.display = "none";

        videoHTML.style.display = "block";
    })

    botonDescripcion.addEventListener("click", () => {
        descripcionProducto.style.display = "block";

        videoHTML.style.display = "none";
    })
})
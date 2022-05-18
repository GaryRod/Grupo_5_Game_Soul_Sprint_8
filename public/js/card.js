let contCard = document.querySelector('.section-sec__cont-arts')
    contCard.addEventListener('click', e => {
        if (e.target.classList.contains('button-carrito')) {
            e.preventDefault()
            console.log(e.target.parentElement);
        }
    })
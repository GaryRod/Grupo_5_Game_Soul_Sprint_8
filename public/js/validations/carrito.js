const Clickbutton = document.querySelectorAll('.button-carrito')



export let carrito =[]


Clickbutton.forEach(element => {
    element.addEventListener('click', addToCartItem)

});
function addToCartItem(e){
    const button = e.target
    const item = button.closest('.section-sec__arts')
    const itemTitle = item.querySelector('#titulo').textContent
    const itemPrecio = item.querySelector('#precio').textContent

    const itemImg = item.querySelector('.section-sec__imgs').src

    const newCarrito ={
        title: itemTitle,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1
    }
    addItemCarrito(newCarrito)
    
    console.log(carrito)
}


function addItemCarrito(newCarrito){


    carrito.push(newCarrito)
   
}
/*function renderCarrito(tBody){
    tBody.innerHTML =""
    carrito.map(item=>{
        const tr = document.createElement('tr')
        const content= `
        <article class="section-sec__arts">

                        <div class="section-sec__cont-picture-star">
                            <picture class="section-sec__picture">
                                <img src=${item.img} class="section-sec__imgs">
                            </picture>
                            <div class="section-sec__cont-star">
                                <i class="fas fa-star section-sec__star"></i>
                            </div>
                        </div>

                        <div class="section-sec__cont-datos">
                            <span id="titulo" class="section-sec__spans"><a href="/products/detail/<%= element.id %>" class="section-sec__titulo-enlace">${item.title}</a></span>
                            <span id="precio" class="section-sec__spans">$ ${item.precio}</span>
                        </div>
                        <input type="number" min="1" value=${item.cantidad}>
                        <button>x</button>

                        
                    </article>
        
        `
        tr.innerHTML = content;
        tBody.appendChild(tr)
    })
}




/*
 tBody.innerHTML=""
    carrito.map(item=>{
        const tr = document.createElement('tr')
        const content= `
        <article class="section-sec__arts">

                        <div class="section-sec__cont-picture-star">
                            <picture class="section-sec__picture">
                                <img src=${item.img} class="section-sec__imgs">
                            </picture>
                            <div class="section-sec__cont-star">
                                <i class="fas fa-star section-sec__star"></i>
                            </div>
                        </div>

                        <div class="section-sec__cont-datos">
                            <span id="titulo" class="section-sec__spans"><a href="/products/detail/<%= element.id %>" class="section-sec__titulo-enlace">${item.title}}</a></span>
                            <span id="precio" class="section-sec__spans">$ ${item.precio}</span>
                        </div>
                        <input type="number" min="1" value=${item.cantidad}>
                        <button>x</button>

                        
                    </article>
        
        `
        tr.innerHTML = content;
        tBody.appendChild(tr)
    })

*/

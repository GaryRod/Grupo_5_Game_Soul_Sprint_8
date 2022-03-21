import { carrito } from "./carrito.js";
console.log(carrito)
const contCarrito = document.querySelector('.carrito')


function renderCarrito(){
    contCarrito.innerHTML +=""
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
        contCarrito.appendChild(tr)
    })
}
renderCarrito()
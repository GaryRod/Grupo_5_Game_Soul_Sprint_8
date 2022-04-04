let allContainerCart = document.querySelector('.section-sec__cont-arts')
let imagen = document.querySelector('.section-sec__imgs')
let containerBuyCart = document.querySelector('.card-item')
let priceTotal = document.querySelector('.price-total')
let carritoTotal = document.querySelector('.count-product')
let buy=[]
let totalCard = 0;
let countProduct = 0;

loadEventListenrs()

function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct)
    containerBuyCart.addEventListener('click', deleteProduct)
}

function addProduct(e){
    if(e.target.classList.contains('button-carrito')){
        
        const selectProduct = e.target.parentElement
        readTheContent(selectProduct)

    }
}

function deleteProduct(e){
    if(e.target.classList.contains('delete-product')){
        const deleteId = e.target.getAttribute('data-id')
        buy.forEach(value => {
            if(value.id == deleteId){
                let priceReduce = value.price * value.amount
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        })
        buy = buy.filter(product => product.id !== deleteId)
        countProduct--;
    }
    loadHTML()
}

function readTheContent(product){
    const infoProduct = {
        imagen: product.querySelector('picture a img').src,
        title: product.querySelector('#titulo').textContent,
        price: product.querySelector('#precio').textContent,
        id: product.querySelector('#submit').getAttribute('data-id'),
        amount: 1
    }
    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);
    const exist = buy.some(product => product.id == infoProduct.id)
    if(exist){
        const pro = buy.map(product => {
            if(product.id == infoProduct.id){
                product.amount++
                return product
            } else {
                return product
            }
        })
        buy = [...pro]
    } else {
                buy = [...buy, infoProduct]
                countProduct++
    }
    loadHTML()
    console.log(infoProduct)
}

function loadHTML(){
    vaciarCarrito()
    buy.forEach(product =>{
    const {imagen,title,price,amount,id} = product
    const row = document.createElement('div')
    row.classList.add('item')
    row.innerHTML =`
            <img id="contentImagen" src="${imagen}">
            <div class="itemContent">
                <h5 class="h5">${title}</h5>
                <h5 class="cart-price">Precio: $${price}</h5>
                <h6 class="h6">Cantidad: ${amount}</h6>
            </div>
            <div class="divSpan">
            <span class='delete-product' data-id='${id}'>X</span></div>`
    containerBuyCart.appendChild(row);
    priceTotal.innerHTML = totalCard;
    carritoTotal.innerHTML = countProduct;
    })
}
function vaciarCarrito(){
    containerBuyCart.innerHTML =''
    if(buy == ''){
        priceTotal.innerHTML='0'
            carritoTotal.innerHTML = '0'
        }
    } 
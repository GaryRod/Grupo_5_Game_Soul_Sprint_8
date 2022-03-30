let d = document

let menu = d.querySelector('#menu')
let nav = d.querySelector('nav')

menu.addEventListener('click', e => {
    nav.classList.toggle('header__nav-mobile')
})
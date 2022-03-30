export default function hambugerMenu(button, nav){

    const d = document;

    d.addEventListener("click", e =>{
        if (e.target.matches(button)){
            d.querySelector(nav).classList.toggle("header__nav-mobile")
        }
    })
}
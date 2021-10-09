//FUNÇÃO DO MENU HAMBURGUER

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



//CONJUNTO DE FUNÇÕES PARA MUDAR OPACIDADE E Z-INDEX DO BANNER
function bannerEnter(obj) {

    obj.style.transition = "0.5s";
    obj.style.opacity = 1;
    obj.style.zIndex = 2;

}

function bannerLeave(obj) {

    obj.style.transition = "0s";

    if (obj.id != "banner3") {
        obj.style.zIndex = 0;
    } else if (obj.id = "banner3") {
        obj.style.zIndex = 1;
    }

    obj.style.opacity = 0.7;
}
//-----------------------------------------------------------------------------//
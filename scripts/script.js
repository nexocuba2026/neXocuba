const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('show');
});
function toggleMenu() {
    document.getElementById("menuLateral").classList.toggle("activo");
}

function cerrarMenu() {
    document.getElementById("menuLateral").classList.remove("activo");
}

/* cerrar al presionar un enlace */
document.querySelectorAll("#menuLateral a").forEach(link => {
    link.addEventListener("click", cerrarMenu);
});

/* cerrar al hacer click fuera */
document.addEventListener("click", function(event) {

    const menu = document.getElementById("menuLateral");
    const boton = document.querySelector(".menu-btn");

    if (!menu.contains(event.target) && !boton.contains(event.target)) {
        menu.classList.remove("activo");
    }

});
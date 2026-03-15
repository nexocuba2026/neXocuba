const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

/* abrir y cerrar menú */
btnMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('show');
});

/* cerrar menú al presionar un enlace */
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

/* cerrar menú al hacer click fuera */
document.addEventListener("click", function(event) {

  const clickDentroMenu = menu.contains(event.target);
  const clickBoton = btnMenu.contains(event.target);

  if (!clickDentroMenu && !clickBoton) {
    menu.classList.remove("show");
  }

});
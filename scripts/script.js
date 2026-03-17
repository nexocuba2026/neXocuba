const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

/* abrir o cerrar menú */
btnMenu.addEventListener('click', function(event) {
  event.stopPropagation();
  menu.classList.toggle('show');

  if (menu.classList.contains('show')) {
    menu.style.opacity = "0";
    menu.style.transform = "translateX(20px)";

    setTimeout(() => {
      menu.style.opacity = "1";
      menu.style.transform = "translateX(0)";
    }, 10);
  }
});

/* cerrar menú al presionar enlace */
document.querySelectorAll('#menu a').forEach(function(link) {
  link.addEventListener('click', function() {
    cerrarMenu();
  });
});

/* cerrar menú al hacer clic fuera */
document.addEventListener('click', function(event) {

  const clickDentroMenu = menu.contains(event.target);
  const clickEnBoton = btnMenu.contains(event.target);

  if (!clickDentroMenu && !clickEnBoton) {
    cerrarMenu();
  }

});

/* función de cierre con animación */
function cerrarMenu() {
  menu.style.opacity = "0";
  menu.style.transform = "translateX(20px)";

  setTimeout(() => {
    menu.classList.remove('show');
  }, 200);
}
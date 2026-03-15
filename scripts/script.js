const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

/* abrir o cerrar menú al presionar el botón */
btnMenu.addEventListener('click', function(event) {
  event.stopPropagation();
  menu.classList.toggle('show');
});

/* cerrar menú al presionar un enlace */
document.querySelectorAll('#menu a').forEach(function(link) {
  link.addEventListener('click', function() {
    menu.classList.remove('show');
  });
});

/* cerrar menú al hacer clic fuera */
document.addEventListener('click', function(event) {

  const clickDentroMenu = menu.contains(event.target);
  const clickEnBoton = btnMenu.contains(event.target);

  if (!clickDentroMenu && !clickEnBoton) {
    menu.classList.remove('show');
  }

});
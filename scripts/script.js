const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
  if(menu.style.display === "block"){
    menu.style.display = "none";
  } else{
    menu.style.display = "block";
  }
});
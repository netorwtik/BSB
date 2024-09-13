const menuButton = document.getElementById('menuButton');
const closeMenuButton = document.getElementById('closeMenu');
const welcomeMenu = document.querySelector('.welcome-menu');
const welcomeSection = document.querySelector('.welcome-section');

menuButton.addEventListener('click', function () {
  welcomeMenu.style.display = 'flex'; // Показать меню
  welcomeSection.style.display = 'none'; // Скрыть первый блок
});

closeMenuButton.addEventListener('click', function () {
  welcomeMenu.style.display = 'none'; // Скрыть меню
  welcomeSection.style.display = 'block'; // Показать первый блок
});

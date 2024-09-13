const menuButton = document.getElementById('menuButton');
const closeMenuButton = document.getElementById('closeMenu');
const welcomeMenu = document.querySelector('.welcome-menu');
const welcomeSection = document.querySelector('.welcome-section');

menuButton.addEventListener('click', function () {
  welcomeMenu.style.display = 'flex';
  welcomeSection.style.display = 'none';
});

closeMenuButton.addEventListener('click', function () {
  welcomeMenu.style.display = 'none';
  welcomeSection.style.display = 'block';
});

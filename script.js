window.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const menuBar = document.querySelector('.bot-menu');
  
  menuIcon.addEventListener('click', () => {
    menuBar.classList.toggle('open');
    menuBar.classList.toggle('closed');
  });
});
const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const crossIcon = document.querySelector('.cross-icon');
const ShowGetInTouchMenu = document.querySelector('.get-in-touch-div');
const ShowGetInTouchUl = document.querySelector('.get-in-touch-ul');
const ShowTicketFooterMenu = document.querySelector('.view-div');
const ShowTicketFooterUl = document.querySelector('.view-ul');
const ShowQuickAccessMenu = document.querySelector('.quick-access-div');
const ShowQuickAccessUl = document.querySelector('.quick-access-ul');

hamburgerIcon.addEventListener('click', function () {
  console.log(hamburgerMenu.style.transform);
  hamburgerMenu.classList.add('show-hamburger-menu');
});
crossIcon.addEventListener('click', function () {
  hamburgerMenu.classList.remove('show-hamburger-menu');
});
ShowGetInTouchMenu.addEventListener('mouseover', function () {
  ShowGetInTouchUl.classList.remove('get-in-touch-display');
});
ShowGetInTouchMenu.addEventListener('mouseout', function () {
  ShowGetInTouchUl.classList.add('get-in-touch-display');
});
ShowTicketFooterMenu.addEventListener('mouseover', function () {
  ShowTicketFooterUl.classList.remove('view-display');
});
ShowTicketFooterMenu.addEventListener('mouseout', function () {
  ShowTicketFooterUl.classList.add('view-display');
});
ShowQuickAccessMenu.addEventListener('mouseover', function () {
  ShowQuickAccessUl.classList.remove('quick-access-display');
});
ShowQuickAccessMenu.addEventListener('mouseout', function () {
  ShowQuickAccessUl.classList.add('quick-access-display');
});
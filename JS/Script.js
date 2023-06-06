const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const crossIcon = document.querySelector('.cross-icon');
const showTicketMenu = document.querySelector('#show-ticket-menu');
const ShowdMoreMenu = document.querySelector('#show-more-menu');
const ShowGetInTouchMenu = document.querySelector('.get-in-touch-div');
const ShowGetInTouchUl = document.querySelector('.get-in-touch-ul');
const ShowTicketFooterMenu = document.querySelector('.ticket-div');
const ShowTicketFooterUl = document.querySelector('.ticket-ul');
const ShowQuickAccessMenu = document.querySelector('.quick-access-div');
const ShowQuickAccessUl = document.querySelector('.quick-access-ul');
const Carousel = document.querySelector('.carousel');
const FirstBox = Carousel.querySelectorAll('.box')[0];
const ArrowIcons = document.querySelectorAll('.arrow');

let isDragStart = false, prevPageX, prevScrollLeft;
let firstBoxWidth = FirstBox.clientWidth + 20; 

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
  ShowTicketFooterUl.classList.remove('ticket-display');
});
ShowTicketFooterMenu.addEventListener('mouseout', function () {
  ShowTicketFooterUl.classList.add('ticket-display');
});
ShowQuickAccessMenu.addEventListener('mouseover', function () {
  ShowQuickAccessUl.classList.remove('quick-access-display');
});
ShowQuickAccessMenu.addEventListener('mouseout', function () {
  ShowQuickAccessUl.classList.add('quick-access-display');
});
showTicketMenu.addEventListener('mouseenter', function (e) {
  const div = e.target.childNodes[5];
  div.style.animation = 'showUp 0.32 1';
  div.style.display = 'block';
});
showTicketMenu.addEventListener('mouseleave', function (e) {
  const div = e.target.childNodes[5];
  div.style.display = 'none';
});
ShowdMoreMenu.addEventListener('mouseenter', function (e) {
    const div = e.target.childNodes[5];
    div.style.animation = 'showUp 0.32 1';
    div.style.display = 'block';
}); 
ShowdMoreMenu.addEventListener('mouseleave', function (e) {
    const div = e.target.childNodes[5];
    div.style.display = 'none';
});

ArrowIcons.forEach(icon => {
  icon.addEventListener("click", () =>{
    Carousel.scrollLeft += icon.id == "left" ? -firstBoxWidth : firstBoxWidth;
  });
});
const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = Carousel.scrollLeft
}
const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  Carousel.classList.add("dragging")
  let positionDiff = e.pageX - prevPageX;
  Carousel.scrollLeft = prevScrollLeft - positionDiff;

}
const dragStop = () => {
  isDragStart = false;
  Carousel.classList.remove("dragging")
}

Carousel.addEventListener("mousedown", dragStart);
Carousel.addEventListener("mousemove", dragging);
Carousel.addEventListener("mouseup", dragStop);




  

  



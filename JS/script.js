AOS.init();

let burger = document.querySelector('.header__burger');
let bgcSpace = document.querySelector('.menu__navigation');
let burgerClose = document.querySelector('.header__burger-lines');

burger.addEventListener('click', () => {
    bgcSpace.classList.toggle('active');
    burgerClose.classList.toggle('header__burger-active');
})

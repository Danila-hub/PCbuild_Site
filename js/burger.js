const burgerButton = document.querySelector('.header__burger')
const headerNav = document.querySelector('.header__nav')
const body = document.querySelector('body')

burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('active')
    headerNav.classList.toggle('active')
    body.classList.toggle('lock')
})
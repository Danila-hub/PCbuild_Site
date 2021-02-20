function scroll(selectorFrom, selectorTo) {
  document.querySelector(selectorFrom).addEventListener('click', (event) => {
    if (burgerButton.classList.contains('active')) {
      switchBurger();
    }
    event.preventDefault();
    document.documentElement.scrollBy({
      top:
        document.querySelector(selectorTo).getBoundingClientRect().top -
        document.querySelector('.header').clientHeight +
        35,
      behavior: 'smooth',
    });
  });
}
scroll('.heading__anchor', '.communication');
scroll('.heading__btn-1', '.accessories');
scroll('.heading__btn-2', '.build');
const headerMenu = document.querySelector('.header__menu');
const headerLinks = headerMenu.querySelectorAll('a');

headerLinks.forEach((link) => {
  scroll(`#${link.getAttribute('id')}`, `.${link.getAttribute('id')}`);
});

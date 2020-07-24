const burger = document.querySelector('.nav__burger'),
      menu = document.querySelector('.nav__menu');

burger.addEventListener("click", () => {
    if (document.body.clientWidth < 820) {
        menu.classList.toggle('nav__menu--active');
    } else {
        burger.classList.toggle('nav__burger--active');
    }
});
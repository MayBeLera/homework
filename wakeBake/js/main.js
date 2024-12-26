const btnBurger = document.querySelector('.burger-icon');
const body = document.body;
const link = document.querySelectorAll('.nav__link')

btnBurger.addEventListener('click', () => {
    body.classList.toggle('body--opened-menu')
})

link.addEventListener('click', () => {
    body.classList.remove('body--opened-menu')
})

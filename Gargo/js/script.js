// Бургер меню
document.addEventListener('click', burgerInit);

function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNavLink = e.target.closest('.nav__link .btn-nav');

    if(!burgerIcon && !burgerNavLink) return
    if(document.documentElement.clientWidth > 900) return

    if(!document.body.classList.contains('body--opened-menu')){
        document.body.classList.add('body--opened-menu')
    } else {
        document.body.classList.remove('body--opened-menu')
    }
}

// Слайдер-баннер
const swiper = new Swiper('.banner__slider', {
    slidesPerView: 1,
  
    pagination: {
      el: '.banner__pagination'
    },
  

    navigation: {
      nextEl: '.banner__next',
      prevEl: '.banner__prev',
    },

    
  });

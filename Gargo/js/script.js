// Модальное окно
const modal = document.querySelector('.header__modal');
const modalButton = document.querySelector('.header__button');

modalButton.addEventListener('click', openModal)

function openModal (e) {
  e.preventDefault()
  document.body.classList.toggle('body--opened-modal')
}

modal.addEventListener('click', closeModal)

function closeModal (e) {
  e.preventDefault()
  const target = e.target;

  if(target.closest('.modal__cancel') || target.classList.contains('modal')){
    document.body.classList.remove('body--opened-modal')
  }
}



// Бургер меню
document.addEventListener('click', burgerInit);

function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNavLink = e.target.closest('.nav__link ');
    const headerButton = document.querySelector('.header__button')

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

// Слайдер плюсы-компании
new Swiper('.advantages__slider', {
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: '.advantage__pagination',
  },

  breakpoints: {
    401:{
      slidesPerView: 1,
    },
    801:{
      slidesPerView: 3,
    },
    901:{
      slidesPerView: 4,
    },
    1051: {
      slidesPerView: 8,
    }
  }
  
});


// Слайдер доставки
new Swiper('.delivery__slider', {
  slidesPerView: 1,
  spaceBetween: 30,


  navigation: {
    nextEl: '.delivery__next',
    prevEl: '.delivery__prev',
  },
  pagination: {
    el: '.delivery__pagination',
  },

  breakpoints: {
    801:{
      slidesPerView: 2,
    },
    1301: {
      slidesPerView: 3,
    }
  }
  
});

// Слайдер услуг
new Swiper('.services__slider', {
  slidesPerView: 1,
  spaceBetween: 30,


  navigation: {
    nextEl: '.services__next',
    prevEl: '.services__prev',
  },
  pagination: {
    el: '.services__pagination',
  },


  breakpoints: {
    801:{
      slidesPerView: 2,
    },
    1201: {
      slidesPerView: 3,
    }
  }

  
});


    // Аккордион
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });






  // Переключение страниц заявки
  
  
  /*
  const btnNext = document.querySelector('.btn-next');
  
  const startPage = document.querySelector('.start-page');
  const centerPage = document.getElementById('calculation__form');

    btnNext.addEventListener('click', nextPage)


  function nextPage(){
    startPage.classList.add('window-none'),
    centerPage.classList.remove('window-none')
  }


  const btnPrev = document.querySelector('.btn-prev');
   */


   // Маска для телефона
   const inputsTel = document.querySelectorAll('input[type="tel"]');
   const im = new Inputmask('+7 (999) 999-99-99')
   im.mask(inputsTel)
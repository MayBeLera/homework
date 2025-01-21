// Модальное окно header
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


const btn1 = document.querySelector('.header__modal-btn-1');
const btn2 = document.querySelector('.header__modal-btn-2');
const btn3 = document.querySelector('.header__modal-btn-3');
const btn4 = document.querySelector('.header__modal-btn-4');
const btn5 = document.querySelector('.header__modal-btn-5');
btn1.addEventListener('click', openModal)
btn2.addEventListener('click', openModal)
btn3.addEventListener('click', openModal)
btn4.addEventListener('click', openModal)
btn5.addEventListener('click', openModal)

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
    autoplay: {
      delay: 5000,
    },
  

    navigation: {
      nextEl: '.banner__next',
      prevEl: '.banner__prev',
    },
  });


// Модальное окно для рассчета
const calculationModal = document.querySelector('.application__modal');
const calculationModalButton = document.querySelector('.application__modal-btn')

calculationModalButton.addEventListener('click', openCalculationModal)

function openCalculationModal (e) {
  e.preventDefault()
  document.body.classList.toggle('body--opened-modal-2')
}

calculationModal.addEventListener('click', closeCalculationModal)

function closeCalculationModal (e) {
  e.preventDefault()
  const target = e.target;

  if(target.closest('.modal__cancel') || target.classList.contains('calculationModal')){
    document.body.classList.remove('body--opened-modal-2')
  }
}

// Рассчет введенных данных
const calculationButton = document.querySelector('.calculation__button');

calculationButton.addEventListener('click', calculation)

function calculation (){
  const length = document.querySelector('.lenght').value;
  const width = document.querySelector('.width').value;
  const height = document.querySelector('.height').value;

  const volume = length * width * height;

  document.getElementById('result').value = volume;
  document.body.classList.remove('body--opened-modal-2')
}


// Табы c 1-ой на вторую
const tabControl = document.querySelector('.tab-controls')

tabControl.addEventListener('click', toggleTab)


function toggleTab(e){

    const tabControl = e.target.closest('.tab-controls__link');

    if(!tabControl) return
    e.preventDefault()

    const tabContentID = tabControol.getAttribute('href');
    const tabContent = document.querySelector(tabContentID);
    const activeContent = document.querySelector('.tab-content--show');

    
    if(activeContent){
        activeContent.classList.remove('tab-content--show')
    }

    
    tabContent.classList.add('tab-content--show')
 
}

const tabControls = document.querySelector('.tab-control')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e){

  const tabControl = e.target.closest('.tab-controls__link')

  if(!tabControl) return
  e.preventDefault()

  const tabContentID = tabControl.getAttribute('href')
  const tabContent = document.querySelector(tabContentID)
  const activeContent = document.querySelector('.tab-content--show')
  
  
  if(activeContent){
      activeContent.classList.remove('tab-content--show')
  }
  
  tabContent.classList.add('tab-content--show')

}

// input[type="file"] & delete-button
const fileInput = document.getElementById('file__input');
const fileName = document.getElementById('file__name');
const btnDelete = document.querySelector('.btn-delete')

fileInput.addEventListener('change', function() {
    const file = fileInput.files[0]; 
      if (file) {
            fileName.textContent =  file.name;
        } else {
            fileName.textContent = 'Файл не выбран';
        }
});

btnDelete.addEventListener('click', function(){
      fileInput.value = '';
      fileName.textContent = 'Файл не выбран';
})

// Слайдер плюсы-компании
new Swiper('.advantages__slider', {
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: '.advantage__pagination',
  },

  breakpoints: {
    
    801:{
      slidesPerView: 2,
      spaceBetween: 30,
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
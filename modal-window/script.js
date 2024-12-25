const btnOpen = document.querySelector('.modal__open');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close')

btnOpen.addEventListener('click', () =>{
    modal.classList.add('modal-open')
})

btnClose.addEventListener('click', () =>{
    modal.classList.remove('modal-open')
}) 


// ==============================
modal.addEventListener('click', event =>{
    const target = event.target
    if(target && target.classList.contains('modal')){
        modal.classList.remove('modal-open')
    }
})


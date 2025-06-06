'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
     modal.classList.remove('hidden');
     overlay.classList.remove('hidden');
}

const closeModal = () => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
}

for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click', openModal);
    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if(e.key == 'Escape'){
        if(!modal.classList.contains('hidden')){
           closeModal();
        }
      }
    });
}

//global events like keyboard cliks we use whole document

//keyup - happens when remove the finger
//keydown - when we press the key


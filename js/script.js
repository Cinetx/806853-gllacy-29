const bodyWrapper = document.querySelector('.page__body');
const sliderItem = document.querySelectorAll('.slider__item');
const sliderButton = document.querySelectorAll('.slider__menu__button');


// находим все кнопки
sliderButton.forEach((btn) => {
  btn.addEventListener('click', function () {


    // находим все слайды
    sliderItem.forEach((item) => {
      // Проверяем dataset у слайдов и кнопок, выставляем нужный слайд

      if (btn.dataset.slider == item.dataset.slider) {
        item.classList.remove('visually-hidden');


        if (item.getAttribute('data-slider') == 'slider-1') {
          bodyWrapper.classList.add('page__body--slide--1')
          bodyWrapper.classList.remove('page__body--slide--2')
          bodyWrapper.classList.remove('page__body--slide--3')

        } else if (item.getAttribute('data-slider') == 'slider-2') {
          bodyWrapper.classList.add('page__body--slide--2')
          bodyWrapper.classList.remove('page__body--slide--1')
          bodyWrapper.classList.remove('page__body--slide--3')

        } else if (item.getAttribute('data-slider') == 'slider-3') {
          bodyWrapper.classList.add('page__body--slide--3')
          bodyWrapper.classList.remove('page__body--slide--1')
          bodyWrapper.classList.remove('page__body--slide--2')
        }

      } else {
        item.classList.add('visually-hidden');
      }

    });
  });
});


const modal = document.querySelector('.modal__feedback')
const modalBtn = document.querySelector('.contacts__button');
const modalClose = modal.querySelector('.close__button');
const modalUserName = modal.querySelector('[name=user-name]');
const modalUserMail = modal.querySelector('[name=user-mail]');

const isStorageSupport = true;
let storage = ''

try {
  storage = localStorage.getItem('userName')
} catch (err) {
  isStorageSupport = false;
}


modalBtn.addEventListener('click', function (event) {
  event.preventDefault();
  modal.classList.remove('visually-hidden');
  modal.classList.add('modal-show');
  modalUserName.focus()
  if (storage) {
    modalUserName.value = storage;
  }

});

modalClose.addEventListener('click', function () {
  modal.classList.add('visually-hidden');
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error')
});

modal.addEventListener('submit', function (event) {
  if (!modalUserName.value || !modalUserMail.value) {
    console.log('privet')
    event.preventDefault();
    modal.classList.add('modal-error')
    modal.classList.remove('modal-error')
  } else {
    if (isStorageSupport) {
      localStorage.setItem('userName', modalUserName.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if(!modal.classList.contains('visually-hidden')) {
      evt.preventDefault();
      modal.classList.add('visually-hidden');
    }
   }
});

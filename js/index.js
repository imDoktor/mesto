import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const popupImage = document.querySelector('.popup-img');
const editBtn = document.querySelector('.profile__btn_action-edit');
const addBtn = document.querySelector('.profile__btn_action-add');
const popupName = document.querySelector('.popup__input_value-name');
const popupJob = document.querySelector('.popup__input_value-job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const btnSavePopupEdit = document.querySelector('.popup__btn_action-save');
const popupAddInputNamed = document.querySelector('.popup-add_value-named');
const popupAddInputLink = document.querySelector('.popup-add_value-link');
const btnCreatePopupAdd = document.querySelector('.popup-add__btn_action-create');
const owerlayList = document.querySelectorAll('.popup__owerlay');



const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const initValidation = {
    formSelector: '.popup__form',
    setSelector: '.popup__set',
    inputSelector: '.popup__input',
    errorSelector: '.popup__input-erro',
    buttonSubmitSelector: '.form__submit',
    buttonCloseSelector: '.popup__btn_action-close'
}

const allForm = Array.from(document.querySelectorAll('.popup__form'));
allForm.forEach((formElement) => {
    const formValiditi = new FormValidator (initValidation, formElement);
    formValiditi.enableValidation ();
})


initialCards.forEach((item) => {
    const card = new Card (item, '.element_temp');
    const cardElement = card.generateCard();
    document.querySelector('.elements').append(cardElement);
})

const allBtnClosePopup = Array.from(document.querySelectorAll('.popup__btn_action-close'));
allBtnClosePopup.forEach((item) => {
    item.addEventListener('click', function(evt) {
        openOrClosePopup(evt);
    })
})

const openOrClosePopup = (evt) => {
    const closestElement = evt.target.closest('.popup');
    closestElement.classList.toggle('popup_opened')
}

addBtn.addEventListener('click' , () => {
    cleanNamedAndLink ();
    document.querySelector('.popup-add').classList.toggle('popup_opened');
})

editBtn.addEventListener('click' , () => {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent; 
    document.querySelector('.popup-edit').classList.toggle('popup_opened');
})

btnSavePopupEdit.addEventListener('click', function(evt){
    replaceNameAndJob();
    openOrClosePopup(evt);
})

function replaceNameAndJob () {
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value; 
}

function cleanNamedAndLink () {
    popupAddInputNamed.value = '';
    popupAddInputLink.value = '';
}

const createNewCard = () => {
    const cardObject = {
        name: popupAddInputNamed.value,
        link: popupAddInputLink.value
    }
    const card = new Card (cardObject, '.element_temp');
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
}

btnCreatePopupAdd.addEventListener('click', function(evt){
    createNewCard();
    openOrClosePopup(evt);
})

const owerlayListeners = (() => {
    const owerlayArr = Array.from(owerlayList);
    owerlayArr.forEach((item) => {
        item.addEventListener('click', function (evt) {
            openOrClosePopup(evt);
        })
    })
})

owerlayListeners();

document.addEventListener('keydown', function (evt) {
    if(evt.key === 'Escape'){
        const openedPopup = document.querySelector('.popup_opened')
        openedPopup.classList.remove('popup_opened')
    }
})
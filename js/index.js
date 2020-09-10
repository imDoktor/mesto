import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './constants.js';

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
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');

const initValidation = {
    formSelector: '.popup__form',
    setSelector: '.popup__set',
    inputSelector: '.popup__input',
    errorSelector: '.popup__input-erro',
    buttonSubmitSelector: '.form__submit',
    buttonCloseSelector: '.popup__btn_action-close',
    inactiveButtonClass: 'popup__btn_inactive',
    inputError: 'popup__input_type_error',
    inputErrorActive: 'popup__input-error-active'
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
        const popupElement = evt.target.closest('.popup');
        openOrClosePopup(popupElement);
    })
})

const openOrClosePopup = (modalWindow) => {
    if(modalWindow.classList.contains('popup_opened')) {
        closeModalWindow(modalWindow);
    }
    else{
        openModalWindow(modalWindow);
    }
}

const openModalWindow = (modalWindow) => {
    modalWindow.classList.add('popup_opened');
    document.addEventListener('keydown', handleEsc);
}

const closeModalWindow = (modalWindow) => {
    modalWindow.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEsc);
}

const handleEsc = (evt) => {
    if(evt.key === 'Escape'){
        const openedPopup = document.querySelector('.popup_opened')
        closeModalWindow(openedPopup);
    }
}

addBtn.addEventListener('click' , () => {
    cleanNamedAndLink ();
    const formReset = popupAdd.querySelector('.popup__form');
    formReset.reset();
    popupAdd.querySelector('.popup-add__btn_action-create').classList.add('popup__btn_inactive');
    openOrClosePopup(popupAdd);
})

editBtn.addEventListener('click' , () => {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent; 
    openOrClosePopup(popupEdit);
})

btnSavePopupEdit.addEventListener('click', function(evt){
    replaceNameAndJob();
    openOrClosePopup(evt.target.closest('.popup'));
})

const replaceNameAndJob = () => {
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value; 
}

const cleanNamedAndLink = () => {
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
    openOrClosePopup(evt.target.closest('.popup'));
})

const owerlayListeners = (() => {
    const owerlayArr = Array.from(owerlayList);
    owerlayArr.forEach((item) => {
        item.addEventListener('click', function (evt) {
            openOrClosePopup(evt.target);
        })
    })
})

owerlayListeners();


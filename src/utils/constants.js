export {initialCards, addBtn, editBtn, owerlayList, initValidation};

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

const addBtn = document.querySelector('.profile__btn_action-add');
const editBtn = document.querySelector('.profile__btn_action-edit');
const owerlayList = document.querySelectorAll('.popup__owerlay');
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
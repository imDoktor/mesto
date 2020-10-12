const myId = '619f0f4394be17348efc17df';
const avatar = document.querySelector('.profile__avatar');
const addBtn = document.querySelector('.profile__btn_action-add');
const editBtn = document.querySelector('.profile__btn_action-edit');
const cardListSelector = '.elements';
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

export {myId, avatar, addBtn, editBtn, cardListSelector, initValidation};
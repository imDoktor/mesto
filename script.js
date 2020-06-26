let editBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let btnClose = document.querySelector('.popup__btn_close');
let popupName = document.querySelector('.popup__name');
let popupJob = document.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let btnSave = document.querySelector('.popup__btn_save');
let formPopup = document.querySelector('.popup__form');


editBtn.addEventListener('click', function() {
    popup.classList.add('popup_opened')
})

btnClose.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
})

popupName.value = profileName.textContent;
popupJob.value = profileJob.textContent;

function replaceValue (){
    profileName.textContent = popupName.value
    profileJob.textContent = popupJob.value
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value
    profileJob.textContent = popupJob.value
}
formPopup.addEventListener('submit', formSubmitHandler);

btnSave.addEventListener('click', function(){
    replaceValue ()
    popup.classList.remove('popup_opened');
});
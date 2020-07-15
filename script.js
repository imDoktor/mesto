let editBtn = document.querySelector('.profile__btn_action-edit');
let popup = document.querySelector('.popup');
let btnClose = document.querySelector('.popup__btn_action-close');
let popupName = document.querySelector('.popup__input_value-name');
let popupJob = document.querySelector('.popup__input_value-job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formPopup = document.querySelector('.popup__form');

function openedOrClose (){
    if(popup.classList.contains('popup_opened')){
        popup.classList.remove('popup_opened');
    }
    else{
        popup.classList.add('popup_opened');
        popupName.value = profileName.textContent;
        popupJob.value = profileJob.textContent; 
    }
}


editBtn.addEventListener('click', openedOrClose);
btnClose.addEventListener('click', openedOrClose);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    openedOrClose ();
}
formPopup.addEventListener('submit', formSubmitHandler);

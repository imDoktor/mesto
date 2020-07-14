let editBtn = document.querySelector('.profile__btn_edit');
let popup = document.querySelector('.popup');
let btnClose = document.querySelector('.popup__btn_close');
let popupName = document.querySelector('.popup__name');
let popupJob = document.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let btnSave = document.querySelector('.popup__btn_save');
let formPopup = document.querySelector('.popup__form');

function openedOrClose (){
    if(popup.classList.contains('popup__opened')){
        popup.classList.remove('popup__opened');
    }
    else{
        popup.classList.add('popup__opened');
        popupName.value = profileName.textContent;
        popupJob.value = profileJob.textContent; 
    }
};

function copyAndClose (){
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    openedOrClose ();
};

editBtn.addEventListener('click', openedOrClose);
btnClose.addEventListener('click', openedOrClose);
btnSave.addEventListener('click', copyAndClose);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
}
formPopup.addEventListener('submit', formSubmitHandler);

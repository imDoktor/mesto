const editBtn = document.querySelector('.profile__btn_action-edit');
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.popup__btn_action-close');
const popupName = document.querySelector('.popup__input_value-name');
const popupJob = document.querySelector('.popup__input_value-job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formPopup = document.querySelector('.popup__form');



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

const elements = document.querySelector('.elements');
const element = document.querySelector('.element');

function createElement (name, link){
    const elementTemplate = document.querySelector('.element_temp').content;
    const elementClone = elementTemplate.cloneNode(true);

    elementClone.querySelector('.element__img').src = link;
    elementClone.querySelector('.element__text').textContent = name;

    elements.append(elementClone);
}

function fillElements (){
    initialCards.forEach(function (item){
        createElement(item.name, item.link)
    })
}

fillElements ();


const popupAdd = document.querySelector('.popup-add');
const popupAddForm = document.querySelector('.popup-add__form');
const popupAddBtnCreate = document.querySelector('.popup-add__btn_action-create');
const popupAddBtnClose = document.querySelector('.popup-add__btn_action-close');
const popupAddInputNamed = document.querySelector('.popup-add_value-named');
const popupAddInputLink = document.querySelector('.popup-add_value-link');
const addBtn = document.querySelector('.profile__btn_action-add');

function openOrClosePopupAdd (){
    if(popupAdd.classList.contains('popup_opened')){
        popupAdd.classList.remove('popup_opened');
    }
    else{
        popupAdd.classList.add('popup_opened');

    }
}


addBtn.addEventListener('click', openOrClosePopupAdd);
popupAddBtnClose.addEventListener('click', openOrClosePopupAdd);

function formSubmitHandlerEdd (evt) {
    evt.preventDefault();
    
    createElement (popupAddInputNamed.value, popupAddInputLink.value);
    openOrClosePopupAdd ();
    renderElemenBtnRemove ();
    renderImage ();
    renderBtnLike();
    popupAddInputNamed.value =''
    popupAddInputLink.value =''
}
popupAddForm.addEventListener('submit', formSubmitHandlerEdd);

function renderBtnLike() {
    const btnLikeAll = document.querySelectorAll('.element__like');
    const btnLikeAllArr = Array.from(btnLikeAll);
    btnLikeAllArr.forEach(function(item){
        item.addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__like_value-activ');
        });
    });
}

renderBtnLike();

function renderElemenBtnRemove (){
    const allRemoveBtn = document.querySelectorAll('.element__remove');
    const allRemoveBtnArr = Array.from(allRemoveBtn);
    allRemoveBtnArr.forEach(function (item) {
        item.addEventListener('click', function(){
            let removedElement = item.closest('.element');
            removedElement.remove();
        });
    })
};
renderElemenBtnRemove ();

const popupImage = document.querySelector('.popup-img');
const popupImageImg = document.querySelector('.popup-img__image');
const popupImageTitle = document.querySelector('.popup-img__title');
const popupImageBtnClose = document.querySelector('.popup-img__btn_action-close');


function renderImage () {
    const allImage = document.querySelectorAll('.element__img');
    const allImageArr = Array.from(allImage);
    allImageArr.forEach(function (item) {
        item.addEventListener('click' , function (evt) {
            popupImage.classList.add('popup_opened');
            popupImageImg.src = evt.target.src;
            popupImageTitle.textContent = evt.target.nextElementSibling.querySelector('.element__text').textContent;
        })
    });
}
renderImage ()

popupImageBtnClose.addEventListener('click', function () {
    popupImage.classList.remove('popup_opened');
})
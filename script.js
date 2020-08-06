const editBtn = document.querySelector('.profile__btn_action-edit');
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.popup__btn_action-close');
const popupName = document.querySelector('.popup__input_value-name');
const popupJob = document.querySelector('.popup__input_value-job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formPopup = document.querySelector('.popup__form');

const elements = document.querySelector('.elements');
const element = document.querySelector('.element');

const popupAdd = document.querySelector('.popup-add');
const popupAddForm = document.querySelector('.popup-add__form');
const popupAddBtnCreate = document.querySelector('.popup-add__btn_action-create');
const popupAddBtnClose = document.querySelector('.popup-add__btn_action-close');
const popupAddInputNamed = document.querySelector('.popup-add_value-named');
const popupAddInputLink = document.querySelector('.popup-add_value-link');
const addBtn = document.querySelector('.profile__btn_action-add');

const popupImage = document.querySelector('.popup-img');
const popupImageImg = document.querySelector('.popup-img__image');
const popupImageTitle = document.querySelector('.popup-img__title');
const popupImageBtnClose = document.querySelector('.popup-img__btn_action-close');

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



function openedOrClose (item){
    if(item.classList.contains('popup_opened')){
        item.classList.remove('popup_opened');
    }
    else{
        item.classList.add('popup_opened');
    }
}

function replaceNameAndJob () {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent; 
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    openedOrClose (popup);
}

function createElement (name, link) {
    const elementTemplate = document.querySelector('.element_temp').content;
    const elementClone = elementTemplate.cloneNode(true);
    elementClone.querySelector('.element__img').src = link;
    elementClone.querySelector('.element__text').textContent = name;
    addListeners (elementClone);
    return elementClone;
}

function addListeners (item) {
    const btnlikeeElement = item.querySelector('.element__like');
    btnlikeeElement.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_value-activ');
    });
    
    const RemoveBtn = item.querySelector('.element__remove');
    RemoveBtn.addEventListener('click', function(){
        const removedElement = RemoveBtn.closest('.element');
        removedElement.remove();
    });

    const imageInElement = item.querySelector('.element__img');
    imageInElement.addEventListener('click' , function (evt) {
            openedOrClose(popupImage);
            popupImageImg.src = evt.target.src;
            popupImageTitle.textContent = evt.target.nextElementSibling.querySelector('.element__text').textContent;
    });
}

function addElement (item) {
    elements.append(createElement (item.name, item.link));
}

function fillElements (){
    initialCards.forEach(function (item){
        addElement(item);
    })
}

fillElements ();

function addNewElement (nameValue, linkValue) {
    elements.prepend(createElement (nameValue, linkValue));
}

function formSubmitHandlerEdd (evt) {
    evt.preventDefault();
    addNewElement(popupAddInputNamed.value, popupAddInputLink.value);
    openedOrClose(popupAdd);
    popupAddInputNamed.value ='';
    popupAddInputLink.value ='';
}

editBtn.addEventListener('click', function (){
    openedOrClose (popup);
    replaceNameAndJob ();
});
btnClose.addEventListener('click', function (){
    openedOrClose (popup);
});
formPopup.addEventListener('submit', formSubmitHandler);
addBtn.addEventListener('click', function () {
     openedOrClose(popupAdd);
})
popupAddBtnClose.addEventListener('click', function () {
    openedOrClose(popupAdd);
})
popupAddForm.addEventListener('submit', formSubmitHandlerEdd);
popupImageBtnClose.addEventListener('click', function () {
    openedOrClose(popupImage);
})
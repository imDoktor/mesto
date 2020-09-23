import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {initialCards, addBtn, editBtn, owerlayList, initValidation} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';

const allForm = Array.from(document.querySelectorAll('.popup__form'));
allForm.forEach((formElement) => {
    const formValiditi = new FormValidator (initValidation, formElement);
    formValiditi.enableValidation ();
})

const popupWithImage = new PopupWithImage('.popup-img');

const formAdd = new PopupWithForm ('.popup-add', 
    function callback (element){
        const items =[element];
        const cardList = new Section({
            data : items,
            renderer: (item) => {
                const card = new Card({
                    data: item,
                    handleCardClick: () => {
                        popupWithImage.open(item.name, item.link);
                    }}, '.element_temp');
                const cardElement = card.generateCard();
                cardList.addItem(cardElement);
            }
        }, cardListSelector);
        
        cardList.renderItems();
    }
)
formAdd.setEventListeners();

addBtn.addEventListener('click', function(){
    formAdd.open();
});

const userInfo = new UserInfo ({name: '.profile__name', info: '.profile__job'});

const formEdit = new PopupWithForm ('.popup-edit',
    function callback (element) {
        userInfo.setUserInfo(element);
    }
)
formEdit.setEventListeners();

editBtn.addEventListener('click', function() {
    formEdit.replaceInputValue(userInfo.getUserInfo());
    formEdit.open();
})

const cardListSelector = '.elements';
const cardList = new Section({
    data : initialCards,
    renderer: (item) => {
        const card = new Card({
            data: item,
            handleCardClick: () => {
                popupWithImage.open(item.name, item.link);
            }}, '.element_temp');
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    }
}, cardListSelector);

cardList.renderItems();

const owerlayListeners = (() => {
    const owerlayArr = Array.from(owerlayList);
    owerlayArr.forEach((item) => {
        item.addEventListener('click', function (evt) {
            openOrClosePopup(evt.target.closest('.popup'));
        })
    })
})

owerlayListeners();


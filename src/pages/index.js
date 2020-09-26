import {index} from './index.css';
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

function createCard (element) {
    const card = new Card({
        data: element,
        handleCardClick: () => {
            popupWithImage.open(element.name, element.link);
        }}, '.element_temp');
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
}


const formAdd = new PopupWithForm ('.popup-add', 
    function callback (element){
        createCard(element);
        formAdd.close();
    }
)
formAdd.setEventListeners();

addBtn.addEventListener('click', function(){
    formAdd._buttonSubmit.disabled = true;
    formAdd._buttonSubmit.classList.add('popup__btn_inactive');
    formAdd.open();
});

const userInfo = new UserInfo ({name: '.profile__name', info: '.profile__job'});

const formEdit = new PopupWithForm ('.popup-edit',
    function callback (element) {
        userInfo.setUserInfo(element);
        formEdit.close();
    }
)
formEdit.setEventListeners();

editBtn.addEventListener('click', function() {
    const fields = userInfo.getUserInfo();
    const fieldsWithSelectors = [{selector: '.popup__input_value-name', value: fields.name}, 
        {selector: '.popup__input_value-job', value: fields.info}]
    formEdit.replaceInputValue(fieldsWithSelectors);
    formEdit.open();
})

const cardListSelector = '.elements';
const cardList = new Section({
    data : initialCards.reverse(),
    renderer: (item) => {createCard (item);}
}, cardListSelector);

cardList.renderItems();
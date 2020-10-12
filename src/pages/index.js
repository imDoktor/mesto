import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {addBtn, avatar, editBtn, owerlayList, initValidation} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithSubmit} from '../components/PopupWithSubmit.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
    headers: {
        authorization: '0fb3e742-7068-49dd-9da6-9fac4382b26a'
    }
})

const cardListSelector = '.elements';
api.getUserInfo().then((res) => {
        avatar.querySelector('.profile__avatar-img').src = res.avatar;
        userInfo.setUserInfo(res)
})
.catch((err) => {
    console.log(err);
}); 

api.getCards().then((res) => {
    const cardList = new Section({
        data : res.reverse(),
        renderer: (item) => {cardList.addItem(createCard (item));}
        }, cardListSelector);
    
    cardList.renderItems();

    const formAdd = new PopupWithForm ('.popup-add', {
        callback: (element) => {
            api.postCard(element).then((res) => {
                cardList.addItem(createCard (res));
            })
            .catch((err) => {
                console.log(err);
            }); 
            formAdd.close();
        }
        }
    )
    formAdd.setEventListeners();
    addBtn.addEventListener('click', function(){
        formAdd.open();
    });

    const formEditAvatar = new PopupWithForm ('.popup-avatar', {
        callback: (link) => {
            api.patchAvatar(link).catch((err) => {
                console.log(err);
              }); ;
            avatar.querySelector('.profile__avatar-img').src = link.link;
            formEditAvatar.close();
        }
    })
    formEditAvatar.setEventListeners();
    
    avatar.addEventListener('click', function(){
        formEditAvatar.open();
    })

})
.catch((err) => {
    console.log(err);
  }); 

const allForm = Array.from(document.querySelectorAll('.popup__form'));
allForm.forEach((formElement) => {
    const formValiditi = new FormValidator (initValidation, formElement);
    formValiditi.enableValidation ();
})

const popupWithImage = new PopupWithImage('.popup-img');

const userInfo = new UserInfo ({name: '.profile__name', info: '.profile__job'});

const formEdit = new PopupWithForm ('.popup-edit',{
    callback: (element) => {
        api.pacthUserInfo(element).then((res) => {
            userInfo.setUserInfo(res)
        })
        .catch((err) => {
            console.log(err);
        }); 
        formEdit.close();
    }
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

const formDelete = new PopupWithSubmit ('.popup-dell', {
    collback: () => {
        api.deleteCard(elementForDel.id)
        .catch((err) => {
            console.log(err);
        }); 
        elementForDel.func.functiion();
        formDelete.close();
    }
});
formDelete.setEventListeners();

const elementForDel = {};

function getElementForDel (fonction, id){
    elementForDel.func = fonction;
    elementForDel.id = id
}

function createCard (element) {
    const card = new Card({
        data: element,
        handleCardClick: () => {
            popupWithImage.open(element.name, element.link);
        },
        delCardClick: (functiion, id) => {
            formDelete.open();
            getElementForDel(functiion, id);
        },
        likeCardClick: (element, id) => {
            if(element.querySelector('.element__like').classList.contains('element__like_value-activ')){
                api.deleteLike(id);
            }
            else{
                api.putLike(id);
            }
        }
        }, '.element_temp');
    const cardElement = card.generateCard();
    return cardElement;
}
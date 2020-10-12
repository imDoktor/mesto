import {myId} from '../utils/constants.js'

export class Card {
    constructor({data, handleCardClick, delCardClick, likeCardClick}, cardSelector) {
        this._userId = data.owner._id;
        this._id = data._id;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._delCardClick = delCardClick;
        this._likeCardClick = likeCardClick;
    }
    _getTemplate() {
        if(this._userId === myId){
            const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
            return cardElement;
        }
        else{
            const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element-other_user').cloneNode(true);
            return cardElement;
        }
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__text').textContent = this._name;
        const elementImg = this._element.querySelector('.element__img');
        elementImg.src = this._link;
        elementImg.alt = this._name;
        if(this._likes.find(element => element._id === myId)){
            this._like();
        }
        this._element.querySelector('.element__like-volume').textContent = this._likes.length;
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__img').addEventListener('click', this._handleCardClick);
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._likeCardClick(this._element, this._id);
            if(this._element.querySelector('.element__like').classList.contains('element__like_value-activ')){
                this._element.querySelector('.element__like-volume').textContent = Number(this._element.querySelector('.element__like-volume').textContent) - 1
            }
            else{
                this._element.querySelector('.element__like-volume').textContent = Number(this._element.querySelector('.element__like-volume').textContent) + 1
            }
            this._like();
        });
        if(this._userId === myId){
            this._element.querySelector('.element__remove').addEventListener('click', () => {
                this._delCardClick({functiion: () =>{this._removeCard()}},this._id);
            })
        }
    }
    
    _like(){
        this._element.querySelector('.element__like').classList.toggle('element__like_value-activ');
    }

    _removeCard(){
        this._element.remove();
        this._element = null;
    }
}
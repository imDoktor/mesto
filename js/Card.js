export {Card};

const popupImage = document.querySelector('.popup-img');
class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }
    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__text').textContent = this._name;
        const elementImg = this._element.querySelector('.element__img');
        elementImg.src = this._link;
        elementImg.alt = this._name;
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__img').addEventListener('click', () => {
            this._openImage();
        })
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._like();
        })
        this._element.querySelector('.element__remove').addEventListener('click', () => {
            this._removeCard();
        })
    }

    _openImage(){
        popupImage.querySelector('.popup-img__image').src = this._link;
        popupImage.querySelector('.popup-img__title').textContent = this._name;
        popupImage.classList.toggle('popup_opened');
    }

    _like(){
        this._element.querySelector('.element__like').classList.toggle('element__like_value-activ');
    }

    _removeCard(){
        this._element.remove();
        this._element = null;
    }
}

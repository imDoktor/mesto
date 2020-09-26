import {Popup} from './Popup.js'
export class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
    }
    open(name, link){
        super.setEventListeners();
        this._popup.querySelector('.popup-img__title').textContent = name;
        this._popup.querySelector('.popup-img__image').src = link;
        super.open();
    }
   
}
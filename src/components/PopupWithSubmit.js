import {Popup} from './Popup.js'
export class PopupWithSubmit extends Popup {
    constructor (popupSelector, {collback}) {
        super(popupSelector);
        super._buttonSubmit;
        this.collback = collback;
        this._form = this._popup.querySelector('.popup__form');
    }
    setEventListeners (){
        this._popup.querySelector('.form__submit').addEventListener('click', () => {
            this.collback()
        });
        super.setEventListeners();
    }
    open(){
        super.open();
    }
    close () {
        super.close();
    }
}





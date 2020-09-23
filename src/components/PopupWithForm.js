import {Popup} from './Popup.js'
export {PopupWithForm};

class PopupWithForm extends Popup {
    constructor (popupSelector, callback) {
        super(popupSelector);
        this.callback = callback;
        this._inputList = this._popup.querySelectorAll('.popup__input');
    }
    _getInputValues(){
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
      
        return this._formValues;
    }

    setEventListeners (){
        this._popup.querySelector('.form__submit').addEventListener('click', () => {
            this.callback(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }
    replaceInputValue(object){
        this._popup.querySelector('.popup__input_value-name').value = object.name;
        this._popup.querySelector('.popup__input_value-job').value = object.info;
    }
    open(){
        super.open();
    }
    close () {
        const formReset = this._popup.querySelector('.popup__form');
        formReset.reset();
        super.close();
    }
}





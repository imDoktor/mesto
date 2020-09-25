import {Popup} from './Popup.js'
export {PopupWithForm};

class PopupWithForm extends Popup {
    constructor (popupSelector, callback) {
        super(popupSelector);
        this.callback = callback;
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._formReset = this._popup.querySelector('.popup__form');
    }
    _getInputValues(){
        this._formValues = {};
        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
      
        return this._formValues;
    }

    setEventListeners (){
        this._popup.querySelector('.form__submit').addEventListener('click', () => {
            this.callback(this._getInputValues());
        });
        super.setEventListeners();
    }
    replaceInputValue(fields){
        fields.forEach(field => {
            this._popup.querySelector(field.selector).value = field.value;
        })
    }
    open(){
        super.open();
    }
    close () {
        this._formReset.reset();
        super.close();
    }
}





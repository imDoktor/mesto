import {Popup} from './Popup.js'
export class PopupWithForm extends Popup {
    constructor (popupSelector, {callback}) {
        super(popupSelector);
        super._buttonSubmit;
        this.callback = callback;
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._form = this._popup.querySelector('.popup__form');
        this._buttonText = this._buttonSubmit.textContent;
       
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
            super.renderLoading(true);
            this.callback(this._getInputValues());
        });
        super.setEventListeners();
    }
    replaceInputValue(fields){
        fields.forEach(field => {
            this._popup.querySelector(field.selector).placeholder = field.value;
        })
    }
    open(){
        this._form.reset();
        this._buttonSubmit.disabled = true;
        this._buttonSubmit.classList.add('popup__btn_inactive');
        super.open();
    }
    close () {
        super.renderLoading(false, this._buttonText);
        super.close();
    }
}





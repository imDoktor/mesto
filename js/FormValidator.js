export {FormValidator};

class FormValidator {
    constructor (config, formElement) {
        this._form = formElement.querySelector(config.formSelector);
        this._set = formElement.querySelectorAll(config.setSelector);
        this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
        this._errorList = formElement.querySelectorAll(config.errorSelector);
        this._buttonSubmit = formElement.querySelector(config.buttonSubmitSelector);
        this._formElement = formElement;
    }

    enableValidation () {
        this._formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        })
        this._setEventListeners();
    }
    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this.checkInputValidity(inputElement);
                this._toggleButtonState();
            })
            
        })
    }

    _toggleButtonState(){
        if(this._hasInvalidInput()){
            this._buttonSubmit.classList.add('popup__btn_inactive');
            this._buttonSubmit.disabled = true;
        }
        else{
            this._buttonSubmit.classList.remove('popup__btn_inactive');
            this._buttonSubmit.disabled = false;
        }
    }

    _hasInvalidInput (){
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    checkInputValidity(inputElement){
            if(!inputElement.validity.valid){
                const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
                inputElement.classList.add('popup__input_type_error');
                errorElement.textContent = inputElement.validationMessage;
                errorElement.classList.add('popup__input-error-active');
            }
            else{
                const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
                inputElement.classList.remove('popup__input_type_error');
                errorElement.textContent = '';
                errorElement.classList.remove('popup__input-error-active');
            }
    }

    _closePopup(){
        const closePopupElement = this._formElement;
        closePopupElement.closest('.popup').classList.toggle('popup_opened');
    }
}

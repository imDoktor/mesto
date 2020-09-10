export {FormValidator};

class FormValidator {
    constructor (config, formElement) {
        this._form = formElement.querySelector(config.formSelector);
        this._set = formElement.querySelectorAll(config.setSelector);
        this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
        this._errorList = formElement.querySelectorAll(config.errorSelector);
        this._buttonSubmit = formElement.querySelector(config.buttonSubmitSelector);
        this._formElement = formElement;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputError = config.inputError;
        this._inputErrorActive = config.inputErrorActive;
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
            this._buttonSubmit.classList.add(this._inactiveButtonClass);
            this._buttonSubmit.disabled = true;
        }
        else{
            this._buttonSubmit.classList.remove(this._inactiveButtonClass);
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
                this._showInputError(inputElement);
            }
            else{
                this._hideInputError(inputElement);
            }
    }

    _showInputError(inputElement){
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
                inputElement.classList.add(this._inputError);
                errorElement.textContent = inputElement.validationMessage;
                errorElement.classList.add(this._inputErrorActive);
    }

    _hideInputError(inputElement){
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
                inputElement.classList.remove(this._inputError);
                errorElement.textContent = '';
                errorElement.classList.remove(this._inputErrorActive);
    }
}

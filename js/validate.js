const showInputError = (formElement, inputElement, errorMessage) => {
    errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error-active');
}

const hideInpuError = (formElement, inputElement) => {
    errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error-active');
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const checkInputValidity = (formElement, inputElement) => {
    if(!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else{
        hideInpuError(formElement, inputElement);
    }
}

const toggleButtonState = ((inputList, buttonElement) => {
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add('popup__btn_inactive');
        buttonElement.disabled = true;
    }
    else{
        buttonElement.classList.remove('popup__btn_inactive');
        buttonElement.disabled = false;
    }
})

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.form__submit');
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        })
        
    })

}

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) =>{
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        })

    const fieldsetList = Array.from(formElement.querySelectorAll('.popup__set'));
    fieldsetList.forEach((fieldset) => {
        setEventListeners(fieldset);
    })
    })
}

enableValidation();
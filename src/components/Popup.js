export class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonSubmit = this._popup.querySelector('.form__submit');
    }

    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose = (evt) => {
        if (evt.code === 'Escape') {
          this.close();
        }
    }
    setEventListeners () {
        this._popup.querySelector('.popup__btn_action-close').addEventListener('click', () => {
            this.close();
        });
        this._popup.querySelector('.popup__owerlay').addEventListener('click', () => {
            this.close();
        });
    }
    renderLoading(isLoading, text){
        if(isLoading){
            this._buttonSubmit.textContent = 'Сохранение...'
        }
        else{
            this._buttonSubmit.textContent = text;
        }
    }
}
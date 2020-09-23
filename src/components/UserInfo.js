export {UserInfo};

class UserInfo {
    constructor (object) {
        this._name = document.querySelector(object.name);
        this._info = document.querySelector(object.info)
    }
    getUserInfo(){
        const objectElement = {};
        objectElement.name = this._name.textContent;
        objectElement.info = this._info.textContent;
        return objectElement;
    }
    setUserInfo = (object) => {
        this._name.textContent = object.name;
        this._info.textContent = object.job;
    }
}
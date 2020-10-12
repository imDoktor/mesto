export class Api {
    constructor({baseUrl, headers}) {
      this.baseUrl = baseUrl;
      this.headers = headers;
    }
    
    getUserInfo(){
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        })
        .then(res =>{
            if(res.ok){
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }
    getCards(){
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers
        })
        .then(res =>{
            if(res.ok){
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }
    pacthUserInfo(element){
        return fetch(`${this.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: '0fb3e742-7068-49dd-9da6-9fac4382b26a',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: element.name,
            about: element.job
        })
        })
        .then(res =>{
            if(res.ok){
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }
    postCard(element){
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: '0fb3e742-7068-49dd-9da6-9fac4382b26a',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: element.name,
                link: element.link
            })
            })
            .then(res =>{
                if(res.ok){
                    return res.json();
                }
                else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }
    deleteCard(id){
        return fetch(`${this.baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(res =>{
            if(res.ok){
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }
    putLike(id){
        return fetch(`${this.baseUrl}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this.headers
        })
        .then(res =>{
            if(res.ok){
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }
    deleteLike(id){
        return fetch(`${this.baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(res =>{
            if(res.ok){
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }
    patchAvatar(link){
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: '0fb3e742-7068-49dd-9da6-9fac4382b26a',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: link.link
            })
            })
            .then(res =>{
                if(res.ok){
                    return res.json();
                }
                else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }
}; 
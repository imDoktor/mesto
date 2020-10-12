export class Api {
    constructor({baseUrl, headers}) {
      this.baseUrl = baseUrl;
      this.headers = headers;
    }
    handleOriginalResponse = (res) => {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
      }
    
    getUserInfo(){
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        })
        .then(this.handleOriginalResponse);
    }
    getCards(){
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers
        })
        .then(this.handleOriginalResponse)
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
        .then(this.handleOriginalResponse)
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
            .then(this.handleOriginalResponse)
    }
    deleteCard(id){
        return fetch(`${this.baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(this.handleOriginalResponse)
    }
    putLike(id){
        return fetch(`${this.baseUrl}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this.headers
        })
        .then(this.handleOriginalResponse)
    }
    deleteLike(id){
        return fetch(`${this.baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(this.handleOriginalResponse)
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
            .then(this.handleOriginalResponse)
    }
}; 
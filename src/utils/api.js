const SERVER_URL = 'https://coffee-marathon.emlsdr.ru/backend/api';


class mainApi {
  constructor (baseUrl, {headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  async getWinners (page) {
    let url = (page === undefined) ? `${this.baseUrl}/getWinners` : `${this.baseUrl}/getWinners?page=${page}`;

    const res = await fetch(url, {
       headers: {
        'Content-Type': 'application/json'
      },
       method: "GET"
     });
     return this._checkRes(res);
  }

  async searchWinners (number) {
    let params = new URLSearchParams();
    params.append('term', number);

    const res = await fetch(`${this.baseUrl}/searchWinner`, {
       headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
       body:  params,
       method: "POST"
     });
     return this._checkRes(res);
  }
}


/*создаем и экспортируем экземпляр класса api для использования в App*/ 
const api = new mainApi (SERVER_URL, {})

export default api;
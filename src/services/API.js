import axios from 'axios';

export class API {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  makeRequest({ url, method, data }) {
    return axios({
      url: `${this.baseUrl}/${url}`,
      method,
      data
    }).then(data => data.data);
  }
}

export default new API('https://0924b73d.ngrok.io/api');
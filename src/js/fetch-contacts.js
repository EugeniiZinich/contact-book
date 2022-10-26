import axios from 'axios';
const BASE_URL = 'https://63567c769243cf412f85cbac.mockapi.io';
// const axios = require('axios');

axios.defaults.baseURL = 'https://63567c769243cf412f85cbac.mockapi.io/';

export default class UserContacts {
  async fetchContact() {
    const { data } = await axios.get('/contacts');

    console.log(data);

    return data;
  }
}

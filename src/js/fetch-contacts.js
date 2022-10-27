import axios from 'axios';
const BASE_URL = 'https://63567c769243cf412f85cbac.mockapi.io';

axios.defaults.baseURL = 'https://63567c769243cf412f85cbac.mockapi.io/';

export default class UserContacts {
  constructor(formData) {
    this.formData = formData;
  }

  async fetchContact() {
    const { data } = await axios.get('/contacts');

    return data;
  }

  async createContact() {
    const options = { ...this.formData };

    await axios
      .post('/contacts', options)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }

  async updateContact(updateData) {
    await axios.put(`/contacts/${updateData.id}`, updateData);
  }

  async deleteContact(id) {
    await axios.delete(`/contacts/${id}`);
  }
}

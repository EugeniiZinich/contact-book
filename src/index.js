import { modalForm } from './js/modal-form';
import { refs } from './js/refs';
import UserContacts from './js/fetch-contacts';
import { createMarkup } from './js/markup-contacts';
import { resetContactsMarkup } from './js/markup-contacts';

const userContacts = new UserContacts();

refs.newContactBtn.addEventListener('click', onContactOpenModal);

function onContactOpenModal() {
  modalForm.show();
}

refs.form.addEventListener('submit', onSubmitClick);

function onSubmitClick(e) {
  e.preventDefault();

  const {
    elements: { number, username, email },
  } = e.currentTarget;
}

refs.getContactsBtn.addEventListener('click', onGetContacts);

async function onGetContacts() {
  resetContactsMarkup();
  try {
    const data = await userContacts.fetchContact();
    console.log(data);
    createMarkup(data);
  } catch (error) {
    console.log(error);
  }
}

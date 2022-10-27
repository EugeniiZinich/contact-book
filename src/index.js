import { modalForm } from './js/modal-form';
import { modalUpdateForm } from './js/modal-form';
import { refs } from './js/refs';
import UserContacts from './js/fetch-contacts';
import Spinner from './js/spinner';
import { createMarkup } from './js/markup-contacts';
import { resetContactsMarkup } from './js/markup-contacts';

const userContacts = new UserContacts();

const spinner = new Spinner({ selector: '[data-action="load-spinner"]' });

spinner.enable();

onGetContacts();

refs.newContactBtn.addEventListener('click', onContactOpenModal);

function onContactOpenModal() {
  modalForm.show();
}

refs.form.addEventListener('submit', onCreateBtnClick);

async function onCreateBtnClick(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, name) => {
    formData[name] = value;
  });

  const userContacts = new UserContacts(formData);

  modalForm.hide();

  spinner.disable();

  try {
    await userContacts.createContact();
    await onGetContacts();
    spinner.enable();
  } catch (error) {
    console.log(error);
  }
}

refs.getContactsBtn.addEventListener('click', onGetContacts);

async function onGetContacts() {
  spinner.disable();
  try {
    const data = await userContacts.fetchContact();

    resetContactsMarkup();
    createMarkup(data.reverse());
    spinner.enable();
  } catch (error) {
    console.log(error);
  }
}

refs.updateContactBtn.addEventListener('click', onUpdateBtnOpenClick);

function onUpdateBtnOpenClick() {
  modalUpdateForm.show();
}

refs.updateForm.addEventListener('submit', onUpdateContact);

async function onUpdateContact(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, name) => {
    formData[name] = value;
  });

  modalUpdateForm.hide();
  spinner.disable();
  const data = { ...formData };

  await userContacts.updateContact(data);

  try {
    const data = await userContacts.fetchContact();
    resetContactsMarkup();
    createMarkup(data.reverse());
    spinner.enable();
  } catch (error) {
    console.log(error);
  }
}

refs.markupContacts.addEventListener('click', handleDelete);

async function handleDelete(e) {
  if (e.target.nodeName !== 'DIV') {
    return;
  }

  const item = e.target.closest('.user-contact__card');

  spinner.disable();

  await userContacts.deleteContact(item.dataset.id);

  try {
    const data = await userContacts.fetchContact();
    resetContactsMarkup();
    createMarkup(data.reverse());
    spinner.enable();
  } catch (error) {
    console.log(error);
  }
}

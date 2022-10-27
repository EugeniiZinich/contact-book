import { refs } from './refs';

export function createMarkup(data) {
  const markup = data
    .map(item => {
      const { createdAt, avatar, id, name, contact, email } = item;
      const date = new Date(createdAt);
      return /*html*/ `<li class="user-contact__item">
        <div class="user-contact__card" data-id=${id}>
          <div class="user-contact__delete-btn"></div>
          <p class="user-contact__number"><span>${id}</span></p>
          <img class="user-contact__img" src="${avatar}" alt="user photo" width="60" />
          <p class="user-contact__name">Name: <span>${name}</span></p>
          <p class="user-contact__number">Number: <span>${contact}</span></p>
          <p class="user-contact__email">Email: <span>${email}</span></p>
        </div>
      </li>`;
    })
    .join('');

  renderContacts(markup);
}

function renderContacts(markup) {
  refs.markupContacts.insertAdjacentHTML('beforeend', markup);
}

export function resetContactsMarkup() {
  refs.markupContacts.innerHTML = '';
}

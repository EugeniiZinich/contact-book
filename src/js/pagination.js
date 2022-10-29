import { refs } from './refs';
import UserContacts from './fetch-contacts';
import { createMarkup } from './markup-contacts';
import { resetContactsMarkup } from './markup-contacts';

const userContacts = new UserContacts();

// let showLi = 3;

export async function main() {
  const data = await userContacts.fetchContact();
  let currentPage = 1;
  let rows = 2; // сколько выводить контактов

  function displayList(contactData, rowPerPage, page) {
    currentPage -= 1;
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = contactData.slice(start, end);
    resetContactsMarkup();
    createMarkup(paginatedData);
  }

  function displayPagination(contactData, rows) {
    const pageCount = Math.ceil(contactData.length / rows);
    console.log(pageCount);
    const ulEl = document.createElement('ul');
    ulEl.classList.add('list');
    console.log(ulEl);

    for (let i = 0; i < pageCount; i += 1) {
      const liEl = displayPaginationBnt(i + 1);
      ulEl.append(liEl);
    }
    refs.divElPagination.append(ulEl);
  }

  function displayPaginationBnt(page) {
    const paginationEl = document.createElement('li');

    paginationEl.classList.add('number-page');

    paginationEl.textContent = page;

    paginationEl.addEventListener('click', () => {
      currentPage = page;
      displayList(data, rows, currentPage);
    });

    return paginationEl;
  }

  displayList(data, rows, currentPage);

  displayPagination(data, rows);
}

main();

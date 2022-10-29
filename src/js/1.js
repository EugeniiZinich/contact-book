// const ul = document.querySelector('.list');

// let allPages = 15;
// // let page = 2;

// function element(allPages, page) {
//   let li = '';

//   let beforePages = page - 1;
//   let afterPages = page + 1;
//   let liActive;

//   if (page > 1) {
//     li += `<li class="backward-btn" onclick="element(allPages, ${page - 1})">BACK</li>`;
//   }

//   for (let pageLength = beforePages; pageLength <= afterPages; pageLength += 1) {
//     if (page === pageLength) {
//       liActive = 'active';
//     } else {
//       liActive = '';
//     }

//     li += `<li class="number ${liActive}"><span>${pageLength}</span></li>`;
//   }

//   if (page < allPages) {
//     li += `<li class="forward-btn" onclick="element(allPages, ${page + 1})">FORWARD</li>`;
//   }
//   console.log(li);
//   ul.innerHTML = li;
// }

// element(allPages, 2);

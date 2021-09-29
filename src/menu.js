import menu from './templates/menu.hbs';
console.log(menu);

const container = document.querySelector('.js-menu');
container.insertAdjacentHTML("beforeend" menu);

import dataMenu from './menu.json';
import templatMenu from './templates/menu';
import refs from './refs.js';
let result = templatMenu(dataMenu);
const { classMenu, test } = refs;
classMenu.insertAdjacentHTML('beforeend', result);

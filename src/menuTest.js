import dataMenu from './menu.json';
import templatMenu from './templates/menu';
import refs from './refs.js';
let result = templatMenu(dataMenu);
const { classMenu, switchBtn } = refs;
classMenu.insertAdjacentHTML('beforeend', result);
console.log(switchBtn.checked);

switchBtn.addEventListener('change', e => {
  document.querySelector('body').classList.toggle('dark-theme');
  document.querySelector('body').classList.toggle('light-theme');
  let theme = e.target.checked ? 'dark-theme' : 'light-theme';
  localStorage.setItem('theme', theme);
});
let theme = localStorage.getItem('theme');
if (!theme) {
  theme = 'light-theme';
  localStorage.setItem('theme', theme);
}
document.querySelector('body').classList.add(theme);
switchBtn.checked = theme === 'light-theme' ? false : true;

import placeMenuInDOM from './placeMenuInDOM';
import './style.css';
import toggleClass from './toggleClass';

const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.menu-items');

menu.addEventListener('click', () => {
    toggleClass(menuItems, 'invisible');
});

window.addEventListener('resize', () => {
    const vw = window.visualViewport.width;
    placeMenuInDOM(vw);
})
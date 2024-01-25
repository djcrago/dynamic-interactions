import placeMenuInDOMController from './placeMenuInDOMController';
import './style.css';
import toggleClass from './toggleClass';

const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.menu-items');

menu.addEventListener('click', () => {
    toggleClass(menuItems, 'invisible');
});

window.addEventListener('DOMContentLoaded', placeMenuInDOMController);
window.addEventListener('resize', placeMenuInDOMController);
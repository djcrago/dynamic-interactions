import addMenuItemImages from './addMenuItemImages';
import displaySlide from './displaySlide';
import displaySlideController from './displaySlideController';
import getImages from './getImages';
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

const images = getImages();

// const imageSlider = document.querySelector('.image-slider');

displaySlide(images[0]);

setTimeout(() => {
    displaySlide(images[1]);
}, 5000);

setTimeout(() => {
    displaySlide(images[2]);
}, 10000);

// displaySlideController();

addMenuItemImages();
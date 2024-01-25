import addMenuItemImages from "./addMenuItemImages";
import toggleClass from "./toggleClass";
import placeMenuInDOMController from "./placeMenuInDOMController";

export default function initializeMenu() {
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelector('.menu-items');

    addMenuItemImages();

    menu.addEventListener('click', () => {
        toggleClass(menuItems, 'invisible');
    });

    window.addEventListener('DOMContentLoaded', placeMenuInDOMController);
    window.addEventListener('resize', placeMenuInDOMController);

}
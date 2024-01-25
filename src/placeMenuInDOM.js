export default function placeMenuInDOM() {
    const menuItems = document.querySelector('.menu-items');
    const vw = window.visualViewport.width;

    if (vw > 682) {
        menuItems.style.top = '110px';
        menuItems.style.right = '40px';
    }

    if (vw > 389 && vw <= 682) {
        menuItems.style.top = '223px';
    }

    if (vw <= 389) {
        menuItems.style.top = '264px';
    }

}
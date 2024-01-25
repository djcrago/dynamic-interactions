export default function placeMenuInDOM(vw) {
    const menuItems = document.querySelector('.menu-items');

    menuItems.style.cssText = 'top: ; right: ;';

    if (vw > 682) {
        menuItems.style.top = '110px';
        menuItems.style.right = '40px';
    };

    if (vw <= 682 && vw > 626) {
        menuItems.style.top = '182px';
    };

    if (vw <= 626 && vw > 398) {
        menuItems.style.top = '223px';
    };

    if (vw <= 398) {
        menuItems.style.top = '264px';
    };
}
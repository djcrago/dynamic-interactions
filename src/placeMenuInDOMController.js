import placeMenuInDOM from "./placeMenuInDOM";

export default function placeMenuInDOMController() {
    const vw = window.visualViewport.width;
    placeMenuInDOM(vw);
}
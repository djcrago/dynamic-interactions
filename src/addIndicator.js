import displaySlideController from "./displaySlideController";

export default function addIndicator(slideIndex) {
    const imageIndicators = document.querySelector('.image-indicators');

    const indicator = document.createElement('div');
    indicator.classList.toggle('indicator');
    indicator.addEventListener('click', () => {
        displaySlideController(slideIndex);
    });

    imageIndicators.appendChild(indicator);
}

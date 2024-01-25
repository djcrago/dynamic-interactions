import changeSlide from "./changeSlide";

export default function addImageIndicator(slideIndex) {
    const imageIndicators = document.querySelector('.image-indicators');

    const indicator = document.createElement('div');
    indicator.classList.toggle('indicator');
    indicator.addEventListener('click', () => {
        changeSlide(slideIndex);
    });
    imageIndicators.appendChild(indicator);

}
import changeSlide from "./changeSlide";

export default function addImageIndicator(targetSlide) {
    const imageIndicators = document.querySelector('.image-indicators');

    const indicator = document.createElement('div');
    indicator.classList.toggle('indicator');
    indicator.addEventListener('click', () => {
        changeSlide(targetSlide);
    });
    imageIndicators.appendChild(indicator);

}
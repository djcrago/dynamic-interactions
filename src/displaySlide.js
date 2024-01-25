import colorImageIndicator from "./colorImageIndicator";
import getImages from "./getImages";

export default function displaySlide(index) {
    const images = getImages();
    const imageSlider = document.querySelector('.image-container');

    imageSlider.innerHTML = '';

    imageSlider.appendChild(images[index]);

    colorImageIndicator(index);

}
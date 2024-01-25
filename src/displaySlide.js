export default function displaySlide(image) {
    const imageSlider = document.querySelector('.image-slider');

    imageSlider.innerHTML = '';

    imageSlider.appendChild(image);

}

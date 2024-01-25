export default function displaySlide(image) {
    const imageSlider = document.querySelector('.image-container');

    imageSlider.innerHTML = '';

    imageSlider.appendChild(image);

}
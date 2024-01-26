import images from ".";

export default function displaySlide(index) {
    const imageContainer = document.querySelector('.image-container');

    imageContainer.innerHTML = '';

    imageContainer.appendChild(images[index]);

}

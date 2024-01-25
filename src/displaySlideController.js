import getImages from "./getImages";

export default function displaySlideController() {
    const imageSlider = document.querySelector('.image-slider');

    const images = getImages();
}

// export default function displaySlide(image) {
//     const imageSlider = document.querySelector('.image-slider');

//     setTimeout(() => {
//         imageSlider.appendChild(image);
//     }, 5000);
// }

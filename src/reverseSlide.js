import displaySlide from "./displaySlide";
import getImages from "./getImages";

export default function reverseSlide() {
    const images = getImages();
    const currentImage = document.querySelector('.image');

    for (let i = 0; i < images.length; i += 1) {
        if (currentImage.src === images[i].src) {
            if (i > 0) {
                displaySlide(i - 1);
            }

            if (i === 0) {
                displaySlide(images.length - 1);
            }
            
        }
    }
}
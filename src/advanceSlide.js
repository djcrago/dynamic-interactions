import getImages from "./getImages";
import displaySlide from "./displaySlide";

export default function advanceSlide() {
    const images = getImages();
    const currentImage = document.querySelector('.image');

    for (let i = 0; i < images.length; i += 1) {
        if (currentImage.src === images[i].src) {
            if (i < images.length - 1) {
                displaySlide(i + 1);
            }

            if (i === images.length - 1) {
                displaySlide(0);
            }
        }
    }
}
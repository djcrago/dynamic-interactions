import images from ".";
import displaySlideController from "./displaySlideController";


export default function previousImage() {
    const currentImage = document.querySelector('.image');

    for (let i = 0; i < images.length; i += 1) {
        if (currentImage.src === images[i].src) {
            if (i > 0) {
                displaySlideController(i - 1);
            }

            if (i === 0) {
                displaySlideController(images.length - 1);
            }
            
        }
    }
}
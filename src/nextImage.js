import images from ".";
import displaySlideController from "./displaySlideController";

export default function nextImage() {
    const currentImage = document.querySelector('.image');
    const lastImage = images.length - 1;

    for (let i = 0; i < images.length; i += 1) {
        if (currentImage.src === images[i].src) {
            if (i < lastImage) {
                displaySlideController(i + 1);
            };

            if (i === lastImage) {
                displaySlideController(0);
            };
        };
    };
}
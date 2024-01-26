import images from ".";import displaySlideController from "./displaySlideController";

let i = 0;

export default function loopThroughImages() {
    displaySlideController(i);

    setTimeout(() => {
        const previousImage = document.querySelector('.image');

        displaySlideController(i);

        if (previousImage !== null) {
            for (let j = 0; j < images.length; j += 1) {
                if (previousImage.src === images[j].src) {
                    i = j;
                }
            }
        }
    }, 5000);

    setTimeout(() => {
        i += 1;       
        if (i === images.length) {
            i = 0;
        };

        loopThroughImages();
    }, 5000);

}

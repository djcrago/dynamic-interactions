import getImages from "./getImages";
import displaySlide from "./displaySlide";
import loopDisplaySlideController from "./loopDisplaySlideController";
import colorImageIndicator from "./colorImageIndicator";

const images = getImages();
let i = 0;

export default function displaySlideController() {

    displaySlide(images[i]);

    colorImageIndicator(i);

    setTimeout(() => {
        const previousImage = document.querySelector('.image');

        displaySlide(images[i]);

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
        }
        loopDisplaySlideController()
    }, 5000);

}
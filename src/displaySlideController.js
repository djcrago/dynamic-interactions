import getImages from "./getImages";
import displaySlide from "./displaySlide";
import loopDisplaySlideController from "./loopDisplaySlideController";

const images = getImages();
let test = 0;

export default function displaySlideController() {

    displaySlide(images[test]);

    setTimeout(() => {
        const previousImage = document.querySelector('.image');

        displaySlide(images[test]);

        if (previousImage !== null) {
            for (let j = 0; j < images.length; j += 1) {
                if (previousImage.src === images[j].src) {
                    test = j;
                }
            }
        }
    }, 5000);

    setTimeout(() => {
        test += 1;
        if (test === images.length) {
            test = 0;
        }
        loopDisplaySlideController()
    }, 5000);

}
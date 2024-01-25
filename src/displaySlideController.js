import getImages from "./getImages";
import displaySlide from "./displaySlide";
import loopDisplaySlideController from "./loopDisplaySlideController";

const images = getImages();
let i = 0;

export default function displaySlideController(input) {
    if (input) {
        console.log(input);
        i += input;
    }

    displaySlide(i);

    setTimeout(() => {
    const previousImage = document.querySelector('.image');

    displaySlide(i);

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
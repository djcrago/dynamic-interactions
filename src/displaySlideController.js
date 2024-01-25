import getImages from "./getImages";
import displaySlide from "./displaySlide";
import loopDisplaySlideController from "./loopDisplaySlideController";

const images = getImages();

export default function displaySlideController() {
    let delay = 0;

    for (let i = 0; i < images.length; i += 1) {
        setTimeout(() => {
            displaySlide(images[i]);
        }, delay);
        delay += 5000;
    }

    const loopDelay = images.length * 5000;
    
    setTimeout(() => {
        loopDisplaySlideController()
    }, loopDelay);

}
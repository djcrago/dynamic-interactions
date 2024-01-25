import getImages from "./getImages";
import displaySlide from "./displaySlide";
import loopDisplaySlideController from "./loopDisplaySlideController";

const imageSlider = document.querySelector('.image-slider');
const images = getImages();

export default function displaySlideController() {
    let i = 0;

    displaySlide(images[i]);

    setTimeout(() => {
        i +=1;
        displaySlide(images[i]);
    }, 5000);

    setTimeout(() => {
        i += 1;
        displaySlide(images[i]);
    }, 10000);

    setTimeout(() => {
        console.log(imageSlider);
        loopDisplaySlideController()
    }, 15000)

}
import displaySlide from "./displaySlide";
import getImages from "./getImages";

const images = getImages();

export default function changeSlide(targetSlide) {
    images.forEach((image) => {
        if (image.src === targetSlide.src) {
            displaySlide(targetSlide);
        }
    });

}
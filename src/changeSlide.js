import displaySlide from "./displaySlide";
import getImages from "./getImages";

const images = getImages();

export default function changeSlide(slideIndex) {
    for (let i = 0; i < images.length; i += 1) {
        if (i === slideIndex) {
            displaySlide(slideIndex);
        }
    }

}
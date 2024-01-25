import addImageIndicator from "./addImageIndicator";
import getImages from "./getImages";

const images = getImages();

export default function addImageIndicatorController() {
    for (let i = 0; i < images.length; i += 1) {
        addImageIndicator(i);
    }
}
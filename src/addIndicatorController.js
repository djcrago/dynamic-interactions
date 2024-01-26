import addIndicator from "./addIndicator";

export default function addIndicatorController(imagesLength) {
    for (let i = 0; i < imagesLength; i += 1) {
        addIndicator(i);
    }
}
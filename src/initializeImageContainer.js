import addArrows from "./addArrows";
import addIndicatorController from "./addIndicatorController";

export default function initializeImageContainer(imagesLength) {
    addArrows();
    addIndicatorController(imagesLength);
}
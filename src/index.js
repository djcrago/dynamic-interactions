import displaySlide from './displaySlide';
import displaySlideController from './displaySlideController';
import getImages from './getImages';
import initializeMenu from './initializeMenu';
import './style.css';

initializeMenu()

const images = getImages();

displaySlide(images[0]);

setTimeout(() => {
    displaySlide(images[1]);
}, 5000);

setTimeout(() => {
    displaySlide(images[2]);
}, 10000);

displaySlideController();
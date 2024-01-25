import Left from './photos/arrow-left-bold.svg';
import Right from './photos/arrow-right-bold.svg';

export default function addArrowImages() {
    const previousImage = document.querySelector('.previous-image');
    const nextImage = document.querySelector('.next-image');

    previousImage.src = Left;
    nextImage.src = Right;
}
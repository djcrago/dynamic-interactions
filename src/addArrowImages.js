import advanceSlide from './advanceSlide';
import Left from './photos/arrow-left-bold.svg';
import Right from './photos/arrow-right-bold.svg';
import reverseSlide from './reverseSlide';

export default function addArrowImages() {
    const previousImage = document.querySelector('.previous-image');
    const nextImage = document.querySelector('.next-image');

    previousImage.src = Left;
    nextImage.src = Right;

    previousImage.addEventListener('click', reverseSlide);

    nextImage.addEventListener('click', advanceSlide);
}
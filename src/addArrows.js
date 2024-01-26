import Left from './photos/arrow-left-bold.svg';
import Right from './photos/arrow-right-bold.svg';
import previousImage from './previousImage';
import nextImage from './nextImage';

export default function addArrows() {
    const previousImageButton = document.querySelector('.previous-image');
    const nextImageButton = document.querySelector('.next-image');

    previousImageButton.src = Left;
    nextImageButton.src = Right;

    previousImageButton.addEventListener('click', previousImage);
    nextImageButton.addEventListener('click', nextImage);
}

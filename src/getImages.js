import Pikachu from './photos/pikachu.jpg';
import Charmander from './photos/charmander.jpg';
import Squirtle from './photos/squirtle.jpg';

export default function getImages() {
    const imageSources = [
        Pikachu,
        Charmander,
        Squirtle,
    ]

    const images = [];

    imageSources.forEach((imageSource) => {
        const img = document.createElement('img');
        img.src = imageSource;
        images.push(img);
    });

    return images;
}

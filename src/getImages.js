import Pikachu from './photos/pikachu.jpg';
import Charmander from './photos/charmander.jpg';
import Squirtle from './photos/squirtle.jpg';
import Bulbasaur from './photos/bulbasaur.jpg';
import Eevee from './photos/eevee.jpg';

export default function getImages() {
    const imageSources = [
        Pikachu,
        Eevee,
        Charmander,
        Squirtle,
        Bulbasaur,
    ]

    const images = [];

    imageSources.forEach((imageSource) => {
        const img = document.createElement('img');
        img.classList.toggle('image');
        img.src = imageSource;
        images.push(img);
    });

    return images;
}

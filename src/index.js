import './style.css';
import initializeMenu from './initializeMenu';
import loopThroughImages from "./loopThroughImages";
import getImages from './getImages';
import initializeImageContainer from './initializeImageContainer';

const images = getImages();

export default images;

initializeMenu();

initializeImageContainer(images.length);

loopThroughImages();
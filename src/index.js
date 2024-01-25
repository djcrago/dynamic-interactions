import './style.css';
import initializeMenu from './initializeMenu';
import displaySlideController from './displaySlideController';
import addArrowImages from './addArrowImages';
import addImageIndicatorController from './addImageIndicatorController';
import colorImageIndicator from './colorImageIndicator';

initializeMenu();

addArrowImages();
addImageIndicatorController();

displaySlideController();

colorImageIndicator(0);
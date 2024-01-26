/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addArrows.js":
/*!**************************!*\
  !*** ./src/addArrows.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addArrows)
/* harmony export */ });
/* harmony import */ var _photos_arrow_left_bold_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos/arrow-left-bold.svg */ "./src/photos/arrow-left-bold.svg");
/* harmony import */ var _photos_arrow_right_bold_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos/arrow-right-bold.svg */ "./src/photos/arrow-right-bold.svg");
/* harmony import */ var _previousImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./previousImage */ "./src/previousImage.js");
/* harmony import */ var _nextImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nextImage */ "./src/nextImage.js");




function addArrows() {
  const previousImageButton = document.querySelector('.previous-image');
  const nextImageButton = document.querySelector('.next-image');
  previousImageButton.src = _photos_arrow_left_bold_svg__WEBPACK_IMPORTED_MODULE_0__;
  nextImageButton.src = _photos_arrow_right_bold_svg__WEBPACK_IMPORTED_MODULE_1__;
  previousImageButton.addEventListener('click', _previousImage__WEBPACK_IMPORTED_MODULE_2__["default"]);
  nextImageButton.addEventListener('click', _nextImage__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

/***/ }),

/***/ "./src/addIndicator.js":
/*!*****************************!*\
  !*** ./src/addIndicator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addIndicator)
/* harmony export */ });
/* harmony import */ var _displaySlideController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaySlideController */ "./src/displaySlideController.js");

function addIndicator(slideIndex) {
  const imageIndicators = document.querySelector('.image-indicators');
  const indicator = document.createElement('div');
  indicator.classList.toggle('indicator');
  indicator.addEventListener('click', () => {
    (0,_displaySlideController__WEBPACK_IMPORTED_MODULE_0__["default"])(slideIndex);
  });
  imageIndicators.appendChild(indicator);
}

/***/ }),

/***/ "./src/addIndicatorController.js":
/*!***************************************!*\
  !*** ./src/addIndicatorController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addIndicatorController)
/* harmony export */ });
/* harmony import */ var _addIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addIndicator */ "./src/addIndicator.js");

function addIndicatorController(imagesLength) {
  for (let i = 0; i < imagesLength; i += 1) {
    (0,_addIndicator__WEBPACK_IMPORTED_MODULE_0__["default"])(i);
  }
}

/***/ }),

/***/ "./src/addMenuItemImages.js":
/*!**********************************!*\
  !*** ./src/addMenuItemImages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMenuItemImages)
/* harmony export */ });
/* harmony import */ var _photos_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos/menu.svg */ "./src/photos/menu.svg");
/* harmony import */ var _photos_account_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos/account.svg */ "./src/photos/account.svg");
/* harmony import */ var _photos_message_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos/message.svg */ "./src/photos/message.svg");
/* harmony import */ var _photos_cog_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos/cog.svg */ "./src/photos/cog.svg");




function addMenuItemImages() {
  const menu = document.querySelector('.menu-img');
  const profile = document.querySelector('.profile-img');
  const messages = document.querySelector('.messages-img');
  const settings = document.querySelector('.settings-img');
  menu.src = _photos_menu_svg__WEBPACK_IMPORTED_MODULE_0__;
  profile.src = _photos_account_svg__WEBPACK_IMPORTED_MODULE_1__;
  messages.src = _photos_message_svg__WEBPACK_IMPORTED_MODULE_2__;
  settings.src = _photos_cog_svg__WEBPACK_IMPORTED_MODULE_3__;
}

/***/ }),

/***/ "./src/colorIndicator.js":
/*!*******************************!*\
  !*** ./src/colorIndicator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ colorIndicator)
/* harmony export */ });
function colorIndicator(index) {
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach(indicator => indicator.classList.remove('colored'));
  indicators[index].classList.toggle('colored');
}

/***/ }),

/***/ "./src/displaySlide.js":
/*!*****************************!*\
  !*** ./src/displaySlide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displaySlide)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");

function displaySlide(index) {
  const imageContainer = document.querySelector('.image-container');
  imageContainer.innerHTML = '';
  imageContainer.appendChild(___WEBPACK_IMPORTED_MODULE_0__["default"][index]);
}

/***/ }),

/***/ "./src/displaySlideController.js":
/*!***************************************!*\
  !*** ./src/displaySlideController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displaySlideController)
/* harmony export */ });
/* harmony import */ var _displaySlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaySlide */ "./src/displaySlide.js");
/* harmony import */ var _colorIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorIndicator */ "./src/colorIndicator.js");


function displaySlideController(index) {
  (0,_displaySlide__WEBPACK_IMPORTED_MODULE_0__["default"])(index);
  (0,_colorIndicator__WEBPACK_IMPORTED_MODULE_1__["default"])(index);
}

/***/ }),

/***/ "./src/getImages.js":
/*!**************************!*\
  !*** ./src/getImages.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getImages)
/* harmony export */ });
/* harmony import */ var _photos_pikachu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos/pikachu.jpg */ "./src/photos/pikachu.jpg");
/* harmony import */ var _photos_charmander_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos/charmander.jpg */ "./src/photos/charmander.jpg");
/* harmony import */ var _photos_squirtle_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos/squirtle.jpg */ "./src/photos/squirtle.jpg");
/* harmony import */ var _photos_bulbasaur_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos/bulbasaur.jpg */ "./src/photos/bulbasaur.jpg");
/* harmony import */ var _photos_eevee_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photos/eevee.jpg */ "./src/photos/eevee.jpg");





function getImages() {
  const imageSources = [_photos_pikachu_jpg__WEBPACK_IMPORTED_MODULE_0__, _photos_eevee_jpg__WEBPACK_IMPORTED_MODULE_4__, _photos_charmander_jpg__WEBPACK_IMPORTED_MODULE_1__, _photos_squirtle_jpg__WEBPACK_IMPORTED_MODULE_2__, _photos_bulbasaur_jpg__WEBPACK_IMPORTED_MODULE_3__];
  const images = [];
  imageSources.forEach(imageSource => {
    const img = document.createElement('img');
    img.classList.toggle('image');
    img.src = imageSource;
    images.push(img);
  });
  return images;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initializeMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initializeMenu */ "./src/initializeMenu.js");
/* harmony import */ var _loopThroughImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopThroughImages */ "./src/loopThroughImages.js");
/* harmony import */ var _getImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getImages */ "./src/getImages.js");
/* harmony import */ var _initializeImageContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initializeImageContainer */ "./src/initializeImageContainer.js");





const images = (0,_getImages__WEBPACK_IMPORTED_MODULE_3__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (images);
(0,_initializeMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_initializeImageContainer__WEBPACK_IMPORTED_MODULE_4__["default"])(images.length);
(0,_loopThroughImages__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/initializeImageContainer.js":
/*!*****************************************!*\
  !*** ./src/initializeImageContainer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializeImageContainer)
/* harmony export */ });
/* harmony import */ var _addArrows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addArrows */ "./src/addArrows.js");
/* harmony import */ var _addIndicatorController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addIndicatorController */ "./src/addIndicatorController.js");


function initializeImageContainer(imagesLength) {
  (0,_addArrows__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_addIndicatorController__WEBPACK_IMPORTED_MODULE_1__["default"])(imagesLength);
}

/***/ }),

/***/ "./src/initializeMenu.js":
/*!*******************************!*\
  !*** ./src/initializeMenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializeMenu)
/* harmony export */ });
/* harmony import */ var _addMenuItemImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMenuItemImages */ "./src/addMenuItemImages.js");
/* harmony import */ var _toggleClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleClass */ "./src/toggleClass.js");
/* harmony import */ var _placeMenuInDOMController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeMenuInDOMController */ "./src/placeMenuInDOMController.js");



function initializeMenu() {
  const menu = document.querySelector('.menu');
  const menuItems = document.querySelector('.menu-items');
  (0,_addMenuItemImages__WEBPACK_IMPORTED_MODULE_0__["default"])();
  menu.addEventListener('click', () => {
    (0,_toggleClass__WEBPACK_IMPORTED_MODULE_1__["default"])(menuItems, 'invisible');
  });
  window.addEventListener('DOMContentLoaded', _placeMenuInDOMController__WEBPACK_IMPORTED_MODULE_2__["default"]);
  window.addEventListener('resize', _placeMenuInDOMController__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/***/ }),

/***/ "./src/loopThroughImages.js":
/*!**********************************!*\
  !*** ./src/loopThroughImages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopThroughImages)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _displaySlideController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaySlideController */ "./src/displaySlideController.js");


let i = 0;
function loopThroughImages() {
  (0,_displaySlideController__WEBPACK_IMPORTED_MODULE_1__["default"])(i);
  setTimeout(() => {
    const previousImage = document.querySelector('.image');
    (0,_displaySlideController__WEBPACK_IMPORTED_MODULE_1__["default"])(i);
    if (previousImage !== null) {
      for (let j = 0; j < ___WEBPACK_IMPORTED_MODULE_0__["default"].length; j += 1) {
        if (previousImage.src === ___WEBPACK_IMPORTED_MODULE_0__["default"][j].src) {
          i = j;
        }
      }
    }
  }, 5000);
  setTimeout(() => {
    i += 1;
    if (i === ___WEBPACK_IMPORTED_MODULE_0__["default"].length) {
      i = 0;
    }
    ;
    loopThroughImages();
  }, 5000);
}

/***/ }),

/***/ "./src/nextImage.js":
/*!**************************!*\
  !*** ./src/nextImage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nextImage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _displaySlideController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaySlideController */ "./src/displaySlideController.js");


function nextImage() {
  const currentImage = document.querySelector('.image');
  const lastImage = ___WEBPACK_IMPORTED_MODULE_0__["default"].length - 1;
  for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__["default"].length; i += 1) {
    if (currentImage.src === ___WEBPACK_IMPORTED_MODULE_0__["default"][i].src) {
      if (i < lastImage) {
        (0,_displaySlideController__WEBPACK_IMPORTED_MODULE_1__["default"])(i + 1);
      }
      ;
      if (i === lastImage) {
        (0,_displaySlideController__WEBPACK_IMPORTED_MODULE_1__["default"])(0);
      }
      ;
    }
    ;
  }
  ;
}

/***/ }),

/***/ "./src/placeMenuInDOM.js":
/*!*******************************!*\
  !*** ./src/placeMenuInDOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ placeMenuInDOM)
/* harmony export */ });
const menuItems = document.querySelector('.menu-items');
function placeMenuInDOM(vw) {
  menuItems.style.cssText = 'top: ; right: ;';
  if (vw > 682) {
    menuItems.style.top = '110px';
    menuItems.style.right = '40px';
  }
  ;
  if (vw <= 682 && vw > 626) {
    menuItems.style.top = '182px';
  }
  ;
  if (vw <= 626 && vw > 398) {
    menuItems.style.top = '223px';
  }
  ;
  if (vw <= 398) {
    menuItems.style.top = '264px';
  }
  ;
}

/***/ }),

/***/ "./src/placeMenuInDOMController.js":
/*!*****************************************!*\
  !*** ./src/placeMenuInDOMController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ placeMenuInDOMController)
/* harmony export */ });
/* harmony import */ var _placeMenuInDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeMenuInDOM */ "./src/placeMenuInDOM.js");

function placeMenuInDOMController() {
  const vw = window.visualViewport.width;
  (0,_placeMenuInDOM__WEBPACK_IMPORTED_MODULE_0__["default"])(vw);
}

/***/ }),

/***/ "./src/previousImage.js":
/*!******************************!*\
  !*** ./src/previousImage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previousImage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _displaySlideController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaySlideController */ "./src/displaySlideController.js");


function previousImage() {
  const currentImage = document.querySelector('.image');
  for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__["default"].length; i += 1) {
    if (currentImage.src === ___WEBPACK_IMPORTED_MODULE_0__["default"][i].src) {
      if (i > 0) {
        (0,_displaySlideController__WEBPACK_IMPORTED_MODULE_1__["default"])(i - 1);
      }
      if (i === 0) {
        (0,_displaySlideController__WEBPACK_IMPORTED_MODULE_1__["default"])(___WEBPACK_IMPORTED_MODULE_0__["default"].length - 1);
      }
    }
  }
}

/***/ }),

/***/ "./src/toggleClass.js":
/*!****************************!*\
  !*** ./src/toggleClass.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleClass)
/* harmony export */ });
function toggleClass(elementToToggle, className) {
  elementToToggle.classList.toggle(className);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-width: 320px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: rgba(240, 128, 128, 0.434);
    padding: 32px;
}

.header > h1 {
    margin-left: auto;
    margin-right: auto;
    font-size: 2.25rem;
    text-align: center;
    margin: 32px auto;
}

.menu {
    display: flex;
    padding: 4px;
    background-color: rgb(255, 246, 246);
    border: 1px solid #000;
    border-radius: 8px;
    margin: 0 8px;
}

.header img {
    height: 30px;
}

.menu:hover {
    background-color: rgb(255, 255, 255);
    cursor: pointer;
}

.menu:active {
    background-color: rgb(255, 246, 246);
}

.menu-items {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: white;
    border: 1px solid #000;
    border-radius: 4px;
    width: 15vw;
    min-width: 116px;
}

.menu-items div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    gap: 8px;
}

.menu-items div:hover {
    background-color: rgb(255, 182, 182);
    cursor: pointer;
}

.menu-items div:active {
    background-color: rgba(255, 0, 0, 0.491);
}

.messages {
    background-color: rgba(255, 0, 0, 0.141);
}

.invisible {
    opacity: 0;
}

.image-slider-container {
    background-color: rgba(0, 0, 0, 0.691);
    margin: 15vh 0;
    padding: 32px;
    display: flex;
    flex-direction: column;
}

.image-slider {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 100%;
    width: 800px;
}

.image {
    height: 400px;
}

.previous-image, 
.next-image {
    background-color: rgba(255, 255, 255, 0.278);
    height: 75px;
    margin: 0 auto;
    border-radius: 16px;
    cursor: pointer;
}

.image-indicators {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 50vw;
    height: 50px;
    background-color: rgba(172, 172, 172, 0.553);
    border-radius: 4px;
}

.indicator {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 24px;
    border: 1px solid black;
    cursor: pointer;
    margin: 0 auto;
}

.colored {
    background-color: rgb(255, 127, 127);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,4CAA4C;IAC5C,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,sCAAsC;IACtC,cAAc;IACd,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,4CAA4C;IAC5C,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,4CAA4C;IAC5C,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    min-width: 320px;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    background-color: rgba(240, 128, 128, 0.434);\n    padding: 32px;\n}\n\n.header > h1 {\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 2.25rem;\n    text-align: center;\n    margin: 32px auto;\n}\n\n.menu {\n    display: flex;\n    padding: 4px;\n    background-color: rgb(255, 246, 246);\n    border: 1px solid #000;\n    border-radius: 8px;\n    margin: 0 8px;\n}\n\n.header img {\n    height: 30px;\n}\n\n.menu:hover {\n    background-color: rgb(255, 255, 255);\n    cursor: pointer;\n}\n\n.menu:active {\n    background-color: rgb(255, 246, 246);\n}\n\n.menu-items {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    background-color: white;\n    border: 1px solid #000;\n    border-radius: 4px;\n    width: 15vw;\n    min-width: 116px;\n}\n\n.menu-items div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 50px;\n    gap: 8px;\n}\n\n.menu-items div:hover {\n    background-color: rgb(255, 182, 182);\n    cursor: pointer;\n}\n\n.menu-items div:active {\n    background-color: rgba(255, 0, 0, 0.491);\n}\n\n.messages {\n    background-color: rgba(255, 0, 0, 0.141);\n}\n\n.invisible {\n    opacity: 0;\n}\n\n.image-slider-container {\n    background-color: rgba(0, 0, 0, 0.691);\n    margin: 15vh 0;\n    padding: 32px;\n    display: flex;\n    flex-direction: column;\n}\n\n.image-slider {\n    height: 500px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 32px;\n}\n\n.image-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    height: 100%;\n    width: 800px;\n}\n\n.image {\n    height: 400px;\n}\n\n.previous-image, \n.next-image {\n    background-color: rgba(255, 255, 255, 0.278);\n    height: 75px;\n    margin: 0 auto;\n    border-radius: 16px;\n    cursor: pointer;\n}\n\n.image-indicators {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    width: 50vw;\n    height: 50px;\n    background-color: rgba(172, 172, 172, 0.553);\n    border-radius: 4px;\n}\n\n.indicator {\n    background-color: white;\n    height: 30px;\n    width: 30px;\n    border-radius: 24px;\n    border: 1px solid black;\n    cursor: pointer;\n    margin: 0 auto;\n}\n\n.colored {\n    background-color: rgb(255, 127, 127);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/photos/account.svg":
/*!********************************!*\
  !*** ./src/photos/account.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "858ace2a4655551cffb8.svg";

/***/ }),

/***/ "./src/photos/arrow-left-bold.svg":
/*!****************************************!*\
  !*** ./src/photos/arrow-left-bold.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28ee5efaa7ae08ed5f03.svg";

/***/ }),

/***/ "./src/photos/arrow-right-bold.svg":
/*!*****************************************!*\
  !*** ./src/photos/arrow-right-bold.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8de19f94eb2104f35c54.svg";

/***/ }),

/***/ "./src/photos/bulbasaur.jpg":
/*!**********************************!*\
  !*** ./src/photos/bulbasaur.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48e8ceb6a6ae1affb6bc.jpg";

/***/ }),

/***/ "./src/photos/charmander.jpg":
/*!***********************************!*\
  !*** ./src/photos/charmander.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63f4eac9b26514ff85d9.jpg";

/***/ }),

/***/ "./src/photos/cog.svg":
/*!****************************!*\
  !*** ./src/photos/cog.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21a2bc942cb9bc7cfffa.svg";

/***/ }),

/***/ "./src/photos/eevee.jpg":
/*!******************************!*\
  !*** ./src/photos/eevee.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "385abf34b92702a98613.jpg";

/***/ }),

/***/ "./src/photos/menu.svg":
/*!*****************************!*\
  !*** ./src/photos/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d4061552fac064ed076.svg";

/***/ }),

/***/ "./src/photos/message.svg":
/*!********************************!*\
  !*** ./src/photos/message.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9e42bd30f94b5a650c2.svg";

/***/ }),

/***/ "./src/photos/pikachu.jpg":
/*!********************************!*\
  !*** ./src/photos/pikachu.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26dc5175fbc22cce5c7e.jpg";

/***/ }),

/***/ "./src/photos/squirtle.jpg":
/*!*********************************!*\
  !*** ./src/photos/squirtle.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6628cfe44b7b346187ec.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9hZGRBcnJvd3MuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9hZGRJbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9hZGRJbmRpY2F0b3JDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvYWRkTWVudUl0ZW1JbWFnZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9jb2xvckluZGljYXRvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL2Rpc3BsYXlTbGlkZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL2Rpc3BsYXlTbGlkZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9nZXRJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL2luaXRpYWxpemVJbWFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL2luaXRpYWxpemVNZW51LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvbG9vcFRocm91Z2hJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9uZXh0SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9wbGFjZU1lbnVJbkRPTS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3BsYWNlTWVudUluRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3ByZXZpb3VzSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy90b2dnbGVDbGFzcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGVmdCBmcm9tICcuL3Bob3Rvcy9hcnJvdy1sZWZ0LWJvbGQuc3ZnJztcbmltcG9ydCBSaWdodCBmcm9tICcuL3Bob3Rvcy9hcnJvdy1yaWdodC1ib2xkLnN2Zyc7XG5pbXBvcnQgcHJldmlvdXNJbWFnZSBmcm9tICcuL3ByZXZpb3VzSW1hZ2UnO1xuaW1wb3J0IG5leHRJbWFnZSBmcm9tICcuL25leHRJbWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEFycm93cygpIHtcbiAgICBjb25zdCBwcmV2aW91c0ltYWdlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpb3VzLWltYWdlJyk7XG4gICAgY29uc3QgbmV4dEltYWdlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQtaW1hZ2UnKTtcblxuICAgIHByZXZpb3VzSW1hZ2VCdXR0b24uc3JjID0gTGVmdDtcbiAgICBuZXh0SW1hZ2VCdXR0b24uc3JjID0gUmlnaHQ7XG5cbiAgICBwcmV2aW91c0ltYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldmlvdXNJbWFnZSk7XG4gICAgbmV4dEltYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dEltYWdlKTtcbn1cbiIsImltcG9ydCBkaXNwbGF5U2xpZGVDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlTbGlkZUNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkSW5kaWNhdG9yKHNsaWRlSW5kZXgpIHtcbiAgICBjb25zdCBpbWFnZUluZGljYXRvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtaW5kaWNhdG9ycycpO1xuXG4gICAgY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5kaWNhdG9yLmNsYXNzTGlzdC50b2dnbGUoJ2luZGljYXRvcicpO1xuICAgIGluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGlzcGxheVNsaWRlQ29udHJvbGxlcihzbGlkZUluZGV4KTtcbiAgICB9KTtcblxuICAgIGltYWdlSW5kaWNhdG9ycy5hcHBlbmRDaGlsZChpbmRpY2F0b3IpO1xufVxuIiwiaW1wb3J0IGFkZEluZGljYXRvciBmcm9tIFwiLi9hZGRJbmRpY2F0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkSW5kaWNhdG9yQ29udHJvbGxlcihpbWFnZXNMZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFkZEluZGljYXRvcihpKTtcbiAgICB9XG59IiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9waG90b3MvbWVudS5zdmcnO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9waG90b3MvYWNjb3VudC5zdmcnO1xuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4vcGhvdG9zL21lc3NhZ2Uuc3ZnJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3Bob3Rvcy9jb2cuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWVudUl0ZW1JbWFnZXMoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWltZycpO1xuICAgIGNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbWcnKTtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlcy1pbWcnKTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy1pbWcnKTtcblxuICAgIG1lbnUuc3JjID0gTWVudTtcbiAgICBwcm9maWxlLnNyYyA9IFByb2ZpbGU7XG4gICAgbWVzc2FnZXMuc3JjID0gTWVzc2FnZXM7XG4gICAgc2V0dGluZ3Muc3JjID0gU2V0dGluZ3M7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JJbmRpY2F0b3IoaW5kZXgpIHtcbiAgICBjb25zdCBpbmRpY2F0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZGljYXRvcicpO1xuXG4gICAgaW5kaWNhdG9ycy5mb3JFYWNoKChpbmRpY2F0b3IpID0+IGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdjb2xvcmVkJykpO1xuXG4gICAgaW5kaWNhdG9yc1tpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgnY29sb3JlZCcpO1xufVxuIiwiaW1wb3J0IGltYWdlcyBmcm9tIFwiLlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5U2xpZGUoaW5kZXgpIHtcbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1jb250YWluZXInKTtcblxuICAgIGltYWdlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VzW2luZGV4XSk7XG5cbn1cbiIsImltcG9ydCBkaXNwbGF5U2xpZGUgZnJvbSBcIi4vZGlzcGxheVNsaWRlXCI7XG5pbXBvcnQgY29sb3JJbmRpY2F0b3IgZnJvbSBcIi4vY29sb3JJbmRpY2F0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVNsaWRlQ29udHJvbGxlcihpbmRleCkge1xuICAgIGRpc3BsYXlTbGlkZShpbmRleCk7XG5cbiAgICBjb2xvckluZGljYXRvcihpbmRleCk7XG5cbn1cbiIsImltcG9ydCBQaWthY2h1IGZyb20gJy4vcGhvdG9zL3Bpa2FjaHUuanBnJztcbmltcG9ydCBDaGFybWFuZGVyIGZyb20gJy4vcGhvdG9zL2NoYXJtYW5kZXIuanBnJztcbmltcG9ydCBTcXVpcnRsZSBmcm9tICcuL3Bob3Rvcy9zcXVpcnRsZS5qcGcnO1xuaW1wb3J0IEJ1bGJhc2F1ciBmcm9tICcuL3Bob3Rvcy9idWxiYXNhdXIuanBnJztcbmltcG9ydCBFZXZlZSBmcm9tICcuL3Bob3Rvcy9lZXZlZS5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRJbWFnZXMoKSB7XG4gICAgY29uc3QgaW1hZ2VTb3VyY2VzID0gW1xuICAgICAgICBQaWthY2h1LFxuICAgICAgICBFZXZlZSxcbiAgICAgICAgQ2hhcm1hbmRlcixcbiAgICAgICAgU3F1aXJ0bGUsXG4gICAgICAgIEJ1bGJhc2F1cixcbiAgICBdXG5cbiAgICBjb25zdCBpbWFnZXMgPSBbXTtcblxuICAgIGltYWdlU291cmNlcy5mb3JFYWNoKChpbWFnZVNvdXJjZSkgPT4ge1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC50b2dnbGUoJ2ltYWdlJyk7XG4gICAgICAgIGltZy5zcmMgPSBpbWFnZVNvdXJjZTtcbiAgICAgICAgaW1hZ2VzLnB1c2goaW1nKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbWFnZXM7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBpbml0aWFsaXplTWVudSBmcm9tICcuL2luaXRpYWxpemVNZW51JztcbmltcG9ydCBsb29wVGhyb3VnaEltYWdlcyBmcm9tIFwiLi9sb29wVGhyb3VnaEltYWdlc1wiO1xuaW1wb3J0IGdldEltYWdlcyBmcm9tICcuL2dldEltYWdlcyc7XG5pbXBvcnQgaW5pdGlhbGl6ZUltYWdlQ29udGFpbmVyIGZyb20gJy4vaW5pdGlhbGl6ZUltYWdlQ29udGFpbmVyJztcblxuY29uc3QgaW1hZ2VzID0gZ2V0SW1hZ2VzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGltYWdlcztcblxuaW5pdGlhbGl6ZU1lbnUoKTtcblxuaW5pdGlhbGl6ZUltYWdlQ29udGFpbmVyKGltYWdlcy5sZW5ndGgpO1xuXG5sb29wVGhyb3VnaEltYWdlcygpOyIsImltcG9ydCBhZGRBcnJvd3MgZnJvbSBcIi4vYWRkQXJyb3dzXCI7XG5pbXBvcnQgYWRkSW5kaWNhdG9yQ29udHJvbGxlciBmcm9tIFwiLi9hZGRJbmRpY2F0b3JDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVJbWFnZUNvbnRhaW5lcihpbWFnZXNMZW5ndGgpIHtcbiAgICBhZGRBcnJvd3MoKTtcbiAgICBhZGRJbmRpY2F0b3JDb250cm9sbGVyKGltYWdlc0xlbmd0aCk7XG59IiwiaW1wb3J0IGFkZE1lbnVJdGVtSW1hZ2VzIGZyb20gXCIuL2FkZE1lbnVJdGVtSW1hZ2VzXCI7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSBcIi4vdG9nZ2xlQ2xhc3NcIjtcbmltcG9ydCBwbGFjZU1lbnVJbkRPTUNvbnRyb2xsZXIgZnJvbSBcIi4vcGxhY2VNZW51SW5ET01Db250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWl0ZW1zJyk7XG5cbiAgICBhZGRNZW51SXRlbUltYWdlcygpO1xuXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlQ2xhc3MobWVudUl0ZW1zLCAnaW52aXNpYmxlJyk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHBsYWNlTWVudUluRE9NQ29udHJvbGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHBsYWNlTWVudUluRE9NQ29udHJvbGxlcik7XG5cbn0iLCJpbXBvcnQgaW1hZ2VzIGZyb20gXCIuXCI7aW1wb3J0IGRpc3BsYXlTbGlkZUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheVNsaWRlQ29udHJvbGxlclwiO1xuXG5sZXQgaSA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3BUaHJvdWdoSW1hZ2VzKCkge1xuICAgIGRpc3BsYXlTbGlkZUNvbnRyb2xsZXIoaSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZScpO1xuXG4gICAgICAgIGRpc3BsYXlTbGlkZUNvbnRyb2xsZXIoaSk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzSW1hZ2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW1hZ2VzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzSW1hZ2Uuc3JjID09PSBpbWFnZXNbal0uc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIDUwMDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGkgKz0gMTsgICAgICAgXG4gICAgICAgIGlmIChpID09PSBpbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgfTtcblxuICAgICAgICBsb29wVGhyb3VnaEltYWdlcygpO1xuICAgIH0sIDUwMDApO1xuXG59XG4iLCJpbXBvcnQgaW1hZ2VzIGZyb20gXCIuXCI7XG5pbXBvcnQgZGlzcGxheVNsaWRlQ29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5U2xpZGVDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5leHRJbWFnZSgpIHtcbiAgICBjb25zdCBjdXJyZW50SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UnKTtcbiAgICBjb25zdCBsYXN0SW1hZ2UgPSBpbWFnZXMubGVuZ3RoIC0gMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjdXJyZW50SW1hZ2Uuc3JjID09PSBpbWFnZXNbaV0uc3JjKSB7XG4gICAgICAgICAgICBpZiAoaSA8IGxhc3RJbWFnZSkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlTbGlkZUNvbnRyb2xsZXIoaSArIDEpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGkgPT09IGxhc3RJbWFnZSkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlTbGlkZUNvbnRyb2xsZXIoMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG59IiwiY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaXRlbXMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2VNZW51SW5ET00odncpIHsgXG4gICAgbWVudUl0ZW1zLnN0eWxlLmNzc1RleHQgPSAndG9wOiA7IHJpZ2h0OiA7JztcblxuICAgIGlmICh2dyA+IDY4Mikge1xuICAgICAgICBtZW51SXRlbXMuc3R5bGUudG9wID0gJzExMHB4JztcbiAgICAgICAgbWVudUl0ZW1zLnN0eWxlLnJpZ2h0ID0gJzQwcHgnO1xuICAgIH07XG5cbiAgICBpZiAodncgPD0gNjgyICYmIHZ3ID4gNjI2KSB7XG4gICAgICAgIG1lbnVJdGVtcy5zdHlsZS50b3AgPSAnMTgycHgnO1xuICAgIH07XG5cbiAgICBpZiAodncgPD0gNjI2ICYmIHZ3ID4gMzk4KSB7XG4gICAgICAgIG1lbnVJdGVtcy5zdHlsZS50b3AgPSAnMjIzcHgnO1xuICAgIH07XG5cbiAgICBpZiAodncgPD0gMzk4KSB7XG4gICAgICAgIG1lbnVJdGVtcy5zdHlsZS50b3AgPSAnMjY0cHgnO1xuICAgIH07XG59IiwiaW1wb3J0IHBsYWNlTWVudUluRE9NIGZyb20gXCIuL3BsYWNlTWVudUluRE9NXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYWNlTWVudUluRE9NQ29udHJvbGxlcigpIHtcbiAgICBjb25zdCB2dyA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBwbGFjZU1lbnVJbkRPTSh2dyk7XG59IiwiaW1wb3J0IGltYWdlcyBmcm9tIFwiLlwiO1xuaW1wb3J0IGRpc3BsYXlTbGlkZUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheVNsaWRlQ29udHJvbGxlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZpb3VzSW1hZ2UoKSB7XG4gICAgY29uc3QgY3VycmVudEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY3VycmVudEltYWdlLnNyYyA9PT0gaW1hZ2VzW2ldLnNyYykge1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheVNsaWRlQ29udHJvbGxlcihpIC0gMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheVNsaWRlQ29udHJvbGxlcihpbWFnZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50VG9Ub2dnbGUsIGNsYXNzTmFtZSkge1xuICAgIGVsZW1lbnRUb1RvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjQzNCk7XG4gICAgcGFkZGluZzogMzJweDtcbn1cblxuLmhlYWRlciA+IGgxIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDMycHggYXV0bztcbn1cblxuLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0NiwgMjQ2KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW46IDAgOHB4O1xufVxuXG4uaGVhZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubWVudTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnU6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDYsIDI0Nik7XG59XG5cbi5tZW51LWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxNXZ3O1xuICAgIG1pbi13aWR0aDogMTE2cHg7XG59XG5cbi5tZW51LWl0ZW1zIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBnYXA6IDhweDtcbn1cblxuLm1lbnUtaXRlbXMgZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODIsIDE4Mik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudS1pdGVtcyBkaXY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC40OTEpO1xufVxuXG4ubWVzc2FnZXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjE0MSk7XG59XG5cbi5pbnZpc2libGUge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5pbWFnZS1zbGlkZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjkxKTtcbiAgICBtYXJnaW46IDE1dmggMDtcbiAgICBwYWRkaW5nOiAzMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmltYWdlLXNsaWRlciB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogODAwcHg7XG59XG5cbi5pbWFnZSB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLnByZXZpb3VzLWltYWdlLCBcbi5uZXh0LWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjc4KTtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZS1pbmRpY2F0b3JzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MiwgMTcyLCAxNzIsIDAuNTUzKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbG9yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEyNywgMTI3KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiw0Q0FBNEM7SUFDNUMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDRDQUE0QztJQUM1QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjQzNCk7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxufVxcblxcbi5oZWFkZXIgPiBoMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDMycHggYXV0bztcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0NiwgMjQ2KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXJnaW46IDAgOHB4O1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLm1lbnU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnU6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQ2LCAyNDYpO1xcbn1cXG5cXG4ubWVudS1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIG1pbi13aWR0aDogMTE2cHg7XFxufVxcblxcbi5tZW51LWl0ZW1zIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLm1lbnUtaXRlbXMgZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTgyLCAxODIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW1zIGRpdjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC40OTEpO1xcbn1cXG5cXG4ubWVzc2FnZXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4xNDEpO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmltYWdlLXNsaWRlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjkxKTtcXG4gICAgbWFyZ2luOiAxNXZoIDA7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pbWFnZS1zbGlkZXIge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogODAwcHg7XFxufVxcblxcbi5pbWFnZSB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi5wcmV2aW91cy1pbWFnZSwgXFxuLm5leHQtaW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjc4KTtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW1hZ2UtaW5kaWNhdG9ycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcyLCAxNzIsIDE3MiwgMC41NTMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5pbmRpY2F0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jb2xvcmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTI3LCAxMjcpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJMZWZ0IiwiUmlnaHQiLCJwcmV2aW91c0ltYWdlIiwibmV4dEltYWdlIiwiYWRkQXJyb3dzIiwicHJldmlvdXNJbWFnZUJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5leHRJbWFnZUJ1dHRvbiIsInNyYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwbGF5U2xpZGVDb250cm9sbGVyIiwiYWRkSW5kaWNhdG9yIiwic2xpZGVJbmRleCIsImltYWdlSW5kaWNhdG9ycyIsImluZGljYXRvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhcHBlbmRDaGlsZCIsImFkZEluZGljYXRvckNvbnRyb2xsZXIiLCJpbWFnZXNMZW5ndGgiLCJpIiwiTWVudSIsIlByb2ZpbGUiLCJNZXNzYWdlcyIsIlNldHRpbmdzIiwiYWRkTWVudUl0ZW1JbWFnZXMiLCJtZW51IiwicHJvZmlsZSIsIm1lc3NhZ2VzIiwic2V0dGluZ3MiLCJjb2xvckluZGljYXRvciIsImluZGV4IiwiaW5kaWNhdG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicmVtb3ZlIiwiaW1hZ2VzIiwiZGlzcGxheVNsaWRlIiwiaW1hZ2VDb250YWluZXIiLCJpbm5lckhUTUwiLCJQaWthY2h1IiwiQ2hhcm1hbmRlciIsIlNxdWlydGxlIiwiQnVsYmFzYXVyIiwiRWV2ZWUiLCJnZXRJbWFnZXMiLCJpbWFnZVNvdXJjZXMiLCJpbWFnZVNvdXJjZSIsImltZyIsInB1c2giLCJpbml0aWFsaXplTWVudSIsImxvb3BUaHJvdWdoSW1hZ2VzIiwiaW5pdGlhbGl6ZUltYWdlQ29udGFpbmVyIiwibGVuZ3RoIiwidG9nZ2xlQ2xhc3MiLCJwbGFjZU1lbnVJbkRPTUNvbnRyb2xsZXIiLCJtZW51SXRlbXMiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaiIsImN1cnJlbnRJbWFnZSIsImxhc3RJbWFnZSIsInBsYWNlTWVudUluRE9NIiwidnciLCJzdHlsZSIsImNzc1RleHQiLCJ0b3AiLCJyaWdodCIsInZpc3VhbFZpZXdwb3J0Iiwid2lkdGgiLCJlbGVtZW50VG9Ub2dnbGUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9
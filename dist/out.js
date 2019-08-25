/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fonts/raleway-regular-webfont.woff":
/*!********************************************!*\
  !*** ./fonts/raleway-regular-webfont.woff ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/raleway-regular-webfont.woff\";\n\n//# sourceURL=webpack:///./fonts/raleway-regular-webfont.woff?");

/***/ }),

/***/ "./fonts/raleway-regular-webfont.woff2":
/*!*********************************************!*\
  !*** ./fonts/raleway-regular-webfont.woff2 ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/raleway-regular-webfont.woff2\";\n\n//# sourceURL=webpack:///./fonts/raleway-regular-webfont.woff2?");

/***/ }),

/***/ "./images/black_chair.png":
/*!********************************!*\
  !*** ./images/black_chair.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/black_chair.png\";\n\n//# sourceURL=webpack:///./images/black_chair.png?");

/***/ }),

/***/ "./images/box1_img.jpg":
/*!*****************************!*\
  !*** ./images/box1_img.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/box1_img.jpg\";\n\n//# sourceURL=webpack:///./images/box1_img.jpg?");

/***/ }),

/***/ "./images/box2_img.jpg":
/*!*****************************!*\
  !*** ./images/box2_img.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/box2_img.jpg\";\n\n//# sourceURL=webpack:///./images/box2_img.jpg?");

/***/ }),

/***/ "./images/flickr.png":
/*!***************************!*\
  !*** ./images/flickr.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/flickr.png\";\n\n//# sourceURL=webpack:///./images/flickr.png?");

/***/ }),

/***/ "./images/form_ok.jpg":
/*!****************************!*\
  !*** ./images/form_ok.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/form_ok.jpg\";\n\n//# sourceURL=webpack:///./images/form_ok.jpg?");

/***/ }),

/***/ "./images/orange_chair.png":
/*!*********************************!*\
  !*** ./images/orange_chair.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/orange_chair.png\";\n\n//# sourceURL=webpack:///./images/orange_chair.png?");

/***/ }),

/***/ "./images/pinterest.png":
/*!******************************!*\
  !*** ./images/pinterest.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/pinterest.png\";\n\n//# sourceURL=webpack:///./images/pinterest.png?");

/***/ }),

/***/ "./images/red_chair.png":
/*!******************************!*\
  !*** ./images/red_chair.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/red_chair.png\";\n\n//# sourceURL=webpack:///./images/red_chair.png?");

/***/ }),

/***/ "./images/twitter.png":
/*!****************************!*\
  !*** ./images/twitter.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/twitter.png\";\n\n//# sourceURL=webpack:///./images/twitter.png?");

/***/ }),

/***/ "./images/vimeo.png":
/*!**************************!*\
  !*** ./images/vimeo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/vimeo.png\";\n\n//# sourceURL=webpack:///./images/vimeo.png?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(function () {\n    console.log('DOM SIT ON CHAIR');\n\n    var prevSlideButton = $('#prevSlide');\n    var nextSlideButton = $('#nextSlide');\n    var imagesContainer = $('.slider__article-images');\n    var imagesList = imagesContainer.find('li');\n    var indeks = 0;\n\n    prevSlideButton.on('click', function () {\n        imagesList[indeks].classList.add('hidden');\n        indeks--;\n        if (indeks === -1) {\n            indeks = imagesList.length - 1;\n        }\n        imagesList[indeks].classList.add('animation');\n        imagesList[indeks].classList.remove('hidden');\n    });\n\n    nextSlideButton.on('click', function () {\n        imagesList[indeks].classList.add('hidden');\n        indeks++;\n        if (indeks === imagesList.length) {\n            indeks = 0;\n        }\n        imagesList[indeks].classList.add('animation');\n        imagesList[indeks].classList.remove('hidden');\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./scss/main.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./scss/main.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../fonts/raleway-regular-webfont.woff2 */ \"./fonts/raleway-regular-webfont.woff2\"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../fonts/raleway-regular-webfont.woff */ \"./fonts/raleway-regular-webfont.woff\"));\nvar ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../images/black_chair.png */ \"./images/black_chair.png\"));\nvar ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../images/orange_chair.png */ \"./images/orange_chair.png\"));\nvar ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../images/red_chair.png */ \"./images/red_chair.png\"));\nvar ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../images/box1_img.jpg */ \"./images/box1_img.jpg\"));\nvar ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(/*! ../images/box2_img.jpg */ \"./images/box2_img.jpg\"));\nvar ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(/*! ../images/form_ok.jpg */ \"./images/form_ok.jpg\"));\nvar ___CSS_LOADER_URL___8___ = getUrl(__webpack_require__(/*! ../images/flickr.png */ \"./images/flickr.png\"));\nvar ___CSS_LOADER_URL___9___ = getUrl(__webpack_require__(/*! ../images/vimeo.png */ \"./images/vimeo.png\"));\nvar ___CSS_LOADER_URL___10___ = getUrl(__webpack_require__(/*! ../images/pinterest.png */ \"./images/pinterest.png\"));\nvar ___CSS_LOADER_URL___11___ = getUrl(__webpack_require__(/*! ../images/twitter.png */ \"./images/twitter.png\"));\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n/*--------------------------------------------------------------------------------*/\\n/*                                                                                */\\n/* R E S E T                                                                      */\\n/*                                                                                */\\n/*--------------------------------------------------------------------------------*/\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  list-style: none;\\n  text-decoration: none; }\\n\\n/*--------------------------------------------------------------------------------*/\\n/*                                                                                */\\n/* F O N T S                                                                      */\\n/*                                                                                */\\n/*--------------------------------------------------------------------------------*/\\n@font-face {\\n  font-family: 'raleway';\\n  src: url(\" + ___CSS_LOADER_URL___0___ + \") format(\\\"woff2\\\"), url(\" + ___CSS_LOADER_URL___1___ + \") format(\\\"woff\\\");\\n  font-weight: normal;\\n  font-style: normal; }\\n\\n/*--------------------------------------------------------------------------------*/\\n/*                                                                                */\\n/* B A S E                                                                        */\\n/*                                                                                */\\n/*--------------------------------------------------------------------------------*/\\nbody {\\n  font-family: \\\"raleway\\\", sans-serif; }\\n\\n/* podstawowy kontener dla każdej sekcji */\\n.container {\\n  margin: 0 auto;\\n  width: 1070px;\\n  display: flex;\\n  justify-content: space-between; }\\n\\n.hidden {\\n  display: none; }\\n\\n.animation {\\n  animation: disappearance 1s 0s 1 linear alternate; }\\n\\n.animation-revers {\\n  animation: disappearance 1s 0s 1 linear alternate-reverse; }\\n\\n@keyframes disappearance {\\n  0% {\\n    opacity: 0; }\\n  100% {\\n    opacity: 1; } }\\n\\n/*--------------------------------------------------------------------------------*/\\n/*                                                                                */\\n/*  H E A D E R   S C S S                                                         */\\n/*                                                                                */\\n/*--------------------------------------------------------------------------------*/\\nheader {\\n  padding: 10px 0;\\n  background-color: #000000; }\\n  header .logo {\\n    padding-left: 0.7rem;\\n    font-weight: 400;\\n    font-size: 14px;\\n    letter-spacing: 0.04rem;\\n    word-spacing: -0.05rem;\\n    color: #ffffff; }\\n    header .logo span {\\n      font-weight: 1000;\\n      color: #24BA9F; }\\n  header a {\\n    font-size: 0.9rem;\\n    color: #ffffff; }\\n    header a:hover {\\n      color: #24BA9F; }\\n  header ul {\\n    display: flex;\\n    flex-direction: row; }\\n    header ul li {\\n      position: relative;\\n      font-weight: 600;\\n      padding-left: 2.7rem;\\n      padding-right: 0.2rem; }\\n      header ul li:hover .dropdown {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: space-between;\\n        letter-spacing: 0.08rem; }\\n\\n.navigation ul.dropdown {\\n  width: 120px;\\n  height: 96px;\\n  background-color: #000000;\\n  padding: 10px;\\n  top: 38px;\\n  left: 27px;\\n  position: absolute;\\n  display: none; }\\n  .navigation ul.dropdown li {\\n    padding: 0;\\n    font-weight: 400; }\\n\\n.navigation .dropdown::before {\\n  content: '';\\n  width: 10px;\\n  height: 10px;\\n  background-color: #000000;\\n  position: absolute;\\n  transform-origin: 50% 50%;\\n  transform: translate(400%, -150%) scale(1.3) rotate(45deg); }\\n\\n.navigation .dropdown::after {\\n  content: '';\\n  width: 120px;\\n  height: 20px;\\n  position: absolute;\\n  transform: translate(-10px, -30px); }\\n\\n/*--------------------------------------------------------------------------------*/\\n/*                                                                                */\\n/* S L I D E R   S E C T I O N                                                    */\\n/*                                                                                */\\n/*--------------------------------------------------------------------------------*/\\n.slider {\\n  background: linear-gradient(to bottom, #f9f9f9 0%, #fcfcfc 0%, #f8f8f8 0%, #fafafa 1%, #fafafa 8%, #f8f8f8 8%, #f7f7f7 45%, #f5f5f5 45%, #f5f5f5 54%, #f3f3f3 55%, #f3f3f3 58%, #f1f1f1 59%, #f1f1f3 63%, #eeeef0 64%, #eeeef0 66%, #eaeaec 69%, #ebebed 70%, #e7e7e9 72%, #e6e5ea 75%, #e2e1e6 77%, #e1e0e5 80%, #dddce1 82%, #dedde3 83%, #dbdae0 84%, #dbdae0 86%, #d7d6dc 89%, #d8d7dd 89%, #d5d4da 91%, #d6d5db 91%, #d4d3d9 92%, #d5d4dc 93%, #d2d1d9 94%, #d3d2da 95%, #d0cfd7 97%, #d1d0d8 99%, #cacdd4 100%);\\n  overflow: hidden; }\\n\\n.slider__article {\\n  padding: 0 10px;\\n  margin-top: -28px;\\n  margin-bottom: 28px;\\n  height: 504px;\\n  display: flex;\\n  align-items: center; }\\n\\n.slider__article-images {\\n  height: 100%;\\n  width: 100%; }\\n\\n.slider__article-img {\\n  width: 100%;\\n  height: 470px;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  transform: scale(1.3) translate(-7px, 127px); }\\n\\nli:nth-child(1) .slider__article-img {\\n  background-image: url(\" + ___CSS_LOADER_URL___2___ + \"); }\\n\\nli:nth-child(2) .slider__article-img {\\n  background-image: url(\" + ___CSS_LOADER_URL___3___ + \");\\n  transform: scale(1) translate(-25px, 155px); }\\n\\nli:nth-child(3) .slider__article-img {\\n  background-image: url(\" + ___CSS_LOADER_URL___4___ + \");\\n  transform: scale(0.9) translate(0px, 125px); }\\n\\n.slider__article-content {\\n  width: 100%;\\n  padding-right: 100px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  font-weight: 400; }\\n  .slider__article-content h2 {\\n    font-weight: 500;\\n    font-size: 2.5rem;\\n    word-spacing: 0.1rem;\\n    letter-spacing: -0.1rem;\\n    padding-top: 60px;\\n    color: #000000; }\\n    .slider__article-content h2 span {\\n      font-weight: 800;\\n      color: #24BA9F; }\\n  .slider__article-content p {\\n    font-size: 0.9rem;\\n    line-height: 1.4rem;\\n    letter-spacing: 0.06rem;\\n    word-spacing: -0.1rem;\\n    color: #000000;\\n    text-align: center;\\n    padding: 1.6rem 0; }\\n  .slider__article-content a {\\n    font-size: 23.8px;\\n    width: 264px;\\n    height: 52px;\\n    border-radius: 10px;\\n    padding: 14px 0 0 14px;\\n    display: flex;\\n    justify-content: center;\\n    align-self: center;\\n    color: #ffffff;\\n    background-color: #24BA9F; }\\n    .slider__article-content a:hover {\\n      background-color: #136556; }\\n\\n.slider__article-back {\\n  width: 40px;\\n  height: 40px;\\n  border: 20px solid;\\n  border-color: transparent;\\n  box-shadow: -5px -5px #24BA9F;\\n  transform: translate(0px, 40px) scaleY(0.75) rotate(315deg) translate(10px, 10px);\\n  cursor: pointer;\\n  z-index: 2; }\\n  .slider__article-back:hover {\\n    width: 40px;\\n    height: 40px;\\n    border: 20px solid;\\n    border-color: transparent;\\n    box-shadow: -5px -5px #136556;\\n    transform: translate(0px, 40px) scaleY(0.75) rotate(315deg) translate(10px, 10px); }\\n\\n.slider__article-next {\\n  width: 40px;\\n  height: 40px;\\n  border: 20px solid;\\n  border-color: transparent;\\n  box-shadow: -5px -5px #24BA9F;\\n  transform: translate(0px, 40px) scaleY(0.75) rotate(135deg) translate(10px, 10px);\\n  cursor: pointer;\\n  z-index: 2; }\\n  .slider__article-next:hover {\\n    width: 40px;\\n    height: 40px;\\n    border: 20px solid;\\n    border-color: transparent;\\n    box-shadow: -5px -5px #136556;\\n    transform: translate(0px, 40px) scaleY(0.75) rotate(135deg) translate(10px, 10px); }\\n\\n/*--------------------------------------------------------------------------------*/\\n/*                                                                                */\\n/* P R O D U C T S   S E C T I O N                                                */\\n/*                                                                                */\\n/*--------------------------------------------------------------------------------*/\\n.products {\\n  padding: 27px 0 69px 0; }\\n\\n.products__item {\\n  height: 254px;\\n  width: 32%; }\\n\\n.products__item:nth-child(1) {\\n  background-image: url(\" + ___CSS_LOADER_URL___5___ + \"); }\\n\\n.products__item:nth-child(2) {\\n  background-image: url(\" + ___CSS_LOADER_URL___6___ + \"); }\\n\\n.products__item:nth-child(1),\\n.products__item:nth-child(2) {\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  cursor: pointer; }\\n  .products__item:nth-child(1):hover .products__description,\\n  .products__item:nth-child(1):hover .products__description-underline,\\n  .products__item:nth-child(2):hover .products__description,\\n  .products__item:nth-child(2):hover .products__description-underline {\\n    animation: disappearance 0.3s 0s 1 linear alternate-reverse forwards; }\\n\\n.products__description {\\n  font-size: 16.8px;\\n  letter-spacing: -0.03em;\\n  color: #000000;\\n  padding: 15px 0 0 15px;\\n  height: 62px;\\n  background-color: rgba(255, 255, 255, 0.5);\\n  position: relative;\\n  bottom: calc(107px - 100%); }\\n\\n.products__description-underline {\\n  width: 137px;\\n  height: 7px;\\n  background-color: #24BA9F;\\n  position: relative;\\n  bottom: calc(136px - 100%);\\n  left: 15px; }\\n\\n.products__item:nth-child(3) {\\n  border: 1px solid #aaaaaa; }\\n  .products__item:nth-child(3) .products__description {\\n    letter-spacing: 0em;\\n    line-height: 0px;\\n    position: relative;\\n    padding: 35px 0 0 24px;\\n    top: 0px; }\\n  .products__item:nth-child(3) .products__description-underline {\\n    width: 137px;\\n    height: 7px;\\n    background-color: #24BA9F;\\n    position: relative;\\n    bottom: 16px;\\n    left: 24px; }\\n  .products__item:nth-child(3) p {\\n    padding: 24px 45px 0 0;\\n    font-size: 15.4px;\\n    letter-spacing: -0.03em;\\n    line-height: 21px;\\n    position: relative;\\n    left: 24px;\\n    top: -30px; }\\n\\n/*--------------------------------------------------------------------------------*/\\n/*                                                                                */\\n/* P R I C E S   S E C T I O N                                                    */\\n/*                                                                                */\\n/*--------------------------------------------------------------------------------*/\\n.prices {\\n  padding: 42px 0 70px 0;\\n  background-color: #f1f1f1; }\\n\\n.prices__title-description {\\n  font-size: 23px;\\n  letter-spacing: -0.03em; }\\n\\n.prices__title-underline {\\n  width: 320px;\\n  height: 7px;\\n  background-color: #24BA9F;\\n  position: relative;\\n  bottom: -4px; }\\n\\n.prices__item {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between; }\\n\\n.prices__item-column {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 75px 0 0 0;\\n  padding: 0 0 0 0;\\n  width: 31%;\\n  border: 2px solid #aaaaaa;\\n  background-color: #ffffff; }\\n  .prices__item-column .prices__item-circle {\\n    width: 55px;\\n    height: 55px;\\n    border: 14px solid #ffffff;\\n    background-color: #aaaaaa;\\n    box-shadow: 0 0 0 1px #aaaaaa;\\n    border-radius: 50%;\\n    box-sizing: border-box;\\n    position: relative;\\n    left: 50%;\\n    transform: translateX(-50%) translateY(-65%); }\\n  .prices__item-column h3 {\\n    font-size: 23px;\\n    text-align: center;\\n    letter-spacing: -0.03em;\\n    color: #24BA9F;\\n    transform: translateY(-65%); }\\n  .prices__item-column div {\\n    height: 130px;\\n    width: 130px;\\n    text-align: center;\\n    background-color: #ffffff;\\n    border: 1px solid #aaaaaa;\\n    border-radius: 50%;\\n    transform: translateX(75%) translateY(5%); }\\n    .prices__item-column div p {\\n      color: #aaaaaa;\\n      font-weight: 800; }\\n      .prices__item-column div p:nth-child(1) {\\n        font-size: 42px;\\n        transform: translateY(60%); }\\n      .prices__item-column div p:nth-child(2) {\\n        font-size: 16px;\\n        transform: translateX(25%) translateY(-100%); }\\n      .prices__item-column div p:nth-child(3) {\\n        font-size: 17px;\\n        transform: translateX(0%) translateY(100%); }\\n  .prices__item-column ul {\\n    padding: 40px 0 20px 0; }\\n    .prices__item-column ul li {\\n      font-size: 22px;\\n      color: #8b8b8b;\\n      line-height: 45px;\\n      text-align: center; }\\n      .prices__item-column ul li:nth-child(2n+1) {\\n        background-color: #e4e4e4; }\\n      .prices__item-column ul li:nth-child(2n) {\\n        background-color: #f1f1f1; }\\n  .prices__item-column a {\\n    font-size: 17px;\\n    text-decoration: none;\\n    text-transform: uppercase;\\n    color: #ffffff;\\n    width: 122px;\\n    height: 34px;\\n    border-radius: 10px;\\n    background-color: #24BA9F;\\n    padding: 7px 0 0 28px;\\n    align-self: center;\\n    margin: auto 0 20px 0; }\\n  .prices__item-column:hover {\\n    border: 2px solid #24BA9F;\\n    background-color: #24BA9F; }\\n    .prices__item-column:hover .prices__item-circle {\\n      border: 14px solid #24BA9F;\\n      background-color: #ffffff;\\n      box-shadow: 0 0 0 1px #24BA9F; }\\n    .prices__item-column:hover h3 {\\n      color: #ffffff; }\\n    .prices__item-column:hover div {\\n      background-color: #ffffff;\\n      border: 1px solid #aaaaaa; }\\n      .prices__item-column:hover div p {\\n        color: #24BA9F; }\\n    .prices__item-column:hover ul li {\\n      color: #8b8b8b; }\\n      .prices__item-column:hover ul li:nth-child(2n+1) {\\n        background-color: #f1f1f1; }\\n      .prices__item-column:hover ul li:nth-child(2n) {\\n        background-color: #e4e4e4; }\\n    .prices__item-column:hover a {\\n      color: #24BA9F;\\n      background-color: #ffffff; }\\n\\n/*--------------------------------------------------------------------------------*/\\n/*                                                                                */\\n/* C H E C K B O X                                                                */\\n/*                                                                                */\\n/*--------------------------------------------------------------------------------*/\\n.application {\\n  background-color: #f9f9f9;\\n  padding: 30px 0; }\\n\\n.application h3 {\\n  color: #575757;\\n  font-size: 18px; }\\n\\n.application header.align_right {\\n  text-align: right; }\\n\\n.inline {\\n  display: inline-block;\\n  width: 300px;\\n  padding: 14px;\\n  vertical-align: top; }\\n\\n.form {\\n  margin-top: 50px; }\\n\\n.drop_down_list {\\n  border: 1px solid #8de0d2;\\n  width: 280px;\\n  height: 38px;\\n  background-color: white;\\n  margin-top: 22px;\\n  padding: 8px 12px;\\n  position: relative; }\\n\\n.list_label {\\n  font-size: 30px;\\n  color: #e2e2e2;\\n  font-family: 'ralewaylight', Arial, Tahoma, sans-serif; }\\n\\n.checkbox {\\n  position: relative;\\n  padding: 30px 30px 30px 0; }\\n\\n.checkbox input {\\n  display: block;\\n  opacity: 0;\\n  height: 48px;\\n  position: absolute;\\n  width: 48px;\\n  cursor: pointer; }\\n\\n.checkbox label {\\n  display: block;\\n  padding-left: 65px;\\n  position: relative;\\n  font-size: 28px;\\n  color: #cecece;\\n  line-height: 120%;\\n  padding-top: 10px;\\n  cursor: pointer; }\\n\\n.checkbox label::before, .checkbox label::after {\\n  border: 1px solid #27c7ab;\\n  content: \\\"\\\";\\n  display: block;\\n  left: 0;\\n  height: 48px;\\n  position: absolute;\\n  width: 48px;\\n  top: 0; }\\n\\n.checkbox label::after {\\n  background: url(\\\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20preserveAspectRatio%3D%22xMidYMid%22%20width%3D%2233.875%22%20height%3D%2233%22%20viewBox%3D%220%200%2033.875%2033%22%3E%0A%20%20%3Cpath%20d%3D%22M9.470%2C15.209%20L14.061%2C24.104%20C14.061%2C24.104%2021.522%2C6.026%2033.287%2C-0.000%20C33.000%2C4.304%2031.852%2C8.035%2033.861%2C12.626%20C28.696%2C13.774%2018.078%2C26.687%2014.635%2C33.000%20C9.756%2C26.974%204.017%2C22.382%20-0.000%2C20.948%20L9.470%2C15.209%20Z%22%20fill%3D%22%2327c7ab%22/%3E%0A%3C/svg%3E%0A\\\") no-repeat center;\\n  border: 0;\\n  display: none; }\\n\\n.checkbox input:checked + label::after {\\n  display: block; }\\n\\n.active {\\n  background: url(\" + ___CSS_LOADER_URL___7___ + \");\\n  width: 48px;\\n  height: 40px; }\\n\\n.inline_text {\\n  display: inline-block;\\n  width: 228px;\\n  vertical-align: top;\\n  margin-top: 30px;\\n  margin-left: 15px;\\n  color: #aeaeae; }\\n\\n.image_part img {\\n  margin-top: 110px;\\n  margin-left: 38px; }\\n\\n.application .green_bell {\\n  background-color: #24baa0;\\n  width: 200px;\\n  height: 6px;\\n  display: inline-block;\\n  margin: 5px 0 5px 0; }\\n\\n.summary_panel {\\n  background-color: white;\\n  width: 100%;\\n  height: 195px;\\n  padding: 10px;\\n  margin-top: 50px; }\\n\\n.application .green_button {\\n  background-color: #27c7ab;\\n  color: white;\\n  text-align: center;\\n  text-transform: uppercase;\\n  width: 200px;\\n  padding: 10px 30px;\\n  font-size: 24px;\\n  display: inline-block;\\n  font-family: 'ralewaymedium', Arial, Tahoma, sans-serif;\\n  margin-top: 20px;\\n  margin-left: 29px;\\n  border-radius: 8px;\\n  text-decoration: none; }\\n\\n.panel_left {\\n  display: inline-block;\\n  width: 185px;\\n  vertical-align: top;\\n  padding-bottom: 10px;\\n  border-bottom: 1px solid #e7e7e7;\\n  height: 135px; }\\n\\n.panel_right {\\n  display: inline-block;\\n  width: 100px;\\n  border-left: 1px solid #e7e7e7;\\n  text-align: right;\\n  vertical-align: top;\\n  padding-bottom: 10px;\\n  border-bottom: 1px solid #e7e7e7;\\n  height: 135px; }\\n\\n.panel_left h4, .panel_right h4 {\\n  color: #24baa0;\\n  font-size: 23px; }\\n\\n.panel_left span {\\n  margin-top: 10px;\\n  font-size: 22px;\\n  color: #5b5a5a;\\n  display: block; }\\n\\n.panel_right span {\\n  display: block;\\n  font-size: 22px;\\n  color: #24baa0;\\n  margin-top: 10px; }\\n\\n.sum_label {\\n  display: inline-block;\\n  width: 185px;\\n  margin-top: 10px;\\n  font-size: 22px;\\n  color: #5b5a5a; }\\n\\n.sum {\\n  display: inline-block;\\n  width: 100px;\\n  text-align: right;\\n  margin-top: 10px;\\n  font-size: 22px;\\n  color: #24baa0; }\\n\\n.list_arrow {\\n  width: 0;\\n  height: 0;\\n  border-left: 15px solid transparent;\\n  border-right: 15px solid transparent;\\n  border-top: 15px solid #24baa0;\\n  display: block;\\n  position: absolute;\\n  right: 14px;\\n  top: 20px;\\n  cursor: pointer; }\\n\\n.list_panel {\\n  background-color: white;\\n  border: 1px solid #ccc;\\n  width: 288px;\\n  padding-left: 15px;\\n  padding-bottom: 10px;\\n  list-style: none;\\n  margin: 0;\\n  left: 0px;\\n  z-index: 2;\\n  position: absolute;\\n  top: 54px;\\n  display: none; }\\n\\n.list_panel li {\\n  margin-top: 10px;\\n  cursor: pointer;\\n  color: #585858; }\\n\\n.title {\\n  height: 30px; }\\n\\n/*--------------------------------------------------------------------------------*/\\n/*                                                                                */\\n/* C O N T A C T   S E C T I O N                                                  */\\n/*                                                                                */\\n/*--------------------------------------------------------------------------------*/\\n.contact {\\n  padding: 25px 0 70px 0;\\n  background-color: #ffffff; }\\n  .contact .container:first-child {\\n    padding: 0 0 23px 0; }\\n  .contact p {\\n    font-family: \\\"raleway\\\", sans-serif;\\n    font-weight: normal;\\n    font-size: 23px;\\n    letter-spacing: -0.03em; }\\n  .contact .checkbox * {\\n    transform: translateX(-19px) translateY(7px); }\\n  .contact .checkbox label {\\n    font-family: \\\"raleway\\\", sans-serif;\\n    font-weight: normal;\\n    font-size: 20px;\\n    letter-spacing: -0.03em;\\n    padding-top: 0; }\\n\\n.contact__title-underline {\\n  width: 320px;\\n  height: 7px;\\n  background-color: #24BA9F;\\n  position: relative;\\n  bottom: -4px; }\\n\\n.contact .container:last-child .contact__item {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between; }\\n\\n.contact .container:first-child div {\\n  transform: translateX(2px); }\\n\\n.contact .container .contact__column a {\\n  font-family: \\\"raleway\\\", sans-serif;\\n  font-weight: 800;\\n  font-size: 32px;\\n  text-decoration: none;\\n  text-transform: uppercase;\\n  color: #ffffff;\\n  border-radius: 10px;\\n  background-color: #24BA9F;\\n  padding: 17px 113px;\\n  align-self: center;\\n  position: absolute;\\n  margin: auto 0 20px 0;\\n  transform: translateY(14px) translateX(-21px); }\\n\\n.contact .container .contact__column:first-child {\\n  width: 61%; }\\n\\n.contact .container .contact__column:last-child {\\n  width: 37%;\\n  transform: translateX(55px); }\\n  .contact .container .contact__column:last-child .contact__img {\\n    height: 205px;\\n    background-image: url(\" + ___CSS_LOADER_URL___4___ + \");\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    margin: 0 auto; }\\n\\n.action p input {\\n  border: 1px solid #24BA9F;\\n  margin: 27px 0 0 0;\\n  width: 100%;\\n  font-family: \\\"raleway\\\", sans-serif;\\n  font-weight: normal;\\n  font-size: 34px;\\n  letter-spacing: -0.03em;\\n  text-indent: 0.5em;\\n  line-height: 62px; }\\n\\n.action p textarea {\\n  border: 1px solid #24BA9F;\\n  margin: 27px 0 0 0;\\n  width: 100%;\\n  height: 185px;\\n  font-family: \\\"raleway\\\", sans-serif;\\n  font-weight: normal;\\n  font-size: 34px;\\n  letter-spacing: -0.03em;\\n  text-indent: 0.5em;\\n  line-height: 62px;\\n  resize: none; }\\n\\n/*--------------------------------------------------------------------------------*/\\n/*                                                                                */\\n/*  F O O T E R   S C S S                                                         */\\n/*                                                                                */\\n/*--------------------------------------------------------------------------------*/\\nfooter {\\n  padding: 5px 0;\\n  margin-bottom: 100px; }\\n  footer .container {\\n    align-items: flex-end; }\\n    footer .container div:nth-child(1) {\\n      width: 65%; }\\n    footer .container div:nth-child(2) {\\n      flex: 1; }\\n    footer .container div:nth-child(3) {\\n      flex: 1;\\n      display: flex;\\n      justify-content: flex-end; }\\n  footer p {\\n    color: #aaaaaa;\\n    font-weight: 500;\\n    letter-spacing: 0.025em;\\n    font-size: 17px; }\\n  footer p.logo {\\n    font-size: 20px; }\\n    footer p.logo span {\\n      font-weight: 800; }\\n\\n.footer__social {\\n  padding: 0 10px;\\n  display: flex; }\\n  .footer__social li {\\n    height: 35px;\\n    width: 35px;\\n    background-size: contain;\\n    margin: 0 auto; }\\n    .footer__social li:nth-child(1) {\\n      background-image: url(\" + ___CSS_LOADER_URL___8___ + \"); }\\n    .footer__social li:nth-child(2) {\\n      background-image: url(\" + ___CSS_LOADER_URL___9___ + \"); }\\n    .footer__social li:nth-child(3) {\\n      background-image: url(\" + ___CSS_LOADER_URL___10___ + \"); }\\n    .footer__social li:nth-child(4) {\\n      background-image: url(\" + ___CSS_LOADER_URL___11___ + \"); }\\n    .footer__social li:hover {\\n      background-repeat: no-repeat;\\n      cursor: pointer;\\n      border: 2px solid transparent; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./scss/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./js/app.js ./scss/main.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app.js */\"./js/app.js\");\nmodule.exports = __webpack_require__(/*! ./scss/main.scss */\"./scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./js/app.js_./scss/main.scss?");

/***/ })

/******/ });
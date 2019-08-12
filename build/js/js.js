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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  var min = $('.button__minus');\n  var max = $('.button__plus');\n  var counterPlace = $('.counter-place');\n  var counter = 0;\n  max.on('click', function (e) {\n    var target = $(e.target);\n    var inputValue = +target.prev().attr('value');\n    inputValue += 1;\n    target.prev().attr('value', inputValue);\n\n    if (inputValue) {\n      counter++;\n      counterPlace.text(counter);\n    }\n\n    ;\n  });\n  min.on('click', function (e) {\n    var target = $(e.target);\n    var inputValue = +target.next().attr('value');\n    inputValue -= 1;\n    if (inputValue < 0) inputValue = 0;\n    target.next().attr('value', inputValue);\n\n    if (inputValue) {\n      counter--;\n      counterPlace.text(counter);\n    } else if (counter == 0 && inputValue == 0) {} else {\n      counter--;\n      counterPlace.text(counter);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG52YXIgbWluID0gJCgnLmJ1dHRvbl9fbWludXMnKTtcclxudmFyIG1heCA9ICQoJy5idXR0b25fX3BsdXMnKTtcclxuXHRcclxudmFyIGNvdW50ZXJQbGFjZSA9ICQoJy5jb3VudGVyLXBsYWNlJyk7XHJcbnZhciBjb3VudGVyID0gMDtcclxuXHJcbm1heC5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHR2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcblx0dmFyIGlucHV0VmFsdWUgPSArdGFyZ2V0LnByZXYoKS5hdHRyKCd2YWx1ZScpO1x0XHJcblxyXG5cdGlucHV0VmFsdWUgKz0gMTtcdFxyXG5cdHRhcmdldC5wcmV2KCkuYXR0cigndmFsdWUnLCBpbnB1dFZhbHVlKTtcclxuXHRpZihpbnB1dFZhbHVlKXtcclxuXHRcdGNvdW50ZXIrKztcclxuXHRcdGNvdW50ZXJQbGFjZS50ZXh0KGNvdW50ZXIpO1xyXG5cdH07XHJcblx0XHJcbn0pO1xyXG5cclxubWluLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuXHR2YXIgaW5wdXRWYWx1ZSA9ICt0YXJnZXQubmV4dCgpLmF0dHIoJ3ZhbHVlJyk7XHRcclxuXHRpbnB1dFZhbHVlIC09IDE7XHJcblx0aWYoaW5wdXRWYWx1ZSA8IDApIGlucHV0VmFsdWUgPSAwO1xyXG5cdHRhcmdldC5uZXh0KCkuYXR0cigndmFsdWUnLCBpbnB1dFZhbHVlKTtcclxuXHRpZihpbnB1dFZhbHVlKXtcclxuXHRcdFxyXG5cdFx0Y291bnRlci0tO1xyXG5cdFx0Y291bnRlclBsYWNlLnRleHQoY291bnRlcik7XHJcblx0fWVsc2UgaWYoY291bnRlciA9PSAwICYmIGlucHV0VmFsdWUgPT0gMCl7XHJcblx0XHRcdFxyXG5cdH1lbHNle1xyXG5cdFx0XHRjb3VudGVyIC0tO1xyXG5cdFx0XHRjb3VudGVyUGxhY2UudGV4dChjb3VudGVyKTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0XHJcblx0XHJcbn0pO1xyXG5cclxuXHJcblx0XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTsiXSwibWFwcGluZ3MiOiJBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFJQTtBQVdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });
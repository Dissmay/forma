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

eval("$(function () {\n  var btns = $('.button');\n  var counterPlace = $('.counter-place');\n  var quantityPlace = $('.counter-place__quantity');\n\n  function computeTotal() {\n    var totalCounter = 0;\n    var totalQuantity = 0;\n\n    for (var i = 0; i < rows.length; i++) {\n      var current = $(rows[i]);\n      var price = parseFloat(current.find('.form__money').text());\n      var count = parseFloat(current.find('.input').attr('value'));\n      totalCounter += price * count;\n      totalQuantity += count;\n    }\n\n    counterPlace.text(totalCounter);\n    quantityPlace.text(totalQuantity);\n  }\n\n  computeTotal();\n  btns.on('click', function (e) {\n    var target = $(e.target);\n    var typeOfButton = target.hasClass('button__plus') ? '+' : '-';\n    var input = target.parents('.form__size').find('.input');\n    var inputValue = +input.attr('value');\n\n    if (typeOfButton === '+') {\n      inputValue += 1;\n    } else {\n      inputValue -= 1;\n      inputValue = inputValue < 0 ? 0 : inputValue;\n    }\n\n    input.attr('value', inputValue);\n    computeTotal();\n  });\n  $.ajax({\n    type: \"POST\",\n    url: \"http://1512526.dissmay.web.hosting-test.net/decorazz/func.php\",\n    data: JSON.stringify($('.form').serializeArray()),\n    contentType: \"application/json; charset=utf-8\",\n    dataType: \"json\",\n    success: function success(response) {\n      console.log(response);\n    },\n    error: function error(errMsg) {\n      console.log(errMsg);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxudmFyIGJ0bnMgPSAkKCcuYnV0dG9uJyk7XHJcblxyXG4gXHJcblxyXG52YXIgY291bnRlclBsYWNlID0gJCgnLmNvdW50ZXItcGxhY2UnKTtcclxudmFyIHF1YW50aXR5UGxhY2UgPSAkKCcuY291bnRlci1wbGFjZV9fcXVhbnRpdHknKTtcclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVUb3RhbCgpe1xyXG5cdHZhciB0b3RhbENvdW50ZXIgPSAwO1xyXG5cdHZhciB0b3RhbFF1YW50aXR5ID0gMDtcclxuXHRmb3IoIHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKysgKXtcclxuXHRcdHZhciBjdXJyZW50ID0gJChyb3dzW2ldKTtcclxuXHRcdHZhciBwcmljZSA9IHBhcnNlRmxvYXQoIGN1cnJlbnQuZmluZCgnLmZvcm1fX21vbmV5JykudGV4dCgpICk7XHJcblx0XHR2YXIgY291bnQgPSBwYXJzZUZsb2F0KCBjdXJyZW50LmZpbmQoJy5pbnB1dCcpLmF0dHIoJ3ZhbHVlJykgKTtcclxuXHRcdHRvdGFsQ291bnRlciArPSBwcmljZSAqIGNvdW50O1xyXG5cdFx0dG90YWxRdWFudGl0eSArPSBjb3VudDtcclxuXHR9XHJcblxyXG5cdGNvdW50ZXJQbGFjZS50ZXh0KCB0b3RhbENvdW50ZXIgKTtcclxuXHRxdWFudGl0eVBsYWNlLnRleHQoIHRvdGFsUXVhbnRpdHkgKTtcclxufVxyXG5cclxuY29tcHV0ZVRvdGFsKCk7XHJcblxyXG5idG5zLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdHZhciB0YXJnZXQgPSAkKCBlLnRhcmdldCApO1xyXG5cdHZhciB0eXBlT2ZCdXR0b24gPSAoIHRhcmdldC5oYXNDbGFzcygnYnV0dG9uX19wbHVzJykgKSA/ICcrJyA6ICctJyA7XHJcblxyXG5cdHZhciBpbnB1dCA9IHRhcmdldC5wYXJlbnRzKCcuZm9ybV9fc2l6ZScpLmZpbmQoJy5pbnB1dCcpO1xyXG5cdHZhciBpbnB1dFZhbHVlID0gK2lucHV0LmF0dHIoJ3ZhbHVlJyk7XHJcblx0aWYoIHR5cGVPZkJ1dHRvbiA9PT0gJysnICl7XHJcblx0XHRpbnB1dFZhbHVlICs9IDE7XHJcblx0fSBlbHNlIHtcclxuXHRcdGlucHV0VmFsdWUgLT0gMTtcclxuXHRcdGlucHV0VmFsdWUgPSAoIGlucHV0VmFsdWUgPCAwICkgPyAwIDogaW5wdXRWYWx1ZTtcclxuXHR9XHJcblx0aW5wdXQuYXR0cigndmFsdWUnLCBpbnB1dFZhbHVlKTtcclxuXHJcblx0Y29tcHV0ZVRvdGFsKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblx0XHJcblxyXG5cclxuJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBcImh0dHA6Ly8xNTEyNTI2LmRpc3NtYXkud2ViLmhvc3RpbmctdGVzdC5uZXQvZGVjb3JhenovZnVuYy5waHBcIixcclxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KCAkKCcuZm9ybScpLnNlcmlhbGl6ZUFycmF5KCkgKSxcclxuICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtjb25zb2xlLmxvZyhyZXNwb25zZSk7fSxcclxuICAgIGVycm9yOiBmdW5jdGlvbihlcnJNc2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJNc2cpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });
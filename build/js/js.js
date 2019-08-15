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

eval("$(function () {\n  var btns = $('.pressButton');\n  var rows = $('.form__size');\n  var counterPlace = $('.counter-place');\n  var quantityPlace = $('.counter-place__quantity');\n\n  function computeTotal() {\n    var totalCounter = 0;\n    var totalQuantity = 0;\n\n    for (var i = 0; i < rows.length; i++) {\n      var current = $(rows[i]);\n      var price = parseFloat(current.find('.form__money').text());\n      var count = parseFloat(current.find('.inputPole').attr('value'));\n      totalCounter += price * count;\n      totalQuantity += count;\n    }\n\n    counterPlace.text(totalCounter);\n    quantityPlace.text(totalQuantity);\n  }\n\n  computeTotal();\n  btns.on('click', function (e) {\n    var target = $(e.target);\n    var typeOfButton = target.hasClass('pressButton__plus') ? '+' : '-';\n    var input = target.parents('.form__size').find('.inputPole');\n    var inputValue = +input.attr('value');\n\n    if (typeOfButton === '+') {\n      inputValue += 1;\n    } else {\n      inputValue -= 1;\n      inputValue = inputValue < 0 ? 0 : inputValue;\n    }\n\n    input.attr('value', inputValue);\n    computeTotal();\n  });\n  $.ajax({\n    type: \"POST\",\n    url: \"http://1512526.dissmay.web.hosting-test.net/decorazz/func.php\",\n    data: JSON.stringify($('.form').serializeArray()),\n    contentType: \"application/json; charset=utf-8\",\n    dataType: \"json\",\n    success: function success(response) {\n      console.log(response);\n    },\n    error: function error(errMsg) {\n      console.log(errMsg);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxudmFyIGJ0bnMgPSAkKCcucHJlc3NCdXR0b24nKTtcclxuXHJcbnZhciByb3dzID0gJCgnLmZvcm1fX3NpemUnKTtcclxuXHJcbnZhciBjb3VudGVyUGxhY2UgPSAkKCcuY291bnRlci1wbGFjZScpO1xyXG52YXIgcXVhbnRpdHlQbGFjZSA9ICQoJy5jb3VudGVyLXBsYWNlX19xdWFudGl0eScpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb21wdXRlVG90YWwoKXtcclxuXHR2YXIgdG90YWxDb3VudGVyID0gMDtcclxuXHR2YXIgdG90YWxRdWFudGl0eSA9IDA7XHJcblx0Zm9yKCB2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrICl7XHJcblx0XHR2YXIgY3VycmVudCA9ICQocm93c1tpXSk7XHJcblx0XHR2YXIgcHJpY2UgPSBwYXJzZUZsb2F0KCBjdXJyZW50LmZpbmQoJy5mb3JtX19tb25leScpLnRleHQoKSApO1xyXG5cdFx0dmFyIGNvdW50ID0gcGFyc2VGbG9hdCggY3VycmVudC5maW5kKCcuaW5wdXRQb2xlJykuYXR0cigndmFsdWUnKSApO1xyXG5cdFx0dG90YWxDb3VudGVyICs9IHByaWNlICogY291bnQ7XHJcblx0XHR0b3RhbFF1YW50aXR5ICs9IGNvdW50O1xyXG5cdH1cclxuXHJcblx0Y291bnRlclBsYWNlLnRleHQoIHRvdGFsQ291bnRlciApO1xyXG5cdHF1YW50aXR5UGxhY2UudGV4dCggdG90YWxRdWFudGl0eSApO1xyXG59XHJcblxyXG5jb21wdXRlVG90YWwoKTtcclxuXHJcbmJ0bnMub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0dmFyIHRhcmdldCA9ICQoIGUudGFyZ2V0ICk7XHJcblx0dmFyIHR5cGVPZkJ1dHRvbiA9ICggdGFyZ2V0Lmhhc0NsYXNzKCdwcmVzc0J1dHRvbl9fcGx1cycpICkgPyAnKycgOiAnLScgO1xyXG5cclxuXHR2YXIgaW5wdXQgPSB0YXJnZXQucGFyZW50cygnLmZvcm1fX3NpemUnKS5maW5kKCcuaW5wdXRQb2xlJyk7XHJcblx0dmFyIGlucHV0VmFsdWUgPSAraW5wdXQuYXR0cigndmFsdWUnKTtcclxuXHRpZiggdHlwZU9mQnV0dG9uID09PSAnKycgKXtcclxuXHRcdGlucHV0VmFsdWUgKz0gMTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0aW5wdXRWYWx1ZSAtPSAxO1xyXG5cdFx0aW5wdXRWYWx1ZSA9ICggaW5wdXRWYWx1ZSA8IDAgKSA/IDAgOiBpbnB1dFZhbHVlO1xyXG5cdH1cclxuXHRpbnB1dC5hdHRyKCd2YWx1ZScsIGlucHV0VmFsdWUpO1xyXG5cclxuXHRjb21wdXRlVG90YWwoKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHRcclxuXHJcblxyXG4kLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFwiaHR0cDovLzE1MTI1MjYuZGlzc21heS53ZWIuaG9zdGluZy10ZXN0Lm5ldC9kZWNvcmF6ei9mdW5jLnBocFwiLFxyXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoICQoJy5mb3JtJykuc2VyaWFsaXplQXJyYXkoKSApLFxyXG4gICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe2NvbnNvbGUubG9nKHJlc3BvbnNlKTt9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uKGVyck1zZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyck1zZyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFhQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });
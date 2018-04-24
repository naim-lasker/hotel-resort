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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_style_scss__ = __webpack_require__(/*! ../sass/style.scss */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sass_style_scss__);\n\r\n\r\n\r\n\r\nAOS.init();\r\n\r\n// Link self Page Animation Scroll\r\n$(document).ready(function () {\r\n    $(\"#back-top\").on('click', function (event) {\r\n        if (this.hash !== \"\") {\r\n            event.preventDefault();\r\n            var hash = this.hash;\r\n            $('html, body').animate({\r\n                scrollTop: $(hash).offset().top\r\n            }, 2500, function () {\r\n                window.location.hash = hash;\r\n            });\r\n        }\r\n    });\r\n});\r\n\r\n// Got to Top\r\n$(document).ready(function () {\r\n    // hide #back-top first\r\n    $(\"#back-top\").hide();\r\n    // fade in #back-top\r\n    $(function () {\r\n        $(window).scroll(function () {\r\n            if ($(this).scrollTop() > 100) {\r\n                $('#back-top').fadeIn();\r\n            } else {\r\n                $('#back-top').fadeOut();\r\n            }\r\n        });\r\n\r\n        // scroll body to 0px on click\r\n        $('#back-top a').click(function () {\r\n            $('body,html').animate({\r\n                scrollTop: 0\r\n            }, 1500);\r\n            return false;\r\n        });\r\n    });\r\n\r\n});\r\n\r\n\r\n// Date Pickers\r\n$('#homeFrom').datepicker(\r\n    {\r\n        autoclose: true\r\n    }\r\n);\r\n$('#homeTo').datepicker(\r\n    {\r\n        autoclose: true\r\n    }\r\n);\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzP2M0NWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgJy4uL3Nhc3Mvc3R5bGUuc2Nzcyc7XHJcblxyXG5BT1MuaW5pdCgpO1xyXG5cclxuLy8gTGluayBzZWxmIFBhZ2UgQW5pbWF0aW9uIFNjcm9sbFxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2JhY2stdG9wXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc2ggIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3BcclxuICAgICAgICAgICAgfSwgMjUwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLyBHb3QgdG8gVG9wXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGhpZGUgI2JhY2stdG9wIGZpcnN0XHJcbiAgICAkKFwiI2JhY2stdG9wXCIpLmhpZGUoKTtcclxuICAgIC8vIGZhZGUgaW4gI2JhY2stdG9wXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICQoJyNiYWNrLXRvcCcpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnI2JhY2stdG9wJykuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHNjcm9sbCBib2R5IHRvIDBweCBvbiBjbGlja1xyXG4gICAgICAgICQoJyNiYWNrLXRvcCBhJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG4vLyBEYXRlIFBpY2tlcnNcclxuJCgnI2hvbWVGcm9tJykuZGF0ZXBpY2tlcihcclxuICAgIHtcclxuICAgICAgICBhdXRvY2xvc2U6IHRydWVcclxuICAgIH1cclxuKTtcclxuJCgnI2hvbWVUbycpLmRhdGVwaWNrZXIoXHJcbiAgICB7XHJcbiAgICAgICAgYXV0b2Nsb3NlOiB0cnVlXHJcbiAgICB9XHJcbik7XHJcblxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/YzM4NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
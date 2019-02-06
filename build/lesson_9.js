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
/******/ 	return __webpack_require__(__webpack_require__.s = 355);
/******/ })
/************************************************************************/
/******/ ({

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(356);


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(357);

var buttons = document.querySelectorAll('.btn');

function btnToggler(btn, color) {
  var isActive = false;

  function toggleClass() {
    if (isActive === false) {
      btn.style.backgroundColor = color;
      isActive = true;
    } else {
      btn.style.backgroundColor = 'transparent';
      isActive = false;
    }
  }

  btn.onclick = toggleClass;
}

function generateColor() {
  var getRandValue = function getRandValue() {
    return Math.round(Math.random() * (0 - 255) + 255);
  };

  return 'rgb(' + getRandValue() + ', ' + getRandValue() + ', ' + getRandValue() + ')';
}

for (var i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  btnToggler(buttons[i], generateColor());
}

btnToggler(document.querySelector('.test'), generateColor());

var students = [{ name: 'Vasya', age: 18 }, { name: 'Petya', age: 16 }, { name: 'Alex', age: 5 }];

function averageAge(people) {
  var totalAge = 0;

  for (var _i = 0; _i < students.length; _i++) {
    totalAge = totalAge + people[_i].age;
  }
  return totalAge / people.length;
}

function maxAge(people) {
  var maxAge = 0;

  for (var _i2 = 0; _i2 < people.length; _i2++) {
    if (maxAge < people[_i2].age) {
      maxAge = people[_i2].age;
      name = people[_i2].name;
    }
  }
  return name;
}

var arr = [-1, 0, 1];

function isPossitive(arr) {
  var isPositive = true;
  for (var _i3 = 0; _i3 < arr.length; _i3++) {
    if (arr[_i3] < 0) {
      isPositive = false;
      break;
    }
  }return isPosititve;
}

console.log(averageAge(students));
console.log(maxAge(students));
console.log(isPositive([1, 0, 10, -20, 1]));

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
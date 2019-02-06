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
/******/ 	return __webpack_require__(__webpack_require__.s = 366);
/******/ })
/************************************************************************/
/******/ ({

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(367);


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(368);

var _trafficLighter = __webpack_require__(369);

var _taskList = __webpack_require__(371);

(0, _trafficLighter.trafficLighter)(document.querySelector('#firstLighter'), 500);
(0, _trafficLighter.trafficLighter)(document.querySelector('#secondLighter'));
(0, _trafficLighter.trafficLighter)(document.querySelector('#thirdLighter'), 750);

(0, _taskList.taskList)(document.querySelector('#taskList'));

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trafficLighter = trafficLighter;

__webpack_require__(370);

function trafficLighter(trafiicLighter) {
  var intervalCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

  var ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
  var LIGHTS = ['red', 'yellow', 'green', 'aqua'];
  var lamps = [];
  var currentActiveLampIndex = 0;
  var intervalId = void 0;

  render();

  function render() {
    lamps = LIGHTS.map(function (color) {
      var lamp = document.createElement('button');
      lamp.classList.add('traffic-lighter__lamp');
      lamp.classList.add('traffic-lighter__lamp_' + color);
      lamps.push(lamp);
      trafiicLighter.appendChild(lamp);
      return lamp;
    });
    trafiicLighter.classList.add('traffic-lighter');
  }

  function disable() {
    lamps[currentActiveLampIndex].classList.remove(ACTIVE_CLASS_NAME);
  }

  function enable(lamp) {
    lamp.classList.add(ACTIVE_CLASS_NAME);
    currentActiveLampIndex = lamps.indexOf(lamp);
  }

  var _loop = function _loop(lamp) {
    lamp.onclick = function () {
      disable();
      enable(lamp);
    };
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = lamps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var lamp = _step.value;

      _loop(lamp);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  function increaseIndex() {
    if (currentActiveLampIndex + 1 >= lamps.length) {
      currentActiveLampIndex = 0;
    } else {
      currentActiveLampIndex++;
    }
  }

  function intervalStart() {
    intervalId = setInterval(function () {
      disable();
      increaseIndex();
      enable(lamps[currentActiveLampIndex]);
    }, intervalCount);
  }
  intervalStart();

  trafiicLighter.onmouseenter = function () {
    console.log('STOPED');
    clearInterval(intervalId);
  };
  trafiicLighter.onmouseleave = function () {
    console.log('LEAVED');
    intervalStart();
  };
}

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.taskList = taskList;
function taskList(rootElement) {
  var URL = 'https://evening-dawn-11092.herokuapp.com/list';
  var tasks = [];
  var taskElements = [];
  var ul = void 0;
  var form = void 0;
  var input = void 0;
  var btnSubmit = void 0;

  function render() {
    form = document.createElement('form');
    input = document.createElement('input');
    btnSubmit = document.createElement('button');
    ul = document.createElement('ul');

    btnSubmit.textContent = 'Add';
    form.onsubmit = function (event) {
      event.preventDefault();
      var data = {
        title: input.value
      };

      var xhr = new XMLHttpRequest();
      xhr.open('POST', URL);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.response);
            var responseData = JSON.parse(xhr.response);
            var li = document.createElement('li');
            li.textContent = responseData.title;
            ul.appendChild(li);
          } else {
            console.error(xhr.response);
          }
        }
      };
    };

    form.appendChild(input);
    form.appendChild(btnSubmit);
    rootElement.appendChild(form);
    rootElement.appendChild(ul);
  }

  function renderList() {
    taskElements = tasks.map(function (task) {
      var li = document.createElement('li');
      li.textContent = task.title;
      ul.appendChild(li);
      return li;
    });
  }

  function fetchList() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          tasks = JSON.parse(xhr.response);
          renderList();
        } else {
          console.error(xhr.response);
        }
      }
    };
  }

  render();
  fetchList();
}

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 378);
/******/ })
/************************************************************************/
/******/ ({

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(379);


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _signIn = __webpack_require__(380);

var form1 = new _signIn.SignInForm(document.querySelector('.main'));

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignInForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ajax = __webpack_require__(381);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignInForm = exports.SignInForm = function () {
  function SignInForm(targetElement) {
    _classCallCheck(this, SignInForm);

    this.URL = "https://rest-node-course-api.herokuapp.com/auth/signup";
    this.main = targetElement;
    this.emailInput = document.createElement('input');
    this.passwordInput = document.createElement('input');
    this.nameInput = document.createElement('input');
    this.submit = document.createElement('button');
    this.createLogInForm();

    this.submit.addEventListener("click", this.putItem.bind(this));
  }

  _createClass(SignInForm, [{
    key: 'createLogInForm',
    value: function createLogInForm() {
      this.emailInput.classList.add('email-input', 'main_item');
      this.passwordInput.classList.add('password-input', 'main_item');
      this.nameInput.classList.add('name-input', 'main_item');
      this.submit.classList.add('submit', 'main_item');

      this.emailInput.placeholder = "Email";
      this.passwordInput.placeholder = "Password";
      this.nameInput.placeholder = "Name";

      this.emailInput.type = "email";
      this.passwordInput.type = "password";
      this.nameInput.type = "name";

      this.submit.innerHTML = "Submit";

      this.main.appendChild(this.emailInput);
      this.main.appendChild(this.passwordInput);
      this.main.appendChild(this.nameInput);
      this.main.appendChild(this.submit);
    }
  }, {
    key: 'onSuccessSignUp',
    value: function onSuccessSignUp() {
      console.log('asdasd');
    }
  }, {
    key: 'putItem',
    value: function putItem() {
      console.log(this);
      var ajaxObj = new _ajax.Ajax('https://rest-node-course-api.herokuapp.com/auth/signup');
      var putItem = {
        email: this.emailInput.value,
        password: this.passwordInput.value,
        name: this.nameInput.value
      };

      ajaxObj.put(putItem, this.onSuccessSignUp);

      this.resetFields();
    }
  }, {
    key: 'resetFields',
    value: function resetFields() {
      this.emailInput.value = "";
      this.passwordInput.value = "";
      this.nameInput.value = "";
    }
  }]);

  return SignInForm;
}();

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ajax = exports.Ajax = function () {
  function Ajax(url) {
    _classCallCheck(this, Ajax);

    this.url = url;
  }

  _createClass(Ajax, [{
    key: 'put',
    value: function put(data, successCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', this.url);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.send(JSON.stringify(data));
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 || xhr.status === 201) {
            successCallback(xhr.response);
          } else {
            console.error(xhr.response);
            alert('Error!');
          }
        }
      };
    }
  }]);

  return Ajax;
}();

/***/ })

/******/ });
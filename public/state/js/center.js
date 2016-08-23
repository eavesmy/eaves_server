/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _eaves = __webpack_require__(1);

	var _eaves2 = _interopRequireDefault(_eaves);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.onload = function () {};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	/*var eaves = {};

	eaves.assign = function(a, b, filter) {
	    for (var k in b) {
	        if (filter && !a[k]) continue;
	        a[k] = b[k];
	    }
	    return a;
	}

	eaves.removeAnimate = function(dom) {
	    var style = dom.getAttribute('style');
	    console.log(1, style, dom.getAttribute('style'), dom);

	    console.log(2, style, dom.getAttribute('style'), dom);
	}

	eaves.createHomeBlock = function(arr) {
	    arr = [{
	        img: '',
	        text: 'Test block 1'
	    }, {
	        img: '',
	        text: 'Test block 2'
	    }, {
	        img: '',
	        text: 'Test block 3'
	    }, {
	        img: '',
	        text: 'Test block 4'
	    }, {
	        img: '',
	        text: 'Test block 5'
	    }, {
	        img: '',
	        text: 'Test block 6'
	    }, {
	        img: '',
	        text: 'Test block 7'
	    }]

	    var i = 0,
	        l = arr.length;
	    var navList = document.getElementById('nav-list');
	    navList.style.height = arr.length * 150 + 'px';

	    for (i; i < l; i++) {
	        var dom = document.createElement('div');

	        dom.setAttribute('class', 'block');
	        dom.innerText = arr[i].text;

	        navList.appendChild(dom);
	    } // append block


	    //console.log(maxWidth)
	}

	eaves.animation = function(dom, action, callback) {
	    if (typeof dom !== 'object') {
	        var _type = dom.substr(0, 1);
	        var _name = dom.substr(1, dom.length);
	        _type === '#' ? dom = document.getElementById(_name) : dom = document.getElementsByClassName(_name);
	    }

	    Velocity(dom, action)
	    callback && callback(dom);
	}

	eaves.eventHomeBlockScroll = function() {
	    var area = document.getElementById('nav-block');
	    var _s, _e, interval;

	    var mousedownEvent = function(e) {
	        e.preventDefault();
	        _s = e.y;
	    }

	    var mouseupEvent = function(e) {
	        e.preventDefault();
	        _e = e.y;

	        interval = _e - _s;

	        var dom = document.getElementById('nav-list');
	        var h = dom.style.top;
	        var height = dom.style.height;
	        height = parseInt(height.substr(0, height.length - 2), 10) - 150;

	        !h ? h = 0 : h = parseInt(h.substr(0, h.length - 2), 10);

	        console.log(h, height);

	        if (interval < -150 && h > -height) eaves.animation(dom, {
	            top: h - 150
	        }, eaves.listenHomeBlock);
	        if (interval >= 150 && h < 0) eaves.animation(dom, {
	            top: h + 150
	        }, eaves.listenHomeBlock);
	    }


	    area.addEventListener('mousedown', mousedownEvent);
	    document.addEventListener('mouseup', mouseupEvent);
	    eaves.listenHomeBlock();
	}

	eaves.listenHomeBlock = function(dom) {
	    var center; // get the absolute position of nav-lock,then check whitch block in list is the same;
	}

	eaves.init = function() {
	    eaves.createHomeBlock();
	    eaves.eventHomeBlockScroll();
	}

	/*window.onload = function() {
	    eaves.init();
	}
	*/

	var Eaves = {
	    on: Document.prototype.addEventListener
	};

	var $ = module.exports = function (str) {
	    var t = str.substr(0, 1),
	        name = str.substr(1, str.length);
	    var dom;
	    t === '#' ? dom = document.getElementById(name) : dom = document.getElementsByClassName(name);

	    Object.prototype.on = Eaves.on;

	    return dom;
	};

/***/ }
/******/ ]);
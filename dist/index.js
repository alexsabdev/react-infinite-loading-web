module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar DISTANCE = 10;\nvar STATUSES;\n(function (STATUSES) {\n    STATUSES[STATUSES[\"READY\"] = 0] = \"READY\";\n    STATUSES[STATUSES[\"LOADING\"] = 1] = \"LOADING\";\n    STATUSES[STATUSES[\"DONE\"] = 2] = \"DONE\";\n})(STATUSES || (STATUSES = {}));\n;\nvar EVENTS;\n(function (EVENTS) {\n    EVENTS[\"SCROLL\"] = \"scroll\";\n})(EVENTS || (EVENTS = {}));\nvar InfiniteLoading = /** @class */ (function (_super) {\n    __extends(InfiniteLoading, _super);\n    function InfiniteLoading(props) {\n        var _this = _super.call(this, props) || this;\n        _this.statusManager = {\n            loaded: function () { return _this.setStatus(STATUSES.READY); },\n            done: function () {\n                _this.setStatus(STATUSES.DONE);\n                _this.removeEvents();\n            },\n        };\n        _this.node = null;\n        _this.parent = null;\n        _this.distance = _this.props.distance || DISTANCE;\n        _this.state = {\n            status: STATUSES.READY,\n        };\n        _this.attemptLoad = _this.attemptLoad.bind(_this);\n        return _this;\n    }\n    InfiniteLoading.prototype.componentDidMount = function () {\n        this.parent = this.getParent();\n        this.addEvents();\n        this.attemptLoad();\n    };\n    InfiniteLoading.prototype.componentWillUnmount = function () {\n        this.removeEvents();\n    };\n    InfiniteLoading.prototype.getParent = function () {\n        var parent = this.node ? this.node.parentNode : null;\n        if (this.props.useWindow)\n            parent = window;\n        return parent;\n    };\n    InfiniteLoading.prototype.getDistance = function () {\n        if (!this.node || !this.parent)\n            return Infinity;\n        var nodeTop = this.node.getBoundingClientRect().top;\n        var parentBottom = this.parent === window\n            ? this.parent.innerHeight\n            : this.parent.getBoundingClientRect().bottom; // TODO\n        return nodeTop - parentBottom;\n    };\n    InfiniteLoading.prototype.setStatus = function (status) {\n        this.setState({ status: status });\n    };\n    InfiniteLoading.prototype.attemptLoad = function () {\n        if (this.state.status !== STATUSES.READY)\n            return;\n        if (this.getDistance() > this.distance)\n            return;\n        this.setStatus(STATUSES.LOADING);\n        this.props.load(this.statusManager);\n    };\n    InfiniteLoading.prototype.addEvents = function () {\n        if (!this.parent)\n            return;\n        this.parent.addEventListener(EVENTS.SCROLL, this.attemptLoad);\n    };\n    InfiniteLoading.prototype.removeEvents = function () {\n        if (!this.parent)\n            return;\n        this.parent.removeEventListener(EVENTS.SCROLL, this.attemptLoad);\n    };\n    InfiniteLoading.prototype.render = function () {\n        var _this = this;\n        return (React.createElement(\"div\", { ref: function (node) { _this.node = node; } }, this.state.status === STATUSES.LOADING && (React.createElement(\"div\", null, \"Loading...\"))));\n    };\n    return InfiniteLoading;\n}(React.Component));\nexports.default = InfiniteLoading;\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });
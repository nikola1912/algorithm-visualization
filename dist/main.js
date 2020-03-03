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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst displayController = (() => {\r\n\r\n    const drawBar = (height, value) => {\r\n        const newBar = document.createElement(\"div\");\r\n        newBar.classList.add(\"bar\");\r\n        newBar.style.height = `${height}%`;\r\n        newBar.textContent = value;\r\n        return newBar;\r\n    };  \r\n\r\n    const drawArray = (array) => {\r\n        const chart = document.getElementById(\"chart\");\r\n        chart.innerHTML = \"\";\r\n        const upperLimit = Math.max(...array);\r\n        array.forEach((element) => {\r\n            let height = 100 / (upperLimit / element);\r\n            chart.append(drawBar(height, element));\r\n        });\r\n    };\r\n\r\n    const switchPlaces = (chart, i, j) => {\r\n        let bars = chart.children;\r\n        bars[i].classList.remove(\"selected\");\r\n        bars[j].classList.remove(\"highlighted\");\r\n        bars[j].classList.add(\"selected\");\r\n        [bars[i].outerHTML, bars[j].outerHTML] = [bars[j].outerHTML, bars[i].outerHTML];\r\n    };\r\n\r\n    const displayPlay = () => {\r\n        document.getElementById(\"playIcon\").style.display = \"inline\";\r\n        document.getElementById(\"pauseIcon\").style.display = \"none\";\r\n    };\r\n\r\n    const displayPause = () => {\r\n        document.getElementById(\"playIcon\").style.display = \"none\";\r\n        document.getElementById(\"pauseIcon\").style.display = \"block\";\r\n    };\r\n\r\n    const buttonsOFF = () => {\r\n        document.getElementById(\"unsortButton\")      .disabled = true;\r\n        document.getElementById(\"lastStepButton\")    .disabled = true;\r\n        document.getElementById(\"nextStepButton\")    .disabled = true;\r\n        document.getElementById(\"completeSortButton\").disabled = true;\r\n    }\r\n\r\n    const buttonsON = () => {\r\n        document.getElementById(\"unsortButton\")      .disabled = false;\r\n        document.getElementById(\"lastStepButton\")    .disabled = false;\r\n        document.getElementById(\"nextStepButton\")    .disabled = false;\r\n        document.getElementById(\"completeSortButton\").disabled = false;\r\n    }\r\n\r\n    const toggleSort = () => {\r\n        document.getElementById(\"sortButton\").disabled = !document.getElementById(\"sortButton\").disabled;\r\n    }\r\n\r\n    return {\r\n        drawArray,\r\n        switchPlaces,\r\n        displayPlay,\r\n        displayPause,\r\n        buttonsON,\r\n        buttonsOFF,\r\n        toggleSort\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayController);\n\n//# sourceURL=webpack:///./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _testObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testObjects.js */ \"./src/testObjects.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _sortingController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortingController.js */ \"./src/sortingController.js\");\n\r\n\r\n\r\n\r\nconst testArray = _testObjects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].testArray.slice();\r\n_displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawArray(testArray);\r\nconsole.log(testArray);\r\n\r\ndocument.getElementById(\"speedSlider\").value = _sortingController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSpeed();\r\ndocument.getElementById(\"speedSlider\").max = _sortingController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getMaxSpeed();\r\n\r\n_sortingController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].applyEventListeners();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sortingAlgorithms.js":
/*!**********************************!*\
  !*** ./src/sortingAlgorithms.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _sortingController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortingController.js */ \"./src/sortingController.js\");\n\r\n\r\n\r\nconst removeHighlight = async (bar) => {\r\n    await new Promise(resolve => {\r\n        setTimeout(() => {\r\n            bar.classList.remove(\"highlighted\");\r\n            resolve();\r\n        }, _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSpeed());\r\n    });\r\n};\r\n\r\nconst switchPlaces = async (chart, i, j) => {\r\n    await new Promise(resolve => {\r\n        setTimeout(() => {\r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].switchPlaces(chart, i, j);\r\n            resolve();\r\n        }, _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSpeed());\r\n    });\r\n};\r\n\r\nconst handlePause = async (step) => {\r\n    step--;\r\n    await new Promise(resolve => {\r\n        setTimeout(() => {\r\n            resolve();\r\n        }, 0);\r\n    });\r\n    return step\r\n};\r\n\r\n/*----------------------------------------------------------------------------------------*/\r\n\r\nconst sortingAlgorithms = (() => {\r\n\r\n    const bubbleSort = (arrayOriginal) => {\r\n        let array = arrayOriginal.slice();\r\n        for (let i = 0; i < array.length; i++) {\r\n            for (let j = i + 1; j < array.length; j++) {\r\n                if (array[i] > array[j]) [array[i], array[j]] = [array[j], array[i]];\r\n            }\r\n        }\r\n        return array;\r\n    }\r\n\r\n    const bubbleSortVisualized = async (arrayOriginal) => {\r\n        let array = arrayOriginal.slice();\r\n        let chart = document.getElementById(\"chart\");\r\n        for (let i = 0; i < array.length; i++) {\r\n\r\n            let selectedBar = chart.children[i];\r\n            selectedBar.classList.add(\"selected\");\r\n\r\n            for (let j = i + 1; j < array.length; j++) {\r\n\r\n                let highlightedBar = chart.children[j];\r\n                highlightedBar.classList.add(\"highlighted\");\r\n                \r\n                if (_sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPauseState()) {\r\n                    if (_sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResetState() || _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCompleteSortState()) {\r\n                        highlightedBar.classList.remove(\"highlighted\");\r\n                        return;\r\n                    }\r\n                    j = await handlePause(j);\r\n                } else if (array[i] > array[j]) {\r\n                    [array[i], array[j]] = [array[j], array[i]];\r\n                    await switchPlaces(chart, i, j);\r\n                    selectedBar = chart.children[i];\r\n                } else {\r\n                    await removeHighlight(highlightedBar);\r\n                }\r\n            }\r\n            selectedBar.classList.remove(\"selected\");\r\n            selectedBar.classList.add(\"sorted\");\r\n        }\r\n        return array;\r\n    };\r\n\r\n    return {\r\n        bubbleSort,\r\n        bubbleSortVisualized\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sortingAlgorithms);\n\n//# sourceURL=webpack:///./src/sortingAlgorithms.js?");

/***/ }),

/***/ "./src/sortingController.js":
/*!**********************************!*\
  !*** ./src/sortingController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _testObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testObjects.js */ \"./src/testObjects.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _sortingAlgorithms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortingAlgorithms.js */ \"./src/sortingAlgorithms.js\");\n\r\n\r\n\r\n\r\nconst sortingController = (() => {\r\n\r\n    let sortingState = false;\r\n    let isSorted = false;\r\n    let pauseState = false;\r\n    let resetState = false;\r\n    let completeSortState = false;\r\n    let speed = 100;\r\n    let maxSpeed = 400;\r\n    const array = _testObjects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].testArray.slice();\r\n\r\n    const setSpeed = newSpeed => speed = newSpeed;\r\n    const getSpeed = () => speed;\r\n\r\n    const setMaxSpeed = newMaxSpeed => maxSpeed = newMaxSpeed;\r\n    const getMaxSpeed = () => maxSpeed;\r\n\r\n    const getPauseState = () => pauseState;\r\n    const getResetState = () => resetState;\r\n    const getCompleteSortState = () => completeSortState;\r\n    \r\n    const handleSort = async () => {\r\n        if (!sortingState && !isSorted) {\r\n            sortingState = true;\r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayPause();\r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].buttonsOFF();\r\n\r\n            let sortedArray = await _sortingAlgorithms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bubbleSortVisualized(array);\r\n            \r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayPlay();\r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].buttonsON();\r\n            if (!resetState) {\r\n                completeSortState = false;\r\n                sortingState = false;\r\n                pauseState = false;\r\n                isSorted = true;\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleSort();\r\n                console.log(sortedArray);\r\n            } else {\r\n                sortingState = false;\r\n                pauseState = false;\r\n                isSorted = false;\r\n                resetState = false;\r\n            }\r\n        } else if (sortingState) {\r\n            if (!pauseState) {\r\n                pauseState = true;\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayPlay();\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].buttonsON();\r\n            } else {\r\n                pauseState = false;\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayPause();\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].buttonsOFF();\r\n            }\r\n        }\r\n    };\r\n\r\n    const handleUnsort = () => {\r\n        if (isSorted) {\r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleSort();\r\n        } else if (pauseState) resetState = true;\r\n        _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawArray(array);\r\n        isSorted = false; \r\n    };\r\n\r\n    const handleLastStep = () => {\r\n        \r\n    };\r\n    \r\n    const handleNextStep = () => {\r\n        \r\n    };\r\n    \r\n    const handleCompleteSort = () => {\r\n        if (!isSorted) {\r\n            let sortedArray = _sortingAlgorithms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bubbleSort(array);\r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawArray(sortedArray);\r\n            if (!sortingState) {\r\n                isSorted = true; \r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleSort();\r\n                console.log(sortedArray);\r\n            } else {\r\n                completeSortState = true;\r\n            }\r\n        }\r\n    };\r\n\r\n    const handleSpeedChange = () => {\r\n        let newSpeed = document.getElementById(\"speedSlider\").value;\r\n        setSpeed(newSpeed);\r\n    };\r\n    \r\n    const applyEventListeners = () => {\r\n        document.getElementById(\"sortButton\")        .addEventListener(\"click\", handleSort),\r\n        document.getElementById(\"unsortButton\")      .addEventListener(\"click\", handleUnsort),\r\n        document.getElementById(\"lastStepButton\")    .addEventListener(\"click\", handleLastStep);\r\n        document.getElementById(\"nextStepButton\")    .addEventListener(\"click\", handleNextStep);\r\n        document.getElementById(\"completeSortButton\").addEventListener(\"click\", handleCompleteSort);\r\n        document.getElementById(\"speedSlider\")       .addEventListener(\"input\", handleSpeedChange);\r\n    };\r\n\r\n    return {\r\n        applyEventListeners,\r\n        getSpeed,\r\n        getMaxSpeed,\r\n        getPauseState,\r\n        getResetState,\r\n        getCompleteSortState\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sortingController);\n\n//# sourceURL=webpack:///./src/sortingController.js?");

/***/ }),

/***/ "./src/testObjects.js":
/*!****************************!*\
  !*** ./src/testObjects.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    testArray: [3, 1, 5, 2, 8, 6, 4, 7, 3, 1, 10, 5, 2, 8, 6, 4, 7, 3, 1, 5, 6, 4, 7, 10, 5, 2, 8, 6, 4],\r\n});\n\n//# sourceURL=webpack:///./src/testObjects.js?");

/***/ })

/******/ });
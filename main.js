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
eval("__webpack_require__.r(__webpack_exports__);\nconst displayController = (() => {\r\n\r\n    const drawBar = (height, value, isSorted) => {\r\n        const newBar = document.createElement(\"div\");\r\n        newBar.classList.add(\"bar\");\r\n        newBar.style.height = `${height}%`;\r\n        newBar.textContent = value;\r\n        if (isSorted) newBar.classList.add(\"sorted\");\r\n        return newBar;\r\n    };  \r\n\r\n    const drawArray = (array, isSorted) => {\r\n        const chart = document.getElementById(\"chart\");\r\n        chart.innerHTML = \"\";\r\n        const upperLimit = Math.max(...array);\r\n        array.forEach((element) => {\r\n            let height = 100 / (upperLimit / element);\r\n            chart.append(drawBar(height, element, isSorted));\r\n        });\r\n    };\r\n\r\n    const switchPlaces = (chart, i, j) => {\r\n        let bars = chart.children;\r\n        bars[i].classList.remove(\"selected\");\r\n        bars[j].classList.remove(\"highlighted\");\r\n        bars[j].classList.add(\"selected\");\r\n        [bars[i].outerHTML, bars[j].outerHTML] = [bars[j].outerHTML, bars[i].outerHTML];\r\n    };\r\n\r\n    const displayPlay = () => {\r\n        document.getElementById(\"playIcon\").style.display = \"inline\";\r\n        document.getElementById(\"pauseIcon\").style.display = \"none\";\r\n    };\r\n\r\n    const displayPause = () => {\r\n        document.getElementById(\"playIcon\").style.display = \"none\";\r\n        document.getElementById(\"pauseIcon\").style.display = \"block\";\r\n    };\r\n\r\n    const buttonsOFF = () => {\r\n        document.getElementById(\"unsortButton\")      .disabled = true;\r\n        document.getElementById(\"lastStepButton\")    .disabled = true;\r\n        document.getElementById(\"nextStepButton\")    .disabled = true;\r\n        document.getElementById(\"completeSortButton\").disabled = true;\r\n    }\r\n\r\n    const buttonsON = () => {\r\n        document.getElementById(\"unsortButton\")      .disabled = false;\r\n        document.getElementById(\"lastStepButton\")    .disabled = false;\r\n        document.getElementById(\"nextStepButton\")    .disabled = false;\r\n        document.getElementById(\"completeSortButton\").disabled = false;\r\n    }\r\n\r\n    const toggleSort = () => {\r\n        document.getElementById(\"sortButton\").disabled = !document.getElementById(\"sortButton\").disabled;\r\n    }\r\n\r\n    return {\r\n        drawArray,\r\n        switchPlaces,\r\n        displayPlay,\r\n        displayPause,\r\n        buttonsON,\r\n        buttonsOFF,\r\n        toggleSort\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayController);\n\n//# sourceURL=webpack:///./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _testObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testObjects.js */ \"./src/testObjects.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _sortingController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortingController.js */ \"./src/sortingController.js\");\n/* harmony import */ var _sortingAlgorithms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortingAlgorithms.js */ \"./src/sortingAlgorithms.js\");\n\r\n\r\n\r\n\r\n\r\nconst testArray = _testObjects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].testArray.slice();\r\n_sortingController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setArray(testArray);\r\n\r\nconst sortingSteps = _sortingAlgorithms_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bubbleSortSteps(testArray);\r\n_sortingController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setSortingSteps(sortingSteps);\r\n\r\n_displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawArray(testArray);\r\nconsole.log(testArray);\r\n\r\ndocument.getElementById(\"speedSlider\").value = _sortingController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSpeed();\r\ndocument.getElementById(\"speedSlider\").max = _sortingController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getMaxSpeed();\r\n\r\n_sortingController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].applyEventListeners();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sortingAlgorithms.js":
/*!**********************************!*\
  !*** ./src/sortingAlgorithms.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _sortingController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortingController.js */ \"./src/sortingController.js\");\n\r\n\r\n\r\nconst removeHighlight = async (bar) => {\r\n    await new Promise(resolve => {\r\n        setTimeout(() => {\r\n            bar.classList.remove(\"highlighted\");\r\n            resolve();\r\n        }, _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSpeed());\r\n    });\r\n};\r\n\r\nconst switchPlaces = async (chart, i, j) => {\r\n    await new Promise(resolve => {\r\n        setTimeout(() => {\r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].switchPlaces(chart, i, j);\r\n            resolve();\r\n        }, _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSpeed());\r\n    });\r\n};\r\n\r\nconst handlePause = async (step) => {\r\n    step--;\r\n    await new Promise(resolve => {\r\n        setTimeout(() => {\r\n            resolve();\r\n        }, 0);\r\n    });\r\n    return step\r\n};\r\n\r\nconst compareArrays = (array1, array2) => {\r\n    if (array1.length != array2.length)\r\n        return false;\r\n    for (var i = 0; i < array1.length; i++) {\r\n        if (array1[i] != array2[i]) \r\n            return false;\r\n    }\r\n    return true;\r\n};\r\n\r\n/*----------------------------------------------------------------------------------------*/\r\n\r\nconst sortingAlgorithms = (() => {\r\n\r\n    const getPauseState        = ()     => _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPauseState();\r\n    const getResetState        = ()     => _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResetState();\r\n    const getCompleteSortState = ()     => _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCompleteSortState();\r\n    const getLastStepTrigger   = ()     => _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLastStepTrigger();\r\n    const getSortedArray       = ()     => _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSortedArray();\r\n    const getSortingStep       = (step) => _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSortingStep(step);\r\n    const setResetState        = ()     => _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setResetState();\r\n    const setLastStepTrigger   = ()     => _sortingController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setLastStepTrigger();\r\n\r\n    const bubbleSort = arrayOriginal => {\r\n        let array = arrayOriginal.slice();\r\n        for (let i = 0; i < array.length; i++) {\r\n            for (let j = i + 1; j < array.length; j++) {\r\n                if (array[i] > array[j]) [array[i], array[j]] = [array[j], array[i]];\r\n            }\r\n        }\r\n        return array;\r\n    }\r\n\r\n    const bubbleSortVisualized = async (arrayOriginal, inputI, inputStep) => {\r\n        let step = inputStep;\r\n        let array = arrayOriginal.slice();\r\n        let testArray = [...array];\r\n        let chart = document.getElementById(\"chart\");\r\n\r\n        for (let i = inputI ? inputI : 0 ; i < array.length; i++) {\r\n\r\n            let selectedBar = chart.children[i];\r\n            selectedBar.classList.remove(\"sorted\");\r\n            selectedBar.classList.add(\"selected\");\r\n\r\n            for (let j = i + 1; j < array.length; j++) {\r\n\r\n                let highlightedBar = chart.children[j];\r\n                highlightedBar.classList.remove(\"sorted\");\r\n                highlightedBar.classList.add(\"highlighted\");\r\n                \r\n                if (getPauseState()) {\r\n                    if (getResetState()) {\r\n                        highlightedBar.classList.remove(\"highlighted\");\r\n                        return;\r\n\r\n                    } else if (getCompleteSortState()) {\r\n                        highlightedBar.classList.remove(\"highlighted\");\r\n                        highlightedBar.classList.add(\"sorted\");\r\n                        return getSortedArray();\r\n\r\n                    } else if (getLastStepTrigger()) {\r\n                        /////////////////////////////////////////////////////////////////////////////////////////////\r\n                        let highlightTrigger = true;\r\n                        [testArray[i], testArray[j]] = [testArray[j], testArray[i]];\r\n\r\n                        if (step == 0) {\r\n                            if (i == 0 && j == 1) {\r\n                                if (compareArrays(testArray, getSortingStep(0))) {\r\n                                    [array[i], array[j]] = [array[j], array[i]];\r\n                                    _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].switchPlaces(chart, i, j);\r\n                                    selectedBar = chart.children[i];\r\n                                }\r\n                                highlightTrigger = false;\r\n                                selectedBar.classList.remove(\"selected\");\r\n                                highlightedBar.classList.remove(\"highlighted\");\r\n                                setResetState();\r\n                                setLastStepTrigger();\r\n                                return;\r\n                            } else {\r\n                                highlightedBar.classList.remove(\"highlighted\");\r\n                                [testArray[i], testArray[j]] = [testArray[j], testArray[i]];\r\n                                if (j - 1 != i) {\r\n                                    j -= 1;\r\n                                } else {\r\n                                    selectedBar.classList.remove(\"selected\");\r\n                                    i -= 1;\r\n                                    selectedBar = chart.children[i];\r\n                                    selectedBar.classList.remove(\"sorted\");\r\n                                    selectedBar.classList.add(\"selected\");\r\n                                    j = array.length - 1;\r\n                                }\r\n                            }                        \r\n\r\n                        } else if (compareArrays(testArray, getSortingStep(step-1))) {\r\n                            step--;\r\n                            [array[i], array[j]] = [array[j], array[i]];\r\n                            _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].switchPlaces(chart, i, j);\r\n                            selectedBar = chart.children[i];\r\n                            \r\n                        } else {\r\n                            highlightedBar.classList.remove(\"highlighted\");\r\n                            [testArray[i], testArray[j]] = [testArray[j], testArray[i]];\r\n                            if (j - 1 != i) {\r\n                                j -= 1;\r\n                            } else {\r\n                                selectedBar.classList.remove(\"selected\");\r\n                                i -= 1;\r\n                                selectedBar = chart.children[i];\r\n                                selectedBar.classList.remove(\"sorted\");\r\n                                selectedBar.classList.add(\"selected\");\r\n                                j = array.length - 1;\r\n                            }\r\n                        }\r\n                        if (highlightTrigger) {\r\n                            highlightedBar = chart.children[j];\r\n                            highlightedBar.classList.add(\"highlighted\");\r\n                            setLastStepTrigger();\r\n                        }\r\n                        /////////////////////////////////////////////////////////////////////////////////////////////\r\n                    }\r\n                    j = await handlePause(j);\r\n\r\n                } else if (array[i] > array[j]) {\r\n                    [array[i], array[j]] = [array[j], array[i]];\r\n                    step++;\r\n                    testArray = [...array];\r\n                    await switchPlaces(chart, i, j);\r\n                    selectedBar = chart.children[i];\r\n\r\n                } else {\r\n                    await removeHighlight(highlightedBar);\r\n                }\r\n            }\r\n            selectedBar.classList.remove(\"selected\");\r\n            selectedBar.classList.add(\"sorted\");\r\n        }\r\n        return array;\r\n    };\r\n\r\n    const bubbleSortSteps = inputArray => {\r\n        let array = inputArray.slice();\r\n        let steps = [[...array]];\r\n        for (let i = 0; i < array.length; i++) {\r\n            for (let j = i + 1; j < array.length; j++) {\r\n                if (array[i] > array[j]) {\r\n                    [array[i], array[j]] = [array[j], array[i]];\r\n                    steps.push([...array]);\r\n                }    \r\n            }\r\n        }\r\n        return steps;\r\n    };\r\n\r\n    return {\r\n        bubbleSort,\r\n        bubbleSortVisualized,\r\n        bubbleSortSteps\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sortingAlgorithms);\n\n//# sourceURL=webpack:///./src/sortingAlgorithms.js?");

/***/ }),

/***/ "./src/sortingController.js":
/*!**********************************!*\
  !*** ./src/sortingController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _sortingAlgorithms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortingAlgorithms.js */ \"./src/sortingAlgorithms.js\");\n\r\n\r\n\r\nconst sortingController = (() => {\r\n    \r\n    let array;\r\n    let sortedArray;\r\n    let sortingSteps;\r\n\r\n    const setArray        = inputArray        => array        = [...inputArray];\r\n    const setSortedArray  = inputSortedArray  => sortedArray  = inputSortedArray;\r\n    const setSortingSteps = inputSortingSteps => sortingSteps = [...inputSortingSteps];\r\n    const getSortedArray  = ()   => sortedArray;\r\n    const getSortingStep  = step => sortingSteps[step];\r\n\r\n    let sortingState      = false;\r\n    let isSorted          = false;\r\n    let pauseState        = false;\r\n    let resetState        = false;\r\n    let completeSortState = false;\r\n    let lastStepTrigger   = false;\r\n    let nextStepTrigger   = false;\r\n\r\n    let speed = 100;\r\n    let maxSpeed = 400;\r\n\r\n    const setSpeed    = newSpeed => speed = newSpeed;\r\n    const getSpeed    = () => speed;\r\n    const getMaxSpeed = () => maxSpeed;\r\n\r\n    const getPauseState        = () => pauseState;\r\n    const getResetState        = () => resetState;\r\n    const setResetState        = () => resetState = true;\r\n    const getCompleteSortState = () => completeSortState;\r\n    const getLastStepTrigger   = () => lastStepTrigger;\r\n    const setLastStepTrigger   = () => lastStepTrigger = !lastStepTrigger;\r\n    \r\n    const handleSort = async (event, inputArray, inputI, inputSteps) => {\r\n        if (!sortingState && !isSorted) {\r\n            sortingState = true;\r\n            if (!pauseState) {\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayPause();\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].buttonsOFF();\r\n            }\r\n\r\n            setSortedArray(await _sortingAlgorithms_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bubbleSortVisualized(inputArray ? inputArray : array, inputI ? inputI : null, inputSteps ? inputSteps : 0));\r\n            \r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayPlay();\r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].buttonsON();\r\n            if (!resetState) {\r\n                completeSortState = false;\r\n                sortingState = false;\r\n                pauseState = false;\r\n                isSorted = true;\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleSort();\r\n                console.log(sortedArray);\r\n            } else {\r\n                sortingState = false;\r\n                pauseState = false;\r\n                isSorted = false;\r\n                resetState = false;\r\n                document.getElementById(\"unsortButton\").disabled = true;\r\n                document.getElementById(\"lastStepButton\").disabled = true;\r\n            }\r\n        } else if (sortingState) {\r\n            if (!pauseState) {\r\n                pauseState = true;\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayPlay();\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].buttonsON();\r\n            } else {\r\n                pauseState = false;\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayPause();\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].buttonsOFF();\r\n            }\r\n        }\r\n    };\r\n\r\n    const handleUnsort = () => {\r\n        if (isSorted) _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleSort();\r\n        else if (pauseState) resetState = true;\r\n        _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawArray(array);\r\n        isSorted = false; \r\n        document.getElementById(\"unsortButton\").disabled = true;\r\n        document.getElementById(\"lastStepButton\").disabled = true;\r\n    };\r\n\r\n    const handleLastStep = () => {\r\n        if (isSorted) {\r\n            isSorted = false;\r\n            pauseState = true;\r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleSort();\r\n            handleSort(null, getSortedArray(), array.length - 2, sortingSteps.length - 1);\r\n        } else {\r\n            lastStepTrigger = true;\r\n        }\r\n    };\r\n    \r\n    const handleNextStep = () => {\r\n        \r\n    };\r\n    \r\n    const handleCompleteSort = () => {\r\n        if (!isSorted) {\r\n            setSortedArray(_sortingAlgorithms_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bubbleSort(array));\r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawArray(sortedArray, true);\r\n            if (!sortingState) {\r\n                isSorted = true; \r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].buttonsON();\r\n                _displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleSort();\r\n                console.log(sortedArray);\r\n            } else completeSortState = true;\r\n        }\r\n    };\r\n\r\n    const handleSpeedChange = () => {\r\n        let newSpeed = document.getElementById(\"speedSlider\").value;\r\n        setSpeed(newSpeed);\r\n    };\r\n    \r\n    const applyEventListeners = () => {\r\n        document.getElementById(\"sortButton\")        .addEventListener(\"click\", handleSort);\r\n        document.getElementById(\"unsortButton\")      .addEventListener(\"click\", handleUnsort);\r\n        document.getElementById(\"lastStepButton\")    .addEventListener(\"click\", handleLastStep);\r\n        document.getElementById(\"nextStepButton\")    .addEventListener(\"click\", handleNextStep);\r\n        document.getElementById(\"completeSortButton\").addEventListener(\"click\", handleCompleteSort);\r\n        document.getElementById(\"speedSlider\")       .addEventListener(\"input\", handleSpeedChange);\r\n        document.addEventListener(\"keydown\", (event) => {\r\n            switch (event.code) {\r\n                case \"Space\":\r\n                    handleSort();\r\n                    break;\r\n                case \"Backspace\":\r\n                    handleUnsort();\r\n                    break\r\n                case \"ArrowLeft\":\r\n                    handleLastStep();\r\n                    break;\r\n                case \"ArrowRight\":\r\n                    handleNextStep();\r\n                    break;\r\n                case \"Enter\":\r\n                    handleCompleteSort();\r\n                    break;\r\n                case \"ArrowUp\":\r\n                    setSpeed(getSpeed() - 30);\r\n                    document.getElementById(\"speedSlider\").value = getSpeed();\r\n                    break;\r\n                case \"ArrowDown\":\r\n                    setSpeed(getSpeed() + 30);\r\n                    document.getElementById(\"speedSlider\").value = getSpeed();\r\n                    break;\r\n            }\r\n        });\r\n    };\r\n\r\n    return {\r\n        setArray,\r\n        setSortingSteps,\r\n        getSortingStep,\r\n        getSortedArray,\r\n        applyEventListeners,\r\n        getSpeed,\r\n        getMaxSpeed,\r\n        getPauseState,\r\n        getResetState,\r\n        setResetState,\r\n        getCompleteSortState,\r\n        getLastStepTrigger,\r\n        setLastStepTrigger\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sortingController);\n\n//# sourceURL=webpack:///./src/sortingController.js?");

/***/ }),

/***/ "./src/testObjects.js":
/*!****************************!*\
  !*** ./src/testObjects.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    testArray: [3, 1, 5, 2, 8, 6, 4, 7, 3, 1, 10, 5, 2, 8, 6, 4, 7, 3, 1, 5, 6, 4, 7, 10, 5, 2, 8, 6, 4],\r\n    //testArray: [1, 2, 5, 3, 4, 6]\r\n});\n\n//# sourceURL=webpack:///./src/testObjects.js?");

/***/ })

/******/ });
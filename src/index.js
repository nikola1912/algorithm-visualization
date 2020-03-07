import testObjects from "./testObjects.js";
import displayController from "./displayController.js";
import sortingController from "./sortingController.js";
import sortingAlgorithms from "./sortingAlgorithms.js";

const testArray = testObjects.testArray.slice();
sortingController.setArray(testArray);

const sortingSteps = sortingAlgorithms.bubbleSortSteps(testArray);
sortingController.setSortingSteps(sortingSteps);

displayController.drawArray(testArray);
console.log(testArray);

document.getElementById("speedSlider").value = sortingController.getSpeed();
document.getElementById("speedSlider").max = sortingController.getMaxSpeed();

sortingController.applyEventListeners();
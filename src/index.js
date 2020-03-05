import testObjects from "./testObjects.js";
import displayController from "./displayController.js";
import sortingController from "./sortingController.js";
import sortingAlgorithms from "./sortingAlgorithms.js";

const testArray = testObjects.testArray.slice();
displayController.drawArray(testArray);
console.log(testArray);

const sortingSteps = sortingAlgorithms.bubbleSortSteps(testArray);
console.log(sortingSteps);

document.getElementById("speedSlider").value = sortingController.getSpeed();
document.getElementById("speedSlider").max = sortingController.getMaxSpeed();

sortingController.setArray(testArray);
sortingController.setSortingSteps(sortingSteps);
sortingController.applyEventListeners();
import testObjects       from "testObjects.js";
import displayController from "displayController.js";
import sortingController from "sortingController.js";
import bubbleSortModule  from "sortingAlgorithms/bubbleSort/bubbleSort.js";

const testArray = testObjects.testArray.slice();
sortingController.setArray(testArray);

const sortingSteps = bubbleSortModule.bubbleSortSteps(testArray);
sortingController.setSortingSteps(sortingSteps);

displayController.drawArray(testArray);
console.log(testArray);

document.getElementById("speedSlider").value = sortingController.getSpeed();
document.getElementById("speedSlider").max = sortingController.getMaxSpeed();

sortingController.applyEventListeners();
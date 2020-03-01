import testObjects from "./testObjects.js";
import displayController from "./displayController.js";
import sortingController from "./sortingController.js";

const testArray = testObjects.testArray.slice();
displayController.drawArray(testArray);
console.log(testArray);

document.getElementById("speedSlider").value = sortingController.getSpeed();
document.getElementById("speedSlider").max = sortingController.getMaxSpeed();

sortingController.applyEventListeners();
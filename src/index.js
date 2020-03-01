import testObjects from "./testObjects.js";
import displayController from "./displayController.js";
import sortingController from "./sortingController.js";

const testArray = testObjects.testArray.slice();
displayController.drawArray(testArray);
console.log(testArray);

const speed = sortingController.getSpeed();
const maxSpeed = sortingController.getMaxSpeed();

document.getElementById("speedSlider").value = speed;
document.getElementById("speedSlider").max = maxSpeed;
document.getElementById("value").innerHTML = maxSpeed - speed;

sortingController.applyEventListeners();
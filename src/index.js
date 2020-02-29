import testObjects from "./testObjects.js";
import displayController from "./displayController.js";
import { sortingAlgorithms, setSpeed, getSpeed, setMaxSpeed, getMaxSpeed } from "./sortingAlgorithms.js";

//import sortingController from "./sortingController.js";

const testArray = testObjects.testArray.slice();
displayController.drawArray(testArray);

document.getElementById("speedSlider").value = getSpeed();
document.getElementById("value").innerHTML = getMaxSpeed() - getSpeed();

//sortingController.applyEventListeners();

document.getElementById("sortButton").addEventListener("click", async () => {
    let sortedArray = await sortingAlgorithms.bubbleSort(testArray);
    console.log(sortedArray);
});

document.getElementById("unsortButton").addEventListener("click", () => {
    displayController.drawArray(testArray);
});

document.getElementById("speedSlider").addEventListener("input", () => {
    let newSpeed = document.getElementById("speedSlider").value;
    document.getElementById("value").innerHTML = getMaxSpeed() - newSpeed;
    setSpeed(newSpeed);
});

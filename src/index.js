import testObjects from "./testObjects.js";
import displayController from "./displayController.js";
import sortingAlgorithms from "./sortingAlgorithms.js";

const testArray = testObjects.testArray.slice();
displayController.drawArray(testArray);

document.getElementById("sortButton").addEventListener("click", () => {
    const sortedArray = sortingAlgorithms.bubbleSort(testArray);
    displayController.drawArray(sortedArray);
})

console.log(sortedArray);
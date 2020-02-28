import testObjects from "./testObjects.js";
import displayController from "./displayController.js";
import sortingAlgorithms from "./sortingAlgorithms.js";

const testArray = testObjects.testArray.slice();
displayController.drawArray(testArray);

document.getElementById("sortButton").addEventListener("click", async () => {
    let sortedArray = await sortingAlgorithms.bubbleSort(testArray);
    //displayController.drawArray(sortedArray);
    console.log(sortedArray);
})

document.getElementById("unsortButton").addEventListener("click", () => {
    displayController.drawArray(testArray);
})
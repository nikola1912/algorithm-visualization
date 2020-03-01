import testObjects from "./testObjects.js";
import displayController from "./displayController.js";
import sortingAlgorithms from "./sortingAlgorithms.js";

const sortingController = (() => {

    const array = testObjects.testArray.slice();
    let speed = 100;
    let maxSpeed = 700;

    const setSpeed = newSpeed => speed = newSpeed;
    const getSpeed = () => speed;

    const setMaxSpeed = newMaxSpeed => maxSpeed = newMaxSpeed;
    const getMaxSpeed = () => maxSpeed;

    const handleSort = async () => {
        let sortedArray = await sortingAlgorithms.bubbleSort(array);
        console.log(sortedArray);
    };

    const handleUnsort = () => {
        displayController.drawArray(array);
    };

    const handleSpeedChange = () => {
        let newSpeed = document.getElementById("speedSlider").value;
        document.getElementById("value").innerHTML = getMaxSpeed() - newSpeed;
        setSpeed(newSpeed);
    };
    
    const applyEventListeners = () => {
        document.getElementById("sortButton").addEventListener("click", handleSort),
        document.getElementById("unsortButton").addEventListener("click", handleUnsort),
        document.getElementById("speedSlider").addEventListener("input", handleSpeedChange);
    };

    return {
        applyEventListeners,
        getSpeed,
        getMaxSpeed
    };
})();

export default sortingController;
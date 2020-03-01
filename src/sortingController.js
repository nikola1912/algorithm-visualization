import testObjects from "./testObjects.js";
import displayController from "./displayController.js";
import sortingAlgorithms from "./sortingAlgorithms.js";

const sortingController = (() => {

    let sortingState = false; //true = ON | false = OFF
    let speed = 100;
    let maxSpeed = 700;
    const array = testObjects.testArray.slice();

    const setSpeed = newSpeed => speed = newSpeed;
    const getSpeed = () => speed;

    const setMaxSpeed = newMaxSpeed => maxSpeed = newMaxSpeed;
    const getMaxSpeed = () => maxSpeed;

    const handleSort = async () => {
        sortingState = true;
        let sortedArray = await sortingAlgorithms.bubbleSort(array);
        sortingState = false;
        console.log(sortedArray);
    };

    const handleUnsort = () => {
        if (!sortingState) displayController.drawArray(array);
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
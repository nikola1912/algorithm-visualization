import testObjects from "./testObjects.js";
import displayController from "./displayController.js";
import sortingAlgorithms from "./sortingAlgorithms.js";

const sortingController = (() => {

    let sortingState = false; //true = ON | false = OFF
    let isSorted = false;
    let speed = 100;
    let maxSpeed = 700;
    const array = testObjects.testArray.slice();

    const setSpeed = newSpeed => speed = newSpeed;
    const getSpeed = () => speed;

    const setMaxSpeed = newMaxSpeed => maxSpeed = newMaxSpeed;
    const getMaxSpeed = () => maxSpeed;

    const handleSort = async () => {
        if (!sortingState && !isSorted) {
            sortingState = true;
            document.getElementById("unsortButton").disabled = true;
            document.getElementById("playIcon").style.display = "none";
            document.getElementById("pauseIcon").style.display = "block";
    
            let sortedArray = await sortingAlgorithms.bubbleSort(array);
    
            isSorted = true;
            sortingState = false;
            document.getElementById("unsortButton").disabled = false;
            document.getElementById("playIcon").style.display = "inline";
            document.getElementById("pauseIcon").style.display = "none";
            console.log(sortedArray);
        }
    };

    const handleUnsort = () => {
        if (!sortingState) {
            displayController.drawArray(array);
            isSorted = false;   
        }
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
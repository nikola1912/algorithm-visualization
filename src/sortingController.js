import testObjects from "./testObjects.js";
import displayController from "./displayController.js";
import sortingAlgorithms from "./sortingAlgorithms.js";

const sortingController = (() => {
    
    let array
    const setArray = inputArray => array = [...inputArray];

    let sortingState      = false;
    let isSorted          = false;
    let pauseState        = false;
    let resetState        = false;
    let completeSortState = false;
    let lastStepTrigger   = false;
    let nextStepTrigger   = false;

    let speed = 100;
    let maxSpeed = 400;

    const setSpeed    = newSpeed => speed = newSpeed;
    const getSpeed    = () => speed;
    const getMaxSpeed = () => maxSpeed;

    const getPauseState        = () => pauseState;
    const getResetState        = () => resetState;
    const getCompleteSortState = () => completeSortState;
    const getLastStepTrigger   = () => lastStepTrigger;
    const setLastStepTrigger   = () => lastStepTrigger = !lastStepTrigger;
    
    const handleSort = async () => {
        if (!sortingState && !isSorted) {
            sortingState = true;
            displayController.displayPause();
            displayController.buttonsOFF();

            let sortedArray = await sortingAlgorithms.bubbleSortVisualized(array);
            
            displayController.displayPlay();
            displayController.buttonsON();
            if (!resetState) {
                completeSortState = false;
                sortingState = false;
                pauseState = false;
                isSorted = true;
                displayController.toggleSort();
                console.log(sortedArray);
            } else {
                sortingState = false;
                pauseState = false;
                isSorted = false;
                resetState = false;
            }
        } else if (sortingState) {
            if (!pauseState) {
                pauseState = true;
                displayController.displayPlay();
                displayController.buttonsON();
            } else {
                pauseState = false;
                displayController.displayPause();
                displayController.buttonsOFF();
            }
        }
    };

    const handleUnsort = () => {
        if (isSorted) displayController.toggleSort();
        else if (pauseState) resetState = true;
        displayController.drawArray(array);
        isSorted = false; 
    };

    const handleLastStep = () => {
        lastStepTrigger = true;
    };
    
    const handleNextStep = () => {
        
    };
    
    const handleCompleteSort = () => {
        if (!isSorted) {
            let sortedArray = sortingAlgorithms.bubbleSort(array);
            displayController.drawArray(sortedArray, true);
            if (!sortingState) {
                isSorted = true; 
                displayController.toggleSort();
                console.log(sortedArray);
            } else completeSortState = true;
        }
    };

    const handleSpeedChange = () => {
        let newSpeed = document.getElementById("speedSlider").value;
        setSpeed(newSpeed);
    };
    
    const applyEventListeners = () => {
        document.getElementById("sortButton")        .addEventListener("click", handleSort),
        document.getElementById("unsortButton")      .addEventListener("click", handleUnsort),
        //document.getElementById("lastStepButton")    .addEventListener("click", handleLastStep);
        document.getElementById("nextStepButton")    .addEventListener("click", handleNextStep);
        document.getElementById("completeSortButton").addEventListener("click", handleCompleteSort);
        document.getElementById("speedSlider")       .addEventListener("input", handleSpeedChange);
    };

    return {
        setArray,
        applyEventListeners,
        getSpeed,
        getMaxSpeed,
        getPauseState,
        getResetState,
        getCompleteSortState,
        getLastStepTrigger,
        setLastStepTrigger
    };
})();

export default sortingController;
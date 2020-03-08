import displayController from "displayController.js";
import bubbleSortModule  from "sortingAlgorithms/bubbleSort/bubbleSort.js";

const sortingController = (() => {
    
    let array;
    let sortedArray;
    let sortingSteps;

    const setArray        = inputArray        => array        = [...inputArray];
    const setSortedArray  = inputSortedArray  => sortedArray  = inputSortedArray;
    const setSortingSteps = inputSortingSteps => sortingSteps = [...inputSortingSteps];
    const getSortedArray  = ()   => sortedArray;
    const getSortingStep  = step => sortingSteps[step];

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
    const setResetState        = () => resetState = true;
    const getCompleteSortState = () => completeSortState;
    const setCompleteSortState = () => completeSortState = !completeSortState;
    const getLastStepTrigger   = () => lastStepTrigger;
    const setLastStepTrigger   = () => lastStepTrigger = !lastStepTrigger;
    const getNextStepTrigger   = () => nextStepTrigger;
    const setNextStepTrigger   = () => nextStepTrigger = !nextStepTrigger;
    
    const handleSort = async (event, inputArray, inputI, inputSteps) => {
        if (!sortingState && !isSorted) {
            sortingState = true;
            if (!pauseState) {
                displayController.displayPause();
                displayController.buttonsOFF();
            }

            setSortedArray(await bubbleSortModule.bubbleSortVisualized(inputArray ? inputArray : array, inputI ? inputI : null, inputSteps ? inputSteps : 0));
            
            displayController.displayPlay();
            displayController.buttonsON();
            if (!resetState) {
                completeSortState = false;
                sortingState = false;
                pauseState = false;
                isSorted = true;
                displayController.toggleSort();
                document.getElementById("nextStepButton").disabled = true;
                document.getElementById("completeSortButton").disabled = true;
                console.log(sortedArray);
            } else {
                sortingState = false;
                pauseState = false;
                isSorted = false;
                resetState = false;
                document.getElementById("unsortButton").disabled = true;
                document.getElementById("lastStepButton").disabled = true;
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
        document.getElementById("unsortButton").disabled = true;
        document.getElementById("lastStepButton").disabled = true;
        document.getElementById("nextStepButton").disabled = false;
        document.getElementById("completeSortButton").disabled = false;
    };

    const handleLastStep = () => {
        if (isSorted) {
            isSorted = false;
            pauseState = true;
            displayController.toggleSort();
            document.getElementById("nextStepButton").disabled = false;
            document.getElementById("completeSortButton").disabled = false;
            handleSort(null, getSortedArray(), array.length - 2, sortingSteps.length - 1);
        } else lastStepTrigger = true;
    };
    
    const handleNextStep = () => {
        if (!isSorted) {
            if (!sortingState) {
                pauseState = true;
                document.getElementById("unsortButton").disabled = false;
                document.getElementById("lastStepButton").disabled = false;
                handleSort(null, array);
            } else nextStepTrigger = true;
        }
    };
    
    const handleCompleteSort = () => {
        if (!isSorted) {
            setSortedArray(bubbleSortModule.bubbleSort(array));
            displayController.drawArray(sortedArray, true);
            if (!sortingState) {
                isSorted = true; 
                displayController.buttonsON();
                displayController.toggleSort();
                console.log(sortedArray);
            } else completeSortState = true;
        }
        document.getElementById("nextStepButton").disabled = true;
        document.getElementById("completeSortButton").disabled = true;
    };

    const handleSpeedChange = () => {
        let newSpeed = document.getElementById("speedSlider").value;
        setSpeed(newSpeed);
    };
    
    const applyEventListeners = () => {
        document.getElementById("sortButton")        .addEventListener("mousedown", handleSort);
        document.getElementById("unsortButton")      .addEventListener("click", handleUnsort);
        document.getElementById("lastStepButton")    .addEventListener("click", handleLastStep);
        document.getElementById("nextStepButton")    .addEventListener("click", handleNextStep);
        document.getElementById("completeSortButton").addEventListener("click", handleCompleteSort);
        document.getElementById("speedSlider")       .addEventListener("input", handleSpeedChange);
        document.addEventListener("keydown", (event) => {
            switch (event.code) {
                case "Space":
                    if (!document.getElementById("sortButton").disabled) handleSort();
                    break;
                case "Backspace":
                    if (!document.getElementById("unsortButton").disabled) handleUnsort();
                    break
                case "ArrowLeft":
                    if (!document.getElementById("lastStepButton").disabled) handleLastStep();
                    break;
                case "ArrowRight":
                    if (!document.getElementById("nextStepButton").disabled) handleNextStep();
                    break;
                case "Enter":
                    if (!document.getElementById("completeSortButton").disabled) handleCompleteSort();
                    break;
                case "ArrowUp":
                    setSpeed(getSpeed() - 30);
                    document.getElementById("speedSlider").value = getSpeed();
                    break;
                case "ArrowDown":
                    setSpeed(getSpeed() + 30);
                    document.getElementById("speedSlider").value = getSpeed();
                    break;
            }
        });
    };

    return {
        setArray,
        setSortingSteps,
        getSortingStep,
        getSortedArray,
        applyEventListeners,
        getSpeed,
        getMaxSpeed,
        getPauseState,
        getResetState,
        setResetState,
        getCompleteSortState,
        setCompleteSortState,
        getLastStepTrigger,
        setLastStepTrigger,
        getNextStepTrigger,
        setNextStepTrigger
    };
})();

export default sortingController;
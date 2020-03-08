import displayController from "displayController.js";
import sortingController from "sortingController.js";
import handleLastStepTrigger from "./handleLastStepTrigger.js";
import handleNextStepTrigger from "./handleNextStepTrigger.js";

const removeHighlight = async (bar) => {
    await new Promise(resolve => {
        setTimeout(() => {
            bar.classList.remove("highlighted");
            resolve();
        }, sortingController.getSpeed());
    });
};

const switchPlaces = async (chart, i, j) => {
    await new Promise(resolve => {
        setTimeout(() => {
            displayController.switchPlaces(chart, i, j);
            resolve();
        }, sortingController.getSpeed());
    });
};

const handlePause = async (step) => {
    step--;
    await new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 0);
    });
    return step
};

/*----------------------------------------------------------------------------------------*/

const bubbleSortModule = (() => {

    const getPauseState        = () => sortingController.getPauseState();
    const getResetState        = () => sortingController.getResetState();
    const getCompleteSortState = () => sortingController.getCompleteSortState();
    const getLastStepTrigger   = () => sortingController.getLastStepTrigger();
    const setLastStepTrigger   = () => sortingController.setLastStepTrigger();
    const getNextStepTrigger   = () => sortingController.getNextStepTrigger();
    const setNextStepTrigger   = () => sortingController.setNextStepTrigger();
    const getSortedArray       = () => sortingController.getSortedArray();

    const bubbleSort = arrayOriginal => {
        let array = arrayOriginal.slice();
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] > array[j]) [array[i], array[j]] = [array[j], array[i]];
            }
        }
        return array;
    }

    const bubbleSortVisualized = async (arrayOriginal, inputI, inputStep) => {
        let step = inputStep;
        let array = arrayOriginal.slice();
        let testArray = [...array];
        let chart = document.getElementById("chart");

        for (let i = inputI ? inputI : 0 ; i < array.length; i++) {

            let selectedBar = chart.children[i];
            selectedBar.classList.remove("sorted");
            selectedBar.classList.add("selected");

            for (let j = i + 1; j < array.length; j++) {

                let highlightedBar = chart.children[j];
                highlightedBar.classList.remove("sorted");
                highlightedBar.classList.add("highlighted");
                
                if (getPauseState()) {
                    if (getResetState()) {
                        highlightedBar.classList.remove("highlighted");
                        return;

                    } else if (getCompleteSortState()) {
                        highlightedBar.classList.remove("highlighted");
                        highlightedBar.classList.add("sorted");
                        return getSortedArray();

                    } else if (getLastStepTrigger()) {
                        [array, testArray, i, j, step, selectedBar, highlightedBar] = handleLastStepTrigger(array, testArray, i, j, step, selectedBar, highlightedBar);
                        setLastStepTrigger();
                    
                    } else if (getNextStepTrigger()) {
                        [array, testArray, i, j, step, selectedBar, highlightedBar] = handleNextStepTrigger(array, testArray, i, j, step, selectedBar, highlightedBar);
                        setNextStepTrigger();
                    }

                    j = await handlePause(j);

                } else if (array[i] > array[j]) {
                    [array[i], array[j]] = [array[j], array[i]];
                    step++;
                    testArray = [...array];
                    await switchPlaces(chart, i, j);
                    selectedBar = chart.children[i];

                } else {
                    await removeHighlight(highlightedBar);
                }
            }
            selectedBar.classList.remove("selected");
            selectedBar.classList.add("sorted");
        }
        return array;
    };

    const bubbleSortSteps = inputArray => {
        let array = inputArray.slice();
        let steps = [[...array]];
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] > array[j]) {
                    [array[i], array[j]] = [array[j], array[i]];
                    steps.push([...array]);
                }    
            }
        }
        return steps;
    };

    return {
        bubbleSort,
        bubbleSortVisualized,
        bubbleSortSteps
    };
})();

export default bubbleSortModule;
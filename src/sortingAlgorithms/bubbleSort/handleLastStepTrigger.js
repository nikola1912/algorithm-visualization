import displayController from "displayController.js";
import sortingController from "sortingController.js";

const getSortingStep       = (step) => sortingController.getSortingStep(step);
const setResetState        = ()     => sortingController.setResetState();
const setLastStepTrigger   = ()     => sortingController.setLastStepTrigger();

const compareArrays = (array1, array2) => {
    if (array1.length != array2.length)
        return false;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) 
            return false;
    }
    return true;
};

const switchToLastStep = (array, i, j, selectedBar) => {
    [array[i], array[j]] = [array[j], array[i]];
    displayController.switchPlaces(chart, i, j);
    selectedBar = chart.children[i];
    return [array, selectedBar];
};

const standardSwitch = (array, testArray, i, j, highlightedBar, selectedBar) => {
    highlightedBar.classList.remove("highlighted");
    [testArray[i], testArray[j]] = [testArray[j], testArray[i]];
    if (j - 1 != i) {
        j--;
    } else {
        selectedBar.classList.remove("selected");
        i--;
        selectedBar = chart.children[i];
        selectedBar.classList.remove("sorted");
        selectedBar.classList.add("selected");
        j = array.length - 1;
    }
    return [array, testArray, i, j, highlightedBar, selectedBar];
};

const handleLastStepTrigger = (array, testArray, i, j, step, selectedBar, highlightedBar) => {
    
    let highlightTrigger = true;
    [testArray[i], testArray[j]] = [testArray[j], testArray[i]];

    if (step == 0) {
        if (i == 0 && j == 1) {
            if (compareArrays(testArray, getSortingStep(0))) {
                [array, selectedBar] = switchToLastStep(array, i, j, selectedBar);
            }
            highlightTrigger = false;
            selectedBar.classList.remove("selected");
            highlightedBar.classList.remove("highlighted");
            setResetState();
            setLastStepTrigger();
            return [array, testArray, i, j, step, selectedBar, highlightedBar];
        } else {
            [array, testArray, i, j, highlightedBar, selectedBar] = standardSwitch(array, testArray, i, j, highlightedBar, selectedBar);
        }                        

    } else if (compareArrays(testArray, getSortingStep(step-1))) {
        step--;
        [array, selectedBar] = switchToLastStep(array, i, j, selectedBar);
        
    } else {
        [array, testArray, i, j, highlightedBar, selectedBar] = standardSwitch(array, testArray, i, j, highlightedBar, selectedBar);
    }

    if (highlightTrigger) {
        highlightedBar = chart.children[j];
        highlightedBar.classList.add("highlighted");
        setLastStepTrigger();
    }

    return [array, testArray, i, j, step, selectedBar, highlightedBar]
};

export default handleLastStepTrigger;
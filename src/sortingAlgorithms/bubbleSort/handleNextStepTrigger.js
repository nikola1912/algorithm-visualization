import displayController from "displayController.js";
import sortingController from "sortingController.js";

const setCompleteSortState = () => sortingController.setCompleteSortState();

const handleNextStepTrigger = (array, testArray, i, j, step, selectedBar, highlightedBar) => {

    if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
        step++;
        testArray = [...array];
        displayController.switchPlaces(chart, i, j);
        selectedBar = chart.children[i];
    } else if (j + 1 == array.length) {
        selectedBar.classList.remove("selected");
        selectedBar.classList.add("sorted");
        if (i + 2 == array.length) {
            highlightedBar.classList.remove("highlighted");
            highlightedBar.classList.remove("sorted");
            setCompleteSortState();
            return [array, testArray, i, j, step, selectedBar, highlightedBar];
        } else {
            i++;
            selectedBar = chart.children[i];
            selectedBar.classList.add("selected");
            highlightedBar.classList.remove("highlighted");
            j = i + 1;
        }
    } else {
        highlightedBar.classList.remove("highlighted");
        j++;
    }
    highlightedBar = chart.children[j];
    highlightedBar.classList.add("highlighted");

    return [array, testArray, i, j, step, selectedBar, highlightedBar]
};

export default handleNextStepTrigger;
import displayController from "./displayController.js";
import sortingController from "./sortingController.js";

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

const sortingAlgorithms = (() => {

    const bubbleSort = async (arrayOriginal) => {
        let array = arrayOriginal.slice();
        let chart = document.getElementById("chart");
        for (let i = 0; i < array.length; i++) {

            let selectedBar = chart.children[i];
            selectedBar.classList.add("selected");

            for (let j = i + 1; j < array.length; j++) {

                let highlightedBar = chart.children[j];
                highlightedBar.classList.add("highlighted");
                
                if (sortingController.getPauseState()) {
                    if (sortingController.getResetState()) {
                        highlightedBar.classList.remove("highlighted");
                        return;
                    }
                    j = await handlePause(j);
                } else if (array[i] > array[j]) {
                    [array[i], array[j]] = [array[j], array[i]];
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

    return {
        bubbleSort
    };
})();

export default sortingAlgorithms;
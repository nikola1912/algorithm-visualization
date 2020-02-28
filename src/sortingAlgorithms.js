import displayController from "./displayController.js";

const speed = 50;

const removeHighlight = async (bar) => {
    await new Promise(resolve => {
        setTimeout(() => {
            bar.classList.remove("highlighted");
            resolve();
        }, speed);
    });
};

const switchPlaces = async (chart, i, j) => {
    await new Promise(resolve => {
        setTimeout(() => {
            displayController.switchPlaces(chart, i, j);
            resolve();
        }, speed);
    });
};

/*----------------------------------------------------------------------------------------*/

const sortingAlgorithms = (() => {

    const bubbleSort = async (arrayOriginal) => {
        let array = arrayOriginal.slice();
        let chart = document.getElementById("chart");
        for (let i = 0; i < array.length - 1; i++) {

            let selectedBar = chart.children[i];
            selectedBar.classList.add("selected");

            for (let j = i + 1; j < array.length; j++) {

                let highlightedBar = chart.children[j];
                highlightedBar.classList.add("highlighted");

                if (array[i] > array[j]) {
                    [array[i], array[j]] = [array[j], array[i]];
                    await switchPlaces(chart, i, j);
                    selectedBar = chart.children[i];
                } else {
                    await removeHighlight(highlightedBar);
                }
            }
            selectedBar.classList.remove("selected");
        }
        return array;
    };

    return {
        bubbleSort
    };
})();

export default sortingAlgorithms;
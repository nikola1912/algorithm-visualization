import displayController from "./displayController.js";

const sortingAlgorithms = (() => {

    const bubbleSort = async (arrayOriginal) => {
        let array = arrayOriginal.slice();
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] > array[j]) {
                    [array[i], array[j]] = [array[j], array[i]];
                    await new Promise(resolve => {
                        setTimeout(() => {
                            displayController.drawArray(array);
                            resolve();
                        }, 100);
                    });
                }
            }
        }
        return array;
    };

    return {
        bubbleSort
    };
})();

export default sortingAlgorithms;
const sortingAlgorithms = (() => {

    const bubbleSort = (arrayOriginal) => {
        let array = arrayOriginal.slice();
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i; j < array.length; j++) {
                if (array[i] > array[j]) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    }

    return {
        bubbleSort
    };
})();

export default sortingAlgorithms;
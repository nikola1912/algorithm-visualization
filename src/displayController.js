const displayController = (() => {

    const drawBar = (height, value) => {
        const newBar = document.createElement("div");
        newBar.classList.add("bar");
        newBar.style.height = `${height}%`;
        newBar.textContent = value;
        return newBar;
    };  

    const drawArray = (array) => {
        const chart = document.getElementById("chart");
        chart.innerHTML = "";
        const upperLimit = Math.max(...array);
        array.forEach((element) => {
            let height = 100 / (upperLimit / element);
            chart.append(drawBar(height, element));
        });
    };

    const switchPlaces = (chart, i, j) => {
        let bars = chart.children;
        bars[i].classList.remove("selected");
        bars[j].classList.remove("highlighted");
        bars[j].classList.add("selected");
        [bars[i].outerHTML, bars[j].outerHTML] = [bars[j].outerHTML, bars[i].outerHTML];
    };

    const displayPlay = () => {
        document.getElementById("playIcon").style.display = "inline";
        document.getElementById("pauseIcon").style.display = "none";
    };

    const displayPause = () => {
        document.getElementById("playIcon").style.display = "none";
        document.getElementById("pauseIcon").style.display = "block";
    };

    const buttonsOFF = () => {
        document.getElementById("unsortButton")      .disabled = true;
        document.getElementById("lastStepButton")    .disabled = true;
        document.getElementById("nextStepButton")    .disabled = true;
        document.getElementById("completeSortButton").disabled = true;
    }

    const buttonsON = () => {
        document.getElementById("unsortButton")      .disabled = false;
        document.getElementById("lastStepButton")    .disabled = false;
        document.getElementById("nextStepButton")    .disabled = false;
        document.getElementById("completeSortButton").disabled = false;
    }

    const toggleSort = () => {
        document.getElementById("sortButton").disabled = !document.getElementById("sortButton").disabled;
    }

    return {
        drawArray,
        switchPlaces,
        displayPlay,
        displayPause,
        buttonsON,
        buttonsOFF,
        toggleSort
    };
})();

export default displayController;
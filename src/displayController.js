const displayController = (() => {

    const drawBar = (height, value) => {
        const newBar = document.createElement("div");
        newBar.classList.add("bar");
        newBar.style.height = `${height}%`;
        newBar.textContent = value;
        return newBar
    };  

    const drawArray = (array) => {
        const chart = document.getElementById("chart");
        chart.innerHTML = "";
        const upperLimit = Math.max(...array);
        array.forEach(element => {
            let height = 100 / (upperLimit / element);
            chart.append(drawBar(height, element));
        });
    };

    return {
        drawArray
    };
})();

export default displayController;
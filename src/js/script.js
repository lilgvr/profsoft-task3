import {array, daysOfWeek} from "./data"

const input = document.querySelector('#productIdInput');
const mapContainer = document.querySelector('.mapContainer');

const getDayProductsCountById = (id) => {
    const resultMap = new Map();

    for (let i = 0; i < daysOfWeek.length; i++) {
        resultMap.set(daysOfWeek[i], 0);
    }

    for (let i = 0; i < array.length; i++) {
        const dayIndex = new Date(array[i].creationDate).getDay();
        const day = daysOfWeek[dayIndex];

        const len = array[i].orderLines.filter(line => id === line.productId).length;

        resultMap.set(day, resultMap.get(day) + len);
    }

    return resultMap;
}

const render = () => {
    mapContainer.innerHTML = '';
    const map = getDayProductsCountById(Number(input.value));

    for (let [key, value] of map) {
        const keyElement = document.createElement('span');
        const valueElement = document.createElement('span');
        keyElement.innerText = `${key}: `;
        valueElement.innerText = value;

        keyElement.appendChild(valueElement);
        mapContainer.appendChild(keyElement);
    }
}

const main = () => {
    render();
    input.oninput = render;
}

window.onload = main;

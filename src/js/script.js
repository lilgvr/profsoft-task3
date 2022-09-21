import {array, daysOfWeek} from "./data"

const getDayProductsCountById = (id) => {
    const resultMap = new Map();

    for (let i = 0; i < daysOfWeek.length; i++) {
        resultMap.set(daysOfWeek[i], 0);
    }

    for (let i = 0; i < array.length; i++) {
        const dayIndex = new Date(array[i].creationDate)?.getDay();
        const dayName = daysOfWeek[dayIndex];

        const productsCount = array[i].orderLines?.filter(line => id === line.productId).length;

        resultMap.set(dayName, resultMap.get(dayName) + productsCount);
    }

    return resultMap;
}

const render = () => {
    const input = document.querySelector('#productIdInput');
    const mapContainer = document.querySelector('.mapContainer');
    const map = getDayProductsCountById(+input.value);

    mapContainer.innerHTML = '';

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
    const button = document.querySelector('#inputButton');

    render();
    button.onclick = render;
}

window.onload = main;

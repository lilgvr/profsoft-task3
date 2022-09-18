import {array, daysOfWeek} from "./data"

const getDayProductsCountById = (id) => {
    const resultMap = new Map();

    for (let i = 0; i < daysOfWeek.length; i++) {
        resultMap.set(daysOfWeek[i], 0);
    }

    for (let i = 0; i < array.length; i++) {
        const dayIndex = new Date(array[i].creationDate).getDay();
        const dayName = daysOfWeek[dayIndex];

        const productsCout = array[i].orderLines.filter(line => id === line.productId).length;

        resultMap.set(dayName, resultMap.get(dayName) + productsCout);
    }

    return resultMap;
}

const main = () => {
    console.log(getDayProductsCountById(9872))
}

window.onload = main;

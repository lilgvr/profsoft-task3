import {array, daysOfWeek} from "./data"

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

const main = () => {
    console.log(getDayProductsCountById(9872))
}

window.onload = main;

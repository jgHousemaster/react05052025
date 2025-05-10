// Impure Function
const addToScoreHistory = (array, score) => {
    array.push(score);
    return array;
}

// Shallow copy

// with spread operator
const arr = [1, 2, 3]
const arr1 = [...arr, 4]

// with Object.assign()
const arr2 = Object.assign([], arr)
console.log(arr2 === arr1) // false

// Deep copy
const obj = {}
const newObj = JSON.parse(JSON.stringify(obj));
console.log(newObj === obj) // false

const deepClone = (obj) => {
    if (typeof obj !== "object" || obj === null) return obj;

    const newObject = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        const value = obj[key];
        newObject[key] = deepClone(value);
    }

    return newObject;
}
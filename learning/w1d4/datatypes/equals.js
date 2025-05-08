console.log(1 === "1"); // false
console.log(1 == "1"); // true

console.log(0 == ''); // true

const my_object = undefined;
console.log(my_object == null); // true, the only place that should use "=="

const arr = [1];
let arr1 = arr;
console.log(arr == arr1.push(4))
"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
function render(doc) {
    console.log(doc);
}
let numbers = [1, 2, 3];
let user = [1, "Mosh"];
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: "Bob",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(100);
//# sourceMappingURL=index.js.map
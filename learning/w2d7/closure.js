// Scope
function doSomething() {
    console.log(x, y, z);
}
let x = 10;
const y = 20;
var z = 30;
doSomething();


// Closure
function outer(x) {
    function inner(y) {
        return x + y;
    }
    return inner;
}

const outerReturn = outer(10);
console.log(outerReturn); // [Function: inner]
console.log(outerReturn(3)) // 13, x=10 is kept
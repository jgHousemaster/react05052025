function printMe() {
    console.log('printing...');
}

printMe();

// Parameters
function printThis(param) {
    console.log(param);
}

// Argument
printThis('args')

const printMeConst = function () {
    console.log('print')
}

// rest parameter
function collectThings(x, ...y) {
    console.log(x);
    console.log(y);
}

collectThings(1, 2, 3, 4, 5);

// Fat arrow function
const add = (x, y) => x + y; // => { return x + y }

console.log(add(2, 3));

function outer() {
    console.log("outer");
    inner();

    function inner() {
        console.log("inner");
    }
}

outer();
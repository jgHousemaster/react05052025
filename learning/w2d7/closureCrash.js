let myName = 'Kyle'

function printName() {
    console.log(myName);
}

myName = 'Bob';

printName();

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    }
}

const newFunction = outerFunction('outside')
newFunction('inside')
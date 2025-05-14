const buildSandwich = (a) => {
    return (b) => {
        return (c) => {
            return `${a}, ${b}, ${c}`;
        }
    }
}

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato");
console.log(mySandwich)

const buildSammy = a => b => c => `${a}, ${b}, ${c}`;
console.log(buildSammy("Bacon")("Lettuce")("Tomato"))

const multiply = (x, y) => x * y;
const curriedMultiply = x => y => x * y;

// Partially applied curried function
const first = curriedMultiply(3);
const last = first(4);
console.log(last)
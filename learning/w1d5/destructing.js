// Arrays

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
const numbers = ['1', '2', '3', '4', '5', '6']

const [a, , c, ...rest] = alphabet

console.log(a)
console.log(c)
console.log(rest)

const newArray = [...alphabet, ...numbers]
console.log(newArray)

function sumAndMultiply(a, b) {
    return [a+b, a*b]
}

const [sum, mul, div = "No Division"] = sumAndMultiply(2, 3)
console.log(sum, mul, div)

// Objects

const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'UT'
    }
};

const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'New York',
        state: 'NY'
    }
}

const { name: firstName = 'No Name', age, fav = 'Rice', ...rest1 } = personTwo // Based on key

console.log(firstName)
console.log(fav)
console.log(rest1)

const {address: {city}} = personTwo
console.log(city)

const personThree = {...personOne, ...personTwo} // Combine
console.log(personThree)

function printUser({name, age, fav = "Watermelon"}) {
    console.log(`Name is ${name}, age is ${age}, fav is ${fav}`)
}

printUser(personThree)
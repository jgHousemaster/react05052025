// Pure function
function sayGreeting(name) {
    return `Hello ${name}`;
}

console.log(sayGreeting('Bob'))

const greeting = 'Hello'

// Might have side effect (with different greeting value)
function sayGreeting2(name) {
    return `${greeting} ${name}`
}
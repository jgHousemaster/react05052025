const person = {
    name: 'Bob',
    address: {
        street: 'xxx Road'
    }
}

function printPersonState (person) {
    console.log(person?.address?.state) // undefined with no error
}

printPersonState(person)

person.printName?.() // Nothing happens

console.log(person.hobbies?.[0]) // undefined

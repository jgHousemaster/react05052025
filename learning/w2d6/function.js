const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}


const person1 = {
    firstName: "John",
    lastName: "Doe"
}

// call(), takes args separately
console.log(person.fullName.call(person1));

const obj = {name: "John"};

const greeting = function (a, b) {
    return `${a} ${this.name}. ${b}`;
}

// apply(), take args as an array
console.log(greeting.apply(obj, ["Hello", "How are you?"]));

const numbers = [1, 2, 3, 4, 5];
// Math.max() doesn't accept array as arg
console.log(Math.max.apply(null, numbers));

// bind()
const bound = greeting.bind(obj);
console.log(bound("Hello", "How are you?"))
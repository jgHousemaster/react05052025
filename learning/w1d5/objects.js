const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function() {
        console.log("Hi! I am Spongebob!")},
    sayBye: function () {
        console.log("Goodbye!")},
    eat: function () {
        console.log("I'm eating")
    },
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey, I'm Patrick..."),
    sayBye: function () {
        console.log("Bye...")},
    eat: () => {
        console.log("I'm eating...")
    }
};

person1.sayHello();
console.log(person1.age)
person1.age = 10;
console.log(person1.age)

console.log(person1["age"]); // If key is a string, need to use [] rather than .

person2.eat();
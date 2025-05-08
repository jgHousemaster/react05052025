const data_types = [];

// Number
data_types.push(7);
data_types.push(1.72);

// String
data_types.push('rice')

// Boolean
data_types.push(1 < 10);

// Big Number
data_types.push(1234567890987654321n)

// Undefined
let variable;
data_types.push(variable);


// Array
data_types.push([1, 2, 3]);

// Function
function hello() {
    console.log('Hello')
}
data_types.push(hello);

// Object
const character = {
    name: 'Bob',
    age: 20
}
data_types.push(character);

for (let i = 0; i < data_types.length; i++) {
    console.log(`Data: ${data_types[i]}, Data Type: ${typeof data_types[i]}`);
}
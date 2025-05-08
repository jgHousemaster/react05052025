// Type Conversion

const input_age = "23";
const age = Number(input_age);

const not_a_number = Number("pizza");
console.log(not_a_number, typeof not_a_number); // NaN number

console.log(Boolean("")); // false

// Type Coercion

const num_string = 10 + "";
console.log(num_string, typeof num_string); // 10 string
const string_num = num_string - 2;
console.log(string_num, typeof string_num); // 8 number

console.log(Boolean(0)); // false

console.log(+"12" + 2); // 14

console.log(Number("123 aaa")); // NaN
console.log(parseInt("123 aaa")); // 123
const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  const people_array = Object.values(people); // [{name: ..., age: 18}, ...]
  return people_array.reduce((total, person) => {
    return total += person.age;
  }, 0) / people_array.length;
};

// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false
    if (str.length === 0) {
        return false;
    }
    for (const char of str) {
        if (!(char >= "0" && char <= "9")) {
            return false;
        }
    }
    return true;
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
    if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    let amount = 0;
    for (const num of arr) {
        if (!isNaN(Number(num))) {
            sum += Number(num);
            amount++;
        }
    }
    if (amount > 0) {
        return sum / amount;
    } else {
        return 0;
    }
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
    if (people.length === 0) {
        return 0;
    }
    let sum = 0;
    for (const person of people) {
        sum += person.age;
    }
    return sum / people.length;
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)
    if (people.length === 0) {
        return 0;
    }
    let sum = 0;
    let amount = 0;
    for (const person of people) {
        if (person.job === job) {
           sum += person.age;
           amount++;
        }
    }
    if (amount === 0) {
        return 0;
    }
    return sum / amount;
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
    if (arr.length === 0) {
        return 0;
    }
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
    const words = str.split(" ");
    if (words.length === 0) {
        return "";
    }
    let result = 0;
    let max_length = words[0].length;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > max_length) {
            result = i;
            max_length = words[i].length;
        }
    }
    return words[result];
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
    const result = [];
    for (const num of arr) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
    return result;
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]
    const result = [...num];
    if (result.length < 2) {
        return result;
    }
    for (let i = 0; i < result.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j+1] < result[j]) {
                [result[j], result[j+1]] = [result[j+1], result[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return result;
}

export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.
    if (num.length < 2) {
        return num;
    }
    for (let i = 0; i < num.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < num.length - 1 - i; j++) {
            if (num[j] > num[j+1]) {
                [num[j], num[j+1]] = [num[j+1], num[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return num;
}

export function removeTypes(arr, typeToRemove) {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]
    const result = [];
    for (const e of arr) {
        if (typeof e !== typeToRemove) {
            result.push(e);
        }
    }
    return result;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
    return nums.map(num => {
        switch (operator) {
            case "+":
                return num + amount;
            case "-":
                return num - amount;
            case "*":
                return num * amount;
            case "/":
                return num / amount;
        }
    })
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
    if (nums.length < 1) {
        return nums;
    }
    const result = [];
    for (let e of nums) {
        if (e !== num) {
            result.push(e);
        }
    }
    return result;
}

const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Async Task 1");
        reject("hh");
    }, 500);
});

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Async Task 2");
    }, 2000);
});

const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Async Task 3");
    }, 1000);
});

const myPromises = [myPromise1, myPromise2, myPromise3];
Promise.all(myPromises)
    .then(res => console.log(res))
    .catch((err) => console.log("ALL: ERROR!")); // [ 'Async Task 1', 'Async Task 2', 'Async Task 3' ]

Promise.allSettled(myPromises)
    .then(res => console.log(res))
    .catch((err) => console.log("ERROR!"));
// [
//     { status: 'rejected', reason: 'hh' },
//     { status: 'fulfilled', value: 'Async Task 2' },
//     { status: 'fulfilled', value: 'Async Task 3' }
// ]

Promise.any(myPromises)
    .then(res => console.log(res))
    .catch((err) => console.log("ERROR!"));
// Async Task 3

Promise.race(myPromises)
    .then(res => console.log(res))
    .catch((err) => console.log("RACE: ERROR!"));
// ERROR


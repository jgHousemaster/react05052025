// use both .then and async/await to write, including error handling
//  fetch API from jsonplaceholder
//  write a promise-based function that return a random number after a delay
//  use Promise.all to write an example

function getToDo(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(json => resolve(json));
    })
}

async function getTitles(ids) {
    const result = [];
    for (let id of ids) {
        const toDo = await getToDo(id);
        result.push(toDo.title);
    }
    console.log(result);
}

getTitles([1, 2]);

function getRandomNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(Math.floor(Math.random() * 100));
        })
    })
}

getRandomNum().then((num) => console.log(num));

const myPromises = [getToDo(3), getRandomNum()];
Promise.all(myPromises).then((res) => {
    console.log(res);
})

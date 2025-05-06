// 选择器的五种使用方法
// Use id
const title = document.getElementById('main-heading');
console.log(title);

// Use Class
const listItem = document.getElementsByClassName('list-items');
console.log(listItem);

// Use Tag
const listItems = document.getElementsByTagName('li');
console.log(listItems);

// 只会返回第一个
const container = document.querySelector('div');
console.log(container);

// 选择所有
const containers = document.querySelectorAll('div');
console.log(containers);


// Styling
const title = document.querySelector('#main-heading');

title.style.color = 'red';

const listItems = document.querySelectorAll('.list-items');
for (let listItem of listItems) {
    listItem.style.fontSize = '5rem'
}

// Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Elements
ul.append(li);

// Modifying text

// const firstListItem = document.querySelector('.list-items');
//
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);
li.innerText = 'X-men';

// Modifying Attr & Class

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');
//
// const title = document.querySelector('#main-heading');
//
// console.log(title.getAttribute('id'));

// li.classList.add('list-items')

// Remove Elements

li.remove();
const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also like JS');
};

buttonTwo.addEventListener("click", alertBtn);

// Mouseover

const newBackgroungColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroungColor.style.backgroundColor = 'blue';
    const header = document.querySelector('#exm-3');
    header.style.color = 'white';
};

newBackgroungColor.addEventListener("mouseover", changeBgColor);

// reveal
const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if(hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
    } else {
        hiddenContent.classList.add('reveal-btn');
    }
}

revealBtn.addEventListener("click", revealContent);


// Event Delegation 事件委托
document.querySelector('#sports').addEventListener('click', function (e) {
    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    } else {
        target.style.backgroundColor = 'yellow';
    }
});

const sports = document.querySelector('#sports');
const newItem = document.createElement('li');

newItem.innerText = 'rugby';
newItem.setAttribute('id', 'rugby');

sports.appendChild(newItem);


// document.querySelector('#football').addEventListener('click', function (e) {
//     console.log('football is clicked');
//     const target = e.target;
//     console.log(target);
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey';
//     }
// });
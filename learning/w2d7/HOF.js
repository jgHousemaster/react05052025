// Higher Order Function
function getCapture(camera) {
    camera();
}

getCapture(function () {
    console.log('Canon')
})

function returnFn() {
    return function () {
        console.log('returning')
    }
}
const fn = returnFn();
console.log(fn)
fn()
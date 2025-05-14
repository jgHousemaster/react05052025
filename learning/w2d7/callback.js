// Function as parameter
function foo(bar) {
    bar();
}

// Anonymous function
foo(function () {
    console.log('bar')
})
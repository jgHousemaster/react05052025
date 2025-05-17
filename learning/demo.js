// writes an example of a closure that generates a random number between 0 and 100 with initiated and logs
// the password is "##" when invoked

function generatePassword() {
    const result = Math.floor(Math.random() * 100);

    return () => {
        console.log(result);
    }
}

generatePassword()();

// Modify the closure above to memoize an objective of name <-> passcode pairs, and log a passcode for a given name from cache. For instance, every time 'logPasscode('peter')' is run, the function should log "The passcode is ##" with the specific passcode generated for 'Peter';

function generatePassword2() {
    const passwords = {};

    return (name) => {
        if (!passwords[name]) {
            // User not exists, generate the password
            passwords[name] = {};
            passwords[name].password = Math.floor(Math.random() * 100);
            passwords[name].time = Date.now();
        } else {
            // User exists
            if (Date.now() - passwords[name].time > 1000) {
                // Expired, re-generate the password
                passwords[name].password = Math.floor(Math.random() * 100);
                passwords[name].time = Date.now();
                // console.log("Password Expired");
            }
            // Still valid, just print the password
        }
        console.log(`The passcode is ${passwords[name].password}`);
    }
}

const myGen = generatePassword2();
myGen("Helen");
myGen("Peter");
myGen("Helen");

setTimeout(() => {
    myGen("Helen");
}, 2000);

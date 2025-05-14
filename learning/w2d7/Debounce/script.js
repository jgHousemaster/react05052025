const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDeboundText = debounce((text) => {
    debounceText.textContent = text;
})

const updateThrottleText = throttle((text) => {
    throttleText.textContent = text;
})

input.addEventListener("input", e => {
    defaultText.textContent = e.target.value;
    updateDeboundText(e.target.value);
    updateThrottleText(e.target.value);
})

function debounce(cb, delay = 1000) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

function throttle(cb, delay = 1000) {
    let shouldWait = true;
    let waitingArgs
    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
            return
        };

        cb(...args)
        shouldWait = true

        setTimeout(timeoutFunc, delay)
    }
}
Array.prototype.myForEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        callbackFn(this[i], i, this); // element, index, array
    }
};

Array.prototype.myMap = function (callbackFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callbackFn(this[i], i, this));
    }
    return result;
};

Array.prototype.myFilter = function (callbackFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

Array.prototype.myReduce = function (callbackFn, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callbackFn(accumulator, this[i], i, this);
    }
    return accumulator;
};
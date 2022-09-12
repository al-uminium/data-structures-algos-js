const sumRange = (num) => {

    //exit condition
    if (num == 1) return 1;

    return num + sumRange(num-1);
}

//sumRange(3) = 3 + sumRange(2)
//sumRange(2) = 2 + sumRange(1)
//sumRange(1) = 1

const power = (x,y) => {

    // base case - if exponent is 0
    if (y === 0) return 1;

    return x * power(x,y-1);
}

//power(2,4) = 2 * power(2,3) = 2 * 8 
//power(2,3) = 2 * power(2,2) = 2 * 4
//power(2,2) = 2 * power(2,1) = 2 * 2
//power(2,1) = 2 * power(2,0) = 2 * 1
//power(2,0) = 1

const factorial = (x) => {

    // base case
    if (x === 1) return 1;

    return x * factorial(x-1)
}

// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1

const all = (array, callback) => {
    let copy = array;

    if (copy.length === 0) return true;

    if (callback(copy[0])) {
        copy.shift()
        return all(copy, callback)
    } else {
        return false
    }
}

const isAllBelowSeven = all([1,2,3,4], function (num) {
    return num < 7;
});

// the general idea is that if it is true (base case), it removes the element from the array. if all is true, there will be nothing in the array.
// if it doesn't, just return false

//Product of an array

const productOfArray = (arr) => {

    if (arr.length === 0) return 1;

    if (arr[0]) {
        return arr.shift() * productOfArray(arr);
    }
}

//productOfArray([4,2]) -> arr.shift() [4] * productOfArray([2]) -> arr.shift() [2] * productOfArray([]) = 1 
// ^ very brainfucky lol

//Contains

const contains = (obj, value) => {
    for (const key in obj) {
        if (typeof obj[key] === "object") {
            return contains(obj[key], value)
        }

        if (obj[key] === value) {
            return true;
        }
    }

    return false
}

// if obj has child properties, and child properties are an object, loop into the child. return false if all child properties have been looped.
// base case -- if the object's key is the value, return true

// parse multidimensional arrays
const totalIntegers = (arr) => {
    let sum = 0;
    for (const item of arr) {
        if (Array.isArray(item)) {
            //if sum is not called here (e.g., if it was just "totalIntegers(item)", the sum from the callback will not be "saved");
            sum += totalIntegers(item);
        } else if (Number.isInteger(item)) {
            sum += 1;
        }
    }
    return sum
}

//sumSquares
const sumSquares = (arr) => {
    let sum = 0;

    for (const item of arr) {
        if (Array.isArray(item)) {
            sum += sumSquares(item)
        } else if (Number.isInteger(item)) {
            sum += item**2
        }
    }
    return sum
}

//replicate
const replicate = (times, number) => {
    let arr = [];
    if (times === 0) {
        return arr;
    } else if (number > 0) {
        arr.push(number);
        // recursive call returns an array, need to concat the arrays
        return arr.concat(replicate(times-1, number));
    } else if (number < 0) {
        return arr;
    }
};
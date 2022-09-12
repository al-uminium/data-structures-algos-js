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


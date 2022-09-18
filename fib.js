const fibs = (num) => {
    if (num === 0) return [0];

    if (num === 1) return [0, 1];

    let arr = [0, 1]; 

    let firstNum = 0, secondNum = 1;
    let fibSecondLastNum = num-2, fibLastNum = num-1;

    while (firstNum != fibSecondLastNum && secondNum != fibLastNum) {
        let sum = arr[firstNum] + arr[secondNum];
        arr.push(sum); 
        firstNum++
        secondNum++
    }

    return arr
}

const fibsRec = (num) => {
    let arr;
    if (num === 0) return [0]
    if (num === 1) return [0,1]
    if (num > 1) {
        arr = fibsRec(num-1);
        arr.push(arr[arr.length-1]+arr[arr.length-2])
        return arr
    }
}

//fibs(3) = fibs(2).concat[2]
//fibs(2) = fibs(1).concat[1]
//fibs(1) = [0,1]
//fibs(0) = [0]
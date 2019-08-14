function reverseArray(array) {
    let reversed = [];

    for (let current of array) {
        reversed.unshift(current);
    }

    return reversed;
}

function reverseArrayInPlace(array) {
    let temp;
    let length = array.length;
    for (let i = 0; i < length / 2; i++) {
        temp = array[i];
        array[i] = array[length - i - 1];
        array[length - i - 1] = temp;
    }
}

console.log(`reverseArray([1, 2, 3]): ${reverseArray([1, 2, 3])}`);

let array = [1, 2, 3];
console.log(`array: ${array}`);

reverseArrayInPlace(array);
console.log(`reverseArrayInPlace(array): ${array}`);

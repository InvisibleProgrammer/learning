function range(start, end, step = 1) {
    let result = [];
    for (let i = start; i <= end; i += step) {
        result.push(i);
    }

    return result;
}

function sum(array) {
    let sum = 0;

    for (let current of array) {
        sum += current;
    }

    return sum;
}

console.log(`range(1, 10): ${range(1, 10)}`);
console.log(`sum(range(1, 10)): ${sum(range(1, 10))}`);

console.log(`range(1, 10, 2): ${range(1, 10, 2)}`);
console.log(`sum(range(1, 10, 2)): ${sum(range(1, 10, 2))}`);

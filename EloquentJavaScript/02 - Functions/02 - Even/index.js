function isEven(x) {
    if (x < 0) {
        return null;
    }

    if (x === 0) {
        return true;
    }

    if (x === 1) {
        return false;
    }

    return (isEven(x - 2));
}

console.log(`isEven(0): ${isEven(0)}`);
console.log(`isEven(1): ${isEven(1)}`);
console.log(`isEven(-10): ${isEven(-10)}`);
console.log(`isEven(10): ${isEven(10)}`);
console.log(`isEven(13): ${isEven(13)}`);
console.log(`isEven(50): ${isEven(50)}`);
console.log(`isEven(75): ${isEven(75)}`);
console.log(`isEven(-1): ${isEven(-1)}`);

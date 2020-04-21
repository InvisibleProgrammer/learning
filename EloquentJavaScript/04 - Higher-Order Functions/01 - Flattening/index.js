
const flatten = function (arrays) {
    return arrays.reduce((array, concatenated) => array.concat(concatenated))
}

const test = [[1, 2, 3], [4, 5], [6]]

console.log(flatten(test))


const testArray = ['hello', 'world', 'of', 'arrays'];

console.log(flatten(testArray));

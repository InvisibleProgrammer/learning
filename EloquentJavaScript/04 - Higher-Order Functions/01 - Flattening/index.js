function flatten (...arrays) {
    let flattenedArray = [];

    flattenedArray = arrays.reduce((a, b) => a.concat(b));

    return flattenedArray;
}

const testArray = ['hello', 'world', 'of', 'arrays'];

console.log(`flatten(testArray): ${flatten(testArray)} `);

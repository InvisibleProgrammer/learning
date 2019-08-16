function everyWithLoop(arrayToTest, test) {
    for (let element of arrayToTest) {
        if (!test(element)) {
            return false;
        }
    }
    
    return true;
}

function everyWithSome(arrayToTest, test) {
    let positive = arrayToTest.some((element) => { !test(element); });
    
    console.log(`array: ${arrayToTest} - result : ${ positive}`);
    return positive;
}
// T:  false false
// F: false false
const arrayToTest = [1,  3, 5, 7];
const arrayToTest2 = [1, 4, 3, 5, 7];

// console.log(arrayToTest.every((element) => { return element % 2 == 1; }));

console.log(everyWithLoop(arrayToTest, (element) => { return element % 2 == 1; }));
console.log(everyWithLoop(arrayToTest2, (element) => { return element % 2 == 1; }));

console.log(everyWithSome(arrayToTest, (element) => { return element % 2 == 1; }));
console.log(everyWithSome(arrayToTest2, (element) => { return element % 2 == 1; }));
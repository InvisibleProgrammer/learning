function deepEqual (first, second) {
    if (!first || !second) {
        return false;
    }

    let typeOfFirst = typeof first;
    let typeOfSecond = typeof second;

    if (typeOfFirst !== typeOfSecond) {
        return false;
    }

    if (typeOfFirst !== 'object') {
        return first === second;
    }

    let firstKeys =  Object.keys(first);
    let secondKeys = Object.keys(second);

    if (firstKeys.length != secondKeys.length){
        return false;
    }

    for (let name of firstKeys) {
        if (first[name] !== second[name]){
            return false;
        }
    }

    return true;
}

let nullFirst = null;
let nullSecond = null;

console.log(`deepEqual(nullFirst, nullSecond): ${deepEqual(nullFirst, nullSecond)}`);

let numberFirst = 1
let numberSecond = 2;
console.log(`deepEqual(nullFirst, numberSecond): ${deepEqual(nullFirst, numberSecond)}`);
console.log(`deepEqual(numberFirst, numberSecond): ${deepEqual(numberFirst, numberSecond)}`);
console.log(`deepEqual(numberSecond, numberSecond): ${deepEqual(numberSecond, numberSecond)}`);

let stringFirst = 'Hello';
let stringSecond = 'World';

console.log(`deepEqual(stringFirst, numberSecond): ${deepEqual(stringFirst, numberSecond)}`);


console.log(`deepEqual(stringFirst, stringSecond): ${deepEqual(stringFirst, stringSecond)}`);
console.log(`deepEqual(stringFirst, stringFirst): ${deepEqual(stringFirst, stringFirst)}`);

let objectFirst = {
    firstName: 'john',
    lastName: 'doe'
};
let objectSecond = {
    firstName: 'nick',
    lastName: 'furry'
};
let objectThird = {
    firstName: 'nick',
    lastName: 'furry',
    nickName: 'oneEyedBoss'
}

console.log(`deepEqual(objectFirst, objectFirst): ${deepEqual(objectFirst, objectFirst)}`);
console.log(`deepEqual(objectFirst, objectSecond): ${deepEqual(objectFirst, objectSecond)}`);
console.log(`deepEqual(objectFirst, objectThird): ${deepEqual(objectFirst, objectThird)}`);
console.log(`deepEqual(objectSecond, objectThird): ${deepEqual(objectSecond, objectThird)}`);

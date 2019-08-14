function arrayToList(array) {
    let head = {
        value: array[0],
        rest: null
    };

    let next = head;

    for (let i = 1; i < array.length; i++) {
        let newElement = {
            value: array[i],
            rest: null
        };

        next.rest = newElement;

        next = newElement;
    }

    return head;
}

const array = [1, 2, 3];
console.log(`arrayToList(array): ${JSON.stringify(arrayToList(array))}`);

function listToArray(list) {
    let array = [];

    while (list) {
        array.push(list.value);
        list = list.rest;
    }

    return array;
}

let list = arrayToList(array);

console.log(`listToArray: ${listToArray(list)}`);

function prepend(list, element) {
    if (!list) {
        return element;
    }

    element.rest = list;

    return element;
}

let element = {
    value: 100,
    rest: null
};

list = prepend(list, element);
console.log(`prepend(element, list): ${JSON.stringify(list)}`);

function nth(list, position) {
    if (position <= 1) {
        return list;
    }

    if (!list) {
        return undefined;
    }

    return (nth(list.rest, position - 1));
}

console.log(`nth(list, 2): ${JSON.stringify(nth(list, 2))}`);
console.log(`nth(list, 1): ${JSON.stringify(nth(list, 1))}`);
console.log(`nth(list, 4): ${JSON.stringify(nth(list, 4))}`);
console.log(`nth(list, 100): ${JSON.stringify(nth(list, 100))}`);

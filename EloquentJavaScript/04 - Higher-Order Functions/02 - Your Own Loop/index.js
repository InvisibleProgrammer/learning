function yourOwnLoop(value, testFunction, bodyFunction, updateFunction){
    for (let i = 0; testFunction(i, value); i = updateFunction(i) ){
        bodyFunction(i, value);
    }
}

let value = ['apple', 2, 3, 'peanuts', 5];
const testFunction = (i, array, predicate) => { return predicate(i, array) }; 
const bodyFunction = (value, action) => { action(value) };
const updateFunction = (value, action) => { value = action(value); };

console.log(value);

yourOwnLoop(
    value,
    (i, value) => { return i < value.length; },
    (i, value) => {
        if (typeof(value[i]) == 'number'){
            console.log(value[i]);
        }
    },
    (i) => { return i + 1; }
);

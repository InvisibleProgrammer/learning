class Rabbit{
    constructor(type){
        this.type = type
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");


// overriding derived prototypes

Rabbit.prototype.teeth = "small"
console.log(killerRabbit.teeth)
//small
killerRabbit.teeth = "long, sharp, and bloody"
console.log(killerRabbit.teeth)
//class-notation.js:21
console.log(blackRabbit.teeth)
//small
console.log(Rabbit.prototype.teeth)
//small

// use objects as maps: we don't have prototype
let mapObject = Object.create(null)

console.log("toString" in mapObject)
// false

// or we can use the map object
let ages = new Map()

ages.set("Boris", 39)
ages.set("Liang", 22)
ages.set("Julia", 62)

console.log(`Julia's age is ${ages.get('Julia')}`)
console.log(`Is Jack's age known?, `, ages.has('Jack'))
console.log(ages.has("toString"))


// we can list the object's own keys (without the prototypes)
console.log(Object.keys(killerRabbit))

console.log(killerRabbit.hasOwnProperty('teeth'))

console.log(killerRabbit.hasOwnProperty('toString'))


console.log(blackRabbit)

// let's overwrite toString
Rabbit.prototype.toString = function(){
    return `a ${this.type} rabbit`
}

console.log(blackRabbit) // not in that way. No autmatic toString call on console.log
console.log(blackRabbit.toString()) // maybe because there is no strongly typing system.
console.log(String(blackRabbit))// it calls the toString method

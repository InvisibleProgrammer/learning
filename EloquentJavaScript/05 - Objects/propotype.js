let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]

console.log(Object.getPrototypeOf({}) == Object.prototype) 
// true
console.log(Object.getPrototypeOf(Object.prototype))
// null


console.log(Object.getPrototypeOf(Math.max) == Function.prototype)
// true
console.log(Object.getPrototypeOf([]) == Array.prototype)
// true



let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`) 
    }
}

let killerRabbit = Object.create(protoRabbit)
killerRabbit.type = 'killer'
killerRabbit.speak("SKREEE!")


function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit)
    rabbit.type = type
    return rabbit
}

function Rabbit(type){
    this.type = type
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says ${line}`)
}

let weirdRabbit = new Rabbit("weird");

weirdRabbit.speak("hello")

console.log(Object.getPrototypeOf(Rabbit) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) ==
            Rabbit.prototype);
// → true



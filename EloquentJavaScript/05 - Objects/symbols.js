let sym = Symbol('name')
console.log(sym == Symbol('name'))

class Rabbit{
    constructor(type){
        this.type = type
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}


Rabbit.prototype[sym] = 55;

let blackRabbit = new Rabbit()

console.log(blackRabbit[sym])


const toStringSymbol = Symbol('toString')
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn` 
}

console.log([1, 2].toString())
console.log([1, 2][toStringSymbol]())

let stringObject = {
    [toStringSymbol]() { return 'a jute rupe' }
}

console.log(stringObject[toStringSymbol]())

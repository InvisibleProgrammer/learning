let rabbit = {}

rabbit.speak = function(line){
    console.log(`the ${this.type} rabbit says ${line}`)
}

console.log(this)
console.log(this.type)

rabbit.speak("I'm alive")


function speak (line){
    console.log(`the ${this.type} rabbit says ${line}`)
}

let whiteRabbit = { type: "white", speak}
let hungryRabbit = { type: "hungry", speak}

whiteRabbit.speak("Oh my ears and whiskers, how late is getting")
hungryRabbit.speak("I could use a carrot right now")


console.log('hi')
speak.call(hungryRabbit, "Burp!")


function normalize(){
    console.log(this.coords.map( n => n / this.length))
}

normalize.call({coords: [0, 2, 3], length: 5 })


let empty = {}
console.log(empty.toString)
// [object Object]
console.log(empty.toString())
// [object Object]



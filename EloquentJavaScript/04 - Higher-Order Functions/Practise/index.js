require('./scripts.js')

// Filtering arrays

function filter(array, test) {
    let passed = []

    for (let element of array) {
        if (test(element)) {
            passed.push(element)
        }
    }

    return passed
}

console.log(filter(SCRIPTS, script => script.living))


// Map

function map(array, transform) {
    let mapped = []

    for (let element of array) {
        mapped.push(transform(element))
    }

    return mapped
}

let rtlScripts = SCRIPTS.filter(s => s.direction === 'rtl')

console.log(map(rtlScripts, s => s.name))

function reduce(array, combine, start) {
    let current = start

    for (let element of array) {
        current = combine(current, element)
    }

    return current
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0))

// There is a standard array reduce method as well that doesn't require start parameter

console.log([1, 2, 3, 4].reduce((a, b) => a + b))

// use double reduce

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from)
    }, 0)
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a
}))

// Compose higher-order functions

function average(array) {
    return array.reduce((a, b) => a + b) / array.length
}

console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year)
)))

console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year)
)))

// Decide what script a piece of text is using

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to
        })) {
            return script
        }
    }

    return null
}

console.log(characterScript(121))


// count By

function countBy(items, groupName) {
    let counts = []

    for (let item of items) {
        let name = groupName(item)
        let known = counts.findIndex(c => c.name == name)

        if (known == -1) {
            counts.push({ name, count: 1 })
        } else {
            counts[known].count++
        }
    }

    return counts
}

console.log(JSON.stringify(countBy([1, 2, 3, 4], n => n > 2)))

// using count by, we can decide which scripts are used in a text

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0))

        return script ? script.name : "none"
    }).filter(({ name }) => name != "none")

    let total = scripts.reduce((n, { count }) => n + count, 0)
    if (total == 0)
        return "No scripts found"

    return scripts.map(({ name, count }) => {
        return `${Math.round(count * 100 / total)}% ${name}`
    }).join(", ")
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
console.log(textScripts('       """"" '));


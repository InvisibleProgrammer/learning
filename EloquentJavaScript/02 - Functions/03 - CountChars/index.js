function countChar(text, char) {
    if (typeof(text) != 'string'){
        return null;
    }

    const length = text.length;
    let characterCounter = 0;

    if (length === 0) {
        return null;
    }

    for (let i = 0; i < length; i++){
        if (text[i] === char) {
            characterCounter += 1;
        }
    }

    return characterCounter;
}

console.log(`countChar(null, 'a'): ${countChar(null, 'a')}`);
console.log(`countChar(undefined, 'a'): ${countChar(undefined, 'a')}`);
console.log(`countChar('', ''): ${countChar('', '')}`);
console.log(`countChar('apple', 'a'): ${countChar('apple', 'a')}`);
console.log(`countChar('apple', 'p'): ${countChar('apple', 'p')}`);

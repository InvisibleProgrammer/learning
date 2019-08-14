const lastNumber = 100;

for (let current = 0; current <= lastNumber; current++) {
    if (current % 3 == 0 && current % 7 == 0){
        console.log('FizzBuzz');
    } else if (current % 3 == 0) {
        console.log('Fizz');
    } else if (current % 7 == 0) {
        console.log('Buzz');
    }
    
    console.log(current);
}
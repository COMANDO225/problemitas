
const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        i % 3 === 0 && i % 5 === 0
        ? console.log(`${i} - es FizzBuzz causa`)
        : i % 3 === 0
        ? console.log(`${i} - es Fizz`)
        : i % 5 === 0
        ? console.log(`${i} - es Buzz`)
        : console.log(i);
    }
}

fizzBuzz();

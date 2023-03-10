// Creo le varialibili per Fizz e Buzz
const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz = "FizzBuzz";


// Creo i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    const isDivisibleFor3 = (i % 3 === 0);
    const isDivisibleFor5 = (i % 5 ===0);
    if (isDivisibleFor3 && isDivisibleFor5) {
        console.log(i, fizzBuzz);
    } else if (isDivisibleFor3) {
        console.log(i, fizz);
    } else if (isDivisibleFor5) {
        console.log(i, buzz);
    } else {
        console.log(i);
    }
}
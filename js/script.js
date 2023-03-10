// Creo le varialibili per Fizz e Buzz
const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz = "FizzBuzz";


// Creo i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Creo variabili di blocco per frammentare le condizioni
    const isDivisibleFor3 = (i % 3 === 0);
    const isDivisibleFor5 = (i % 5 ===0);
    // Inizio quando entrambe sono verificate
    if (isDivisibleFor3 && isDivisibleFor5) {
        console.log(i, fizzBuzz);
        // Altrimenti stampo i divisibili per 3
    } else if (isDivisibleFor3) {
        console.log(i, fizz);
        //Altrimenti stampo i divisibili per 5
    } else if (isDivisibleFor5) {
        console.log(i, buzz);
        //Tutti i restanti che non soddisfano le condizioni precedenti li stampo così come sono
    } else {
        console.log(i);
    }
}
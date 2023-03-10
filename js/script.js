// Creo le varialibili per Fizz e Buzz
const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz = "FizzBuzz";

// Creo una variabile per prendere l'elemento .grid
const gridElem = document.querySelector(".grid");
// Creo due variabili di appoggio che che valorizzerò in seguito
let result;
let bgColor;


// Creo i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Creo variabili di blocco per frammentare le condizioni
    const isDivisibleFor3 = (i % 3 === 0);
    const isDivisibleFor5 = (i % 5 ===0);
    // Inizio quando entrambe sono verificate e conservo l'informazione nella variabile di appoggio
    if (isDivisibleFor3 && isDivisibleFor5) {
        console.log(i, fizzBuzz);
        result = fizzBuzz;
        bgColor = "yellow";
        // Altrimenti stampo i divisibili per 3 e conservo l'informazione nella variabile di appoggio
    } else if (isDivisibleFor3) {
        console.log(i, fizz);
        result = fizz;
        bgColor = "red";
        //Altrimenti stampo i divisibili per 5 e conservo l'informazione nella variabile di appoggio
    } else if (isDivisibleFor5) {
        console.log(i, buzz);
        result = buzz;
        bgColor = "blue";
        //Tutti i restanti che non soddisfano le condizioni precedenti li stampo così come sono e conservo l'informazione nella variabile di appoggio
    } else {
        console.log(i);
        result = i;
        bgColor = "";
    }
    // Creo, per ogni ciclo, un div con la classe .box e rispettivo colore all'interno del container .grid
    gridElem.innerHTML += `<div class="box ${bgColor}">${result}</div>`;

}
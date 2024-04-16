/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) { //era sbagliato il segno in quanto scrivendo i > 5 il ciclo nonn sarebbe mai partito
    //console.log(i);
} // ciclo for per che cicla per 5 volte


// ESERCIZIO 2
function addIfEven(num) { //era presenta un errore di sintassi in quanto dovevamo dire che il resto era zero,dunque non con un uguale ma con 3
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
} // funziona che, nel caso in cui il numero sia pari lo restituisce incrementato di 5 altrimenti restituisce solo il numero iniziale


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) { // era presente un errore di sintassi in quanto nell'impostazione del ciclo for tra la dichiarazione, la condizione e l'incfremento bisogna mettere il punto e virgola
        console.log(i);
    } // funzione che cicla per 5 volte
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) { // era presenta un punto e virgola in più (dopo l'incremento) ed un altro dopo la condizione dell'if che impediva di entrare nel caso in cui la condizione fosse vera ed era nuovamente sbagliato la condizione dato che bisogna inserire 3 uguali e non 1 , in più non bisognava nella condzione del ciclo for mettere array.length -1 perchè non avrebbe preso l'ultimo numero. Era sbagliato anche la condizione nell'if in quanto non era numbers % 2 === 0, ma numbers[i] % 2 === 0;
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(displayEvenNumbers ());
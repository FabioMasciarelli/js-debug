/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'diesel' // D grande
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },// mancava una virgola
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'benzina'// B grande
    },
];

const gasolineCars = cars.filter( (auto) => { // cars. filter per entrare nell'array
    return auto.type === 'benzina'; // bisogna inserire la condizione nel return
}); // non era definitva bene l'arrow function

const dieselCars = cars.filter( (auto) => {// cars. filter per entrare nell'array
    return auto.type === 'diesel';// bisogna inserire la condizione nel return
});

const otherCars = cars.filter( (auto) => { // cars. filter per entrare nell'array
    return auto.type !== 'benzina' && auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);
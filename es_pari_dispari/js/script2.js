/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */


// l'utente sceglie se pari o dispari 

const userChoice = prompt("Pari o Dispari?").toLowerCase();


//faccio inserire un numero da 1 a 5

const userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));

//creo una funzione per generare un numero random da 1 a 5 per il computer
function numRandom(){
    return Math.floor(Math.random() * 5 ) + 1;
}

//risultato del computer
const pcNum = numRandom ();
console.log("Il numero del pc è:", pcNum);

//sommo user+pc

const sum = userNum + pcNum; 
console.log("Somma:", sum);

//creo una funzione per capire se è pari o dispari

function evenOrOdd(number){
    if(number % 2 === 0){
        return "pari";
    }
    else{
        return "dispari";
    }
}

//Risultato 

const result = evenOrOdd(sum);

//annuncio il vincitore 

if (result === userChoice){
    console.log("Hai vinto!")
}
else{
    console.log("Hai perso :( ")
}
/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//creo un prompt che chieda all'utente di inserire una parola 

const wordImput = prompt('Inserisci qui una parola');


//creo funzione per verificare che la mia parola sia palindroma

function isPalindroma(word){
    let reversed = "";


//inverto la parola inserita creando un ciclo

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

//controllo se la parola inserita e il reversed sono uguali

return word === reversed;

}

//Stampo 
if (isPalindroma(wordImput)){
    console.log("La parola che hai inserito è palindroma!")
}
else{
    console.log("La parola che hai inserito NON è palindroma")
}
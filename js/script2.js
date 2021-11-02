/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.


1. prompt per scegliere pari o dispari
2- prompt per scegliere un numero da 1 a 5 = numeroUtente
3-funzione per numero random da 1 a 5 = numeroPC
4- funzione per sommare numeroUtente e numeroPC
5- stabilire se la somma è pari o dispari
6- stampare chi ha vinto
*/






// let pari;
// let dispari;

// let pariODispari = prompt('Digitare pari o dispari');
// console.log('L utente ha scelto ',pariODispari)

// if(pariODispari == dispari){
//   let dispari = pariODispari
 
//    console.log('l utente ha sceltoooooo', dispari)
//  } else {
//    let pari = pariODispari
//    console.log('l utente ha sceltoooooo', pari)
//  }
 

// let numeroUtente = parseInt(prompt('Scegliere un numero da 1 a 5'));
// console.log('L utente ha scelto il numero ',numeroUtente)

// let numeroPc = numeroRandom(1,5)
// console.log('Il numero del pc è: ',numeroPc)



// let miaSomma = sommaNumeri(numeroUtente,numeroPc)
// console.log('La somma dei due numeri è: ',miaSomma)

// if(miaSomma%2 != 0){
//  let sommaDispari = miaSomma

//   console.log('Il risultato è:', sommaDispari)
// } else {
//   let sommaPari = miaSomma
//   console.log('Il risultato è:', sommaPari)
// }


// if((pariODispari = dispari) && (sommaDispari = miaSomma)) {
//   console.log('ha vinto L UTENTE')

// }else if((pariODispari = pari) && (sommaPari = miaSomma)){
//   console.log('ha vinto L UTENTE')

// } else {
//   console.log('ha vinto IL PC')
// }



// function numeroRandom (min, max){
//   return Math.floor(Math.random()*max)+min
// }

// function sommaNumeri (num1, num2){
//   return num1+num2
// }


const pariDispari = promt('Inserisci pari/dispari');
const numeroUtente = promt('Iserisci un numero da 1 a 9');
const numeroPc = getRandomInt(1,9);
console.log(numeroPc);
const somma = numeroPc + numeroUtente;
console.log(somma);
const risultato = checkPariDispari(somma);

console.log(risultato);

if(risultato === pariDispari){
  console.log('Ha vinto il giocarore')
}else{
  console.log('Ha vinto il PC')
}

function checkPariDispari(numero){
  if(numero % 2) {
    return 'dispari';
  }
  return 'pari';
}

function getRandomInt(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
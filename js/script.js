// prompt inserire una parola = n
// creare una funzione che riconosca n al contrario
// se n = n al contrario = stampa la parola


// let parola = prompt('inserire una parola');
// console.log('la parola scelta è: ',parola)

// let parolaDivisa = parola.split('');
// console.log('creo un array con le lettere della parola: ',parolaDivisa);


// let arreyContrario = parolaDivisa.reverse()
// console.log('Ribalto l ordine delle lettere: ',arreyContrario)

// let parolaInvertita = arreyContrario.join('')
// console.log('Trasformo il nuovo array invertito in una stringa: ',parolaInvertita)

// if(parola === parolaInvertita){
//   console.log('La parola è palindroma')
// }else {
//   console.log('La parola non è palindroma')
// }


// let parola = prompt('inserire una parola');

// let parolaInversa = invertiParola(parola);

// if(parola === parolaInversa){
//   console.log('La parola è palindroma')
// }else {
//   console.log('La parola non è palindroma')
// }


// function invertiParola(parola){
//   let parolaInversa = parola.split('').reverse().join('');  

//   console.log(parola)
//   console.log(parolaInversa)
//   return parolaInversa;

// }

const parolaIns = prompt('inserire una parola')

isPalindroma(parolaIns)
console.log(parolaIns)

function isPalindroma(parola){
  let parolaGirata = '';

  for(let i = parola.length - 1; i >= 0; i--){
    parolaGirata += parola[i];
    console.log(parolaGirata);
  }


  // parolaGirata =  parola.split('').reverse().join('');

  //2. confronto se la porla inserita è uguale a quella girata
  //3. restituisco true se è palinidroma e false se non lo è
  if(parolaGirata.toUpperCase() === parola.toUpperCase()) return true;
  return false;

}
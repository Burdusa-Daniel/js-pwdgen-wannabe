let nomeUtente = prompt('qual\'è il tuo nome?');
let cognomeUtente = prompt('qual\'è il tuo cognome?');
let colerePreferito = prompt('qual\'è il tuo colore preferito?');
let primoNumero = parseInt(prompt('dammi un numero'));
let secondoNumero = parseInt(prompt('dammi un secondo numero'));
let divisioneNumeri = primoNumero / secondoNumero;
let password = nomeUtente + cognomeUtente + colerePreferito + divisioneNumeri
console.log(password);

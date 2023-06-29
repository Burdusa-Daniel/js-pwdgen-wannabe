let  nameUser = prompt("qual\'è il tuo nome?");
let cognomeUtente = prompt('qual\'è il tuo cognome?');
let colorePreferito = prompt('qual\'è il tuo colore preferito?');
let primoNumero = parseInt(prompt('dammi un numero'));
let secondoNumero = parseInt(prompt('dammi un secondo numero'));
let divisioneNumeri = primoNumero / secondoNumero;
let password =  nameUser + cognomeUtente + colorePreferito + divisioneNumeri;
console.log(password);
let bigliettinoDaVisita = `---------------biglietto-----------
nome: ${nameUser}
`
console.log(bigliettinoDaVisita);

document.getElementById("yourName").innerHTML = nameUser;
/*document.getElementById("yourSurname").innerHTML = cognomeUtente;
document.getElementById("fav_color").innerHTML = colorePreferito;
document.getElementById("generated_number").innerHTML = divisioneNumeri;*/
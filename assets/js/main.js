// Chiedi all'utente il suo nome
var userName = prompt("Qual è il tuo nome?");
// Chiedi all'utente il suo cognome
var lastName = prompt("Qual è il tuo cognome?");
// Chiedi all'utente il suo colore preferito
var favFruit = prompt("Qual è il tuo frutto preferito?");
// Infine scrivi il risultato nomecognomecolorepreferito21
var generatedPassword = userName + lastName + favFruit + "21";

document.getElementById("password").innerHTML = generatedPassword;
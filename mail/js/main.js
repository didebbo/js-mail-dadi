// Email registrate nel sistema 
let emails = [
    "luca.formicola@boolean.careers",
    "samuele.madrigali@boolean.careers",
    "alessandro.lodigiani@boolean.careers",
    "fabrizio.mastrobattista@boolean.careers"
]

// Chiedo all'utente di identificarsi
let email = prompt("Inserisci la tua email");

// Controllo se questo utente esiste nel sistema
if (emails.includes(email)) alert("Bentornato " + email);
else alert("Mi dispiace, questa utenza non esiste");
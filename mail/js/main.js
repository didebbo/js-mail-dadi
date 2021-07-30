let emails = [
    "luca.formicola@boolean.careers",
    "samuele.madrigali@boolean.careers",
    "alessandro.lodigiani@boolean.careers",
    "fabrizio.mastrobattista@boolean.careers"
]

let email = prompt("Inserisci la tua email");

if (emails.includes(email)) alert("Bentornato " + email);
else alert("Mi dispiace, questa utenza non esiste");
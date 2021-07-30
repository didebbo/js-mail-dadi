// Email registrate nel sistema 
let emails = [
    "luca.formicola@boolean.careers",
    "samuele.madrigali@boolean.careers",
    "alessandro.lodigiani@boolean.careers",
    "fabrizio.mastrobattista@boolean.careers"
]

const email = document.getElementById("email");
const accedi = document.getElementById("accedi");
const log = document.getElementById("log");
const suggerimento = document.getElementById("suggerimento");
const suggerimenti = document.getElementById("suggerimenti");

accedi.onclick = (e) => {
    e.preventDefault();

    // Init
    log.style.display = "none";
    let status = false;

    if (email.value.length <= 0) {
        log.classList.remove("success")
        log.classList.add("fail");
        log.innerHTML = "Inserisci una email";
        log.style.display = "block";
    }
    else {
        alert("aaa");
        log.style.display = "none";

        for (let i = 0; i < emails.length; i++) {
            console.log(emails[i]);
            if (email.value === emails[i]) {
                status = true;
                log.classList.remove("fail")
                log.classList.add("success");
                log.innerHTML = "Bentornato " + email.value;
                log.style.display = "block";
            }
        }
        alert(status);
        if (!status) {
            alert("aiaiaia");
            log.classList.remove("success")
            log.classList.add("fail");
            log.innerHTML = "Mi dispiace " + email.value + " non esiste nel nostro database";
            log.style.display = "block";
        }
    }
}

suggerimento.onclick = (e) => {

    if (suggerimenti.style.display == "none") suggerimenti.style.display = "block";
    else suggerimenti.style.display = "none";
}
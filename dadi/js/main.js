const status = document.getElementById("status");
const audio_status = document.getElementById("audio_status");
const status_text = document.getElementById("status_text");
const btn_lancio = document.getElementById("btn_lancio");
const dado_user = document.getElementById("dado_user");
const dado_cpu = document.getElementById("dado_cpu");
const speed_roll = 100;
var user, cpu, user_roll, cpu_roll;

//  Main
var main = () => {
    user = Math.floor(Math.random() * 6) + 1;
    cpu = Math.floor(Math.random() * 6) + 1;
    dado_user.src = "img/dado/" + user + ".png";
    dado_cpu.src = "img/dado/" + cpu + ".png";
}

//Al click del pulsante eseguo il lancio dei dadi

btn_lancio.onclick = () => {
    if (user_roll == null && cpu_roll == null) lancio();
}

/* 
Al lancio:
1. nascondo testo del vincitore
2. genero casualmente due numeri per i dadi
3. genero animazione casuale dei due dadi
4. quando i due dadi si sono fermati, eseguo check_winner()
*/
var lancio = () => {

    status.style.opacity = 0;
    audio_status.pause();
    audio_status.currentTime = 0;

    user = Math.floor(Math.random() * 6) + 1;
    cpu = Math.floor(Math.random() * 6) + 1;

    user_roll = setInterval(() => {
        var num = Math.floor(Math.random() * 6) + 1;
        dado_user.src = "img/dado/" + num + ".png";
        if (num === user) {
            clearInterval(user_roll);
            user_roll = null;
            if (cpu_roll == null) check_winner();
        }
    }, speed_roll);

    cpu_roll = setInterval(() => {
        var num = Math.floor(Math.random() * 6) + 1;
        dado_cpu.src = "img/dado/" + num + ".png";
        if (num === cpu) {
            clearInterval(cpu_roll);
            cpu_roll = null;
            if (user_roll == null) check_winner();
        }
    }, speed_roll);
}

// Controllo chi è il vincitore e mostro il messaggio 
var check_winner = () => {
    if (user > cpu) {
        status_text.innerHTML = "Giocatore 1 Vince!";
        status.classList.remove("los");
        status.classList.add("win");
        audio_status.src = "audio/win.mp3";
        audio_status.play();
    }
    else if (user < cpu) {
        status_text.innerHTML = "Computer Vince!";
        status.classList.remove("win");
        status.classList.add("los");
        audio_status.src = "audio/lose.mp3";
        audio_status.play();
    }
    else {
        status_text.innerHTML = "Parità!";
        status.classList.remove("los");
        status.classList.add("win");
        audio_status.src = "audio/win.mp3";
        audio_status.play();
    }
    status.style.opacity = 1;
}

main();
const status = document.getElementById("status");
const status_text = document.getElementById("status_text");
const btn_lancio = document.getElementById("btn_lancio");
const dado_user = document.getElementById("dado_user");
const dado_cpu = document.getElementById("dado_cpu");
var user, cpu, user_roll, cpu_roll;

var lancio = () => {

    status.style.opacity = 0;

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
    }, 200);

    cpu_roll = setInterval(() => {
        var num = Math.floor(Math.random() * 6) + 1;
        dado_cpu.src = "img/dado/" + num + ".png";
        if (num === cpu) {
            clearInterval(cpu_roll);
            cpu_roll = null;
            if (user_roll == null) check_winner();
        }
    }, 200);
}

var check_winner = () => {
    if (user > cpu) {
        status_text.innerHTML = "Giocatore 1 Vince!";
        status.classList.remove("los");
        status.classList.add("win");
    }
    else if (user < cpu) {
        status_text.innerHTML = "Computer Vince!";
        status.classList.remove("win");
        status.classList.add("los");
    }
    else {
        status_text.innerHTML = "Parità!";
        status.classList.remove("los");
        status.classList.add("win");
    }
    status.style.opacity = 1;
}

btn_lancio.onclick = () => {
    lancio();
}

user = Math.floor(Math.random() * 6) + 1;
cpu = Math.floor(Math.random() * 6) + 1;
dado_user.src = "img/dado/" + user + ".png";
dado_cpu.src = "img/dado/" + cpu + ".png";
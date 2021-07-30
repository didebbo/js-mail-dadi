var user = Math.floor(Math.random() * 6) + 1;
var cpu = Math.floor(Math.random() * 6) + 1;

alert("Tu: " + user + " CPU: " + cpu);

if (user > cpu) alert("Tu hai vinto!");
else if (user < cpu) alert("CPU ha vinto!");
else alert("Parità!");
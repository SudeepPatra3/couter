let count = 0;
let timer;
var lap = document.getElementById('lap');
var keepLap = [];

function startCounter() {
    clearInterval(timer);
    timer = setInterval(updateCounter, 100);
}

function updateCounter() {
    let hours = Math.floor(count / 3600);
    let minute = Math.floor((count - hours * 3600) / 60);
    let second = count - hours * 3600 - minute * 60;
    count++;
    document.getElementById("counter").innerText = "Counter : " + hours + ":" + minute + ":" + second;
}

function laps() {
    keepLap.push(count);
    let x = "";
    for (let i = 0; i < keepLap.length; i++) {
        let element = keepLap[i];
        x += `<li>` + `Lap(` + (i + 1) + `) : ` + Math.floor(element / 60) + ":" + Math.floor(element % 60) + `</li>`
    }
    lap.innerHTML = x;
}

function stop() {
    clearInterval(timer);
}
function reset() {
    clearInterval(timer);
    count = 0;
    document.getElementById("counter").innerText = count;
}
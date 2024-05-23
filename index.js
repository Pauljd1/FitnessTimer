let timeDisplay = document.querySelector("#timeDisplay");
let startBtn = document.querySelector("#startBtn");
let pauseBtn = document.querySelector("#pauseBtn");
let resetBtn = document.querySelector("#resetBtn");
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let startTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalID;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalID = setInterval(updateTime, 1000);
    }
});

pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalID);
    }
});

resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalID);
    startTime = 0;
    elapsedTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = secs < 10 ? "0" + secs : secs;
    mins = mins < 10 ? "0" + mins : mins;
    hrs = hrs < 10 ? "0" + hrs : hrs;

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count  + " - ";
    saveEl.textContent += " " + countStr;
    countEl.textContent = 0;
    count = 0;
}


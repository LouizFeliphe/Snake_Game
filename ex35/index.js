const timedisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true
let intervalId;
let hrs = 0
let mins = 0
let secs = 0;

startBtn.addEventListener("click", () => {

    if(paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updatetime,1000)
       
    }

})
pauseBtn.addEventListener("click", () => {

    if(!paused) {
        paused = true;
        
    }


})
resetBtn.addEventListener("click", () => {})

function updatetime() {
    elapsedTime = Date.now() - startTime;

    /*secs = Math.floor((elapsedTime/1000) % 60)
    mins = Math.floor((elapsedTime/(1000 * 60)) % 60)
    mins = Math.floor((elapsedTime/(1000 * 60 * 60)) % 60)*/
    secs = Math.floor((elapsedTime/1000) % 60);
    mins = Math.floor((elapsedTime/(1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime/(1000 * 60 * 60)) % 24);

    timedisplay.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`

    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : (("0") + unit);
    }
}
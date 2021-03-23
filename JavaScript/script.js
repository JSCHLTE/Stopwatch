//Jordan Schulte
//Stopwatch
//Vanilla JS

//Declaring variables
let tens = 0;
let seconds = 0;
let minutes = 0;
let Interval;
const appendTens = document.querySelector("#tens");
const appendSeconds = document.querySelector("#seconds");
const appendMinutes = document.querySelector("#minutes");
const btnStart = document.querySelector("#button-start");
const btnStop = document.querySelector("#button-stop");
const btnReset = document.querySelector("#button-reset");

//Event listeners
//Starts the timer.
btnStart.addEventListener("click", ()=>{
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

//Stops the timer.
btnStop.addEventListener("click", ()=>{
    clearInterval(Interval);
});

//Resets the timer.
btnReset.addEventListener("click", ()=>{
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";
});

//Start time function
startTime = ()=>{
    tens++;
    if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + tens;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + seconds;
    }
    if(minutes > 9){
        appendMinutes.innerHTML = minutes;
    }
};


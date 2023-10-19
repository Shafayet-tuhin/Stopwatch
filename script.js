const strtBtn = document.getElementById("startBtn");
const laptBtn = document.getElementById("lapBtn");
const stpBtn = document.getElementById("stopBtn");
const restrtBtn = document.getElementById("restartBtn");
const rstBtn = document.getElementById("resetBtn");

strtBtn.addEventListener('click', startTime);
laptBtn.addEventListener('click' , lapTime) ; 
stpBtn.addEventListener('click', stopTime);
restrtBtn.addEventListener('click', restartTime);
rstBtn.addEventListener('click', resetTime);

let timer;
let isRunning = false;
let millisecond = 0;
let second = 0;
let minutes = 0;
let hours = 0;

const lapTimes = [] ; 

function startTime() {
    if (isRunning === false) {
        isRunning = true;
        timer = setInterval(updateTime, 10); 
    }
}

function stopTime() {
    if (isRunning === true) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTime() {
    isRunning = false;
    clearInterval(timer);
    millisecond = 0;
    second = 0;
    minutes = 0;
    hours = 0;
    updateTime();
    document.querySelector('.showLap').innerHTML = '  Lap Lists : ' ;
    lapTimes.length = 0 ; 
}

function restartTime() {
    resetTime();
    startTime();
}


function lapTime() {
    if ( isRunning == true ){
        const lap = {
            hours : hours ,
            minutes : minutes ,
            second:second,
            millisecond:millisecond,
        };
        lapTimes.push(lap) ;

        const lapElement = document.createElement('div') ; 
        lapElement.textContent = `Lap ${lapTimes.length} : ${lap.hours} : ${lap.minutes} : ${lap.second} : ${lap.millisecond}` ;
        document.querySelector('.showLap').appendChild(lapElement) ;
    }
}


function updateTime() {
    const showTime = `${String(hours).padStart(2, '0')} :
                      ${String(minutes).padStart(2, '0')} :
                      ${String(second).padStart(2, '0')} : 
                      ${String(millisecond).padStart(2, '0')}`;

    document.getElementById("stopwatch").textContent = showTime;

    millisecond++;

    if (millisecond === 100) { // 100 milliseconds in a second
        second++;
        millisecond = 0;
        if (second === 60) {
            minutes++;
            second = 0;
            if (minutes === 60) {
                hours++;
                minutes = 0;
            }
        }
    }
}

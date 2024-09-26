let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");
let digitalClock = document.getElementById("digital");
let clockSVG = document.getElementById("clockSVG");
let isAnalog = true;

let set_clock = setInterval(() => {
    let date_now = new Date();

    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec / 10);
    let calc_sec = sec * 6;

    hour.style.transform = `rotate(${calc_hr}deg)`;
    minute.style.transform = `rotate(${calc_min}deg)`;
    seconds.style.transform = `rotate(${calc_sec}deg)`;

    if (!isAnalog) {
        displayTime(hr, min, sec);
    }
}, 100);

function displayTime(hr, min, sec) {
    document.getElementById('hours').innerHTML = String(hr).padStart(2, '0');
    document.getElementById('minutes').innerHTML = String(min).padStart(2, '0');
    document.getElementById('seconds').innerHTML = String(sec).padStart(2, '0');
}

document.getElementById('toggleBtn').addEventListener('click', () => {
    isAnalog = !isAnalog;
    digitalClock.style.display = isAnalog ? 'none' : 'flex';
    hour.style.display = minute.style.display = seconds.style.display = isAnalog ? 'block' : 'none';
    clockSVG.style.display = isAnalog ? 'block' : 'none'; 

    if (isAnalog) {
        document.getElementById('seconds').innerHTML = ''; 
    }
});
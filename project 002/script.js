window.onload = function () {
  let seconds = "00";
  let tens = "00";
  let minutes = "00";
  let hours = "00";
  let appendSeconds = document.getElementById("seconds");
  let appendTens = document.getElementById("tens");
  let appendMinutes = document.getElementById("minutes");
  let appendHours = document.getElementById("hours");
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");
  let interval;

  buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(interval);
  };

  buttonReset.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59){
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }

    if (minutes > 59){
      hours++;
      appendHours.innerHTML = "0" + hours;
      minutes = 0;
      appendMinutes.innerHTML = "0" + 0;
    }

    if (hours > 23){
      hours = 0;
      appendHours.innerHTML = "0" + 0;
    }
    
  }
};

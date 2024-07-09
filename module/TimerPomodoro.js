let timer;
let totalTime = 15 * 60;
let isPaused = false;
let currentTime = totalTime;

export function startTimer() {
  if (timer) clearInterval(timer);
  isPaused = false;
  timer = setInterval(updateTimer, 1000);
}

export function pauseTimer() {
  isPaused = true;
  clearInterval(timer);
}

function updateTimer() {
  if (!isPaused) {
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerText = `${minutes} : ${seconds}`;

    if (currentTime > 0) {
      currentTime--;
    } else {
      clearInterval(timer);
      alert("Temps écoulé !");
    }
  }
}

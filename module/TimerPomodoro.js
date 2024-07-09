let timer;
let totalTime = 15 * 60;
let currentTime = totalTime;
let isPaused = false;
let turn = 0;
let bigturn = 0;
let pauseTime = 0;

export function startTimer() {
  if (timer) clearInterval(timer);
  isPaused = false;
  timer = setInterval(updateTimer, 1000);
}

export function startTimerPause() {
  clearInterval(timer);
  isPaused = true;
  if (turn < 3) {
    pauseTime = 5 * 60;
    turn += 1;
  } else {
    pauseTime = 20 * 60;
    bigturn += 1;
    turn = 0;
  }
  timer = setInterval(updatePauseTimer, 1000);
}

function updatePauseTimer() {
  if (isPaused) {
    let minutes = Math.floor(pauseTime / 60);
    let seconds = pauseTime % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerText = `${minutes} : ${seconds}`;

    if (pauseTime > 0) {
      pauseTime--;
    } else {
      resetTimer();
      startTimer();
    }
  }
}

export function pauseTimer() {
  isPaused = true;
  clearInterval(timer);
}

export function resetTimer() {
  currentTime = totalTime;
  clearInterval(timer);
  isPaused = true;
  let minutes = Math.floor(currentTime / 60);
  let seconds = currentTime % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("timer").innerText = `${minutes} : ${seconds}`;
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
      startTimerPause();
    }
  }
}

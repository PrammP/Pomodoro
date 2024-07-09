let timer;
let totalTime;
let currentTime;
let isPaused = false;
let turn = 0;
let bigturn = 0;
let pauseTime = 0;

function updateTotalTime() {
  const pomodoroInput = document.getElementById("pomodoroInput").value;
  totalTime = parseInt(pomodoroInput) * 60;
  currentTime = totalTime;
}

export function startTimer() {
  updateTotalTime();
  if (timer) clearInterval(timer);
  isPaused = false;
  timer = setInterval(updateTimer, 1000);
}

export function startTimerPause() {
  clearInterval(timer);
  isPaused = true;
  const shortPause = parseInt(document.getElementById("shortPause").value) * 60;
  const longPause = parseInt(document.getElementById("longPause").value) * 60;
  if (turn < 3) {
    pauseTime = shortPause;
    turn += 1;
  } else {
    pauseTime = longPause;
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
export function initializeTimer() {
  updateTotalTime();
  let minutes = Math.floor(currentTime / 60);
  let seconds = currentTime % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("timer").innerText = `${minutes} : ${seconds}`;
}
export function resetTimer() {
  updateTotalTime();
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

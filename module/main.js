import { startTimer, pauseTimer, resetTimer } from "./TimerPomodoro.js";

const start = document.getElementById("start");
start.addEventListener("click", function () {
  startTimer();
});

const pause = document.getElementById("pause");
pause.addEventListener("click", function () {
  pauseTimer();
});

const reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  resetTimer();
});

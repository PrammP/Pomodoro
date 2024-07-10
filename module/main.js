import {
  startTimer,
  pauseTimer,
  resetTimer,
  initializeTimer,
  updateTotalTime,
} from "./TimerPomodoro.js";

import { optionsOnOff } from "./options.js";

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

document.getElementById("option").addEventListener("click", function () {
  optionsOnOff();
});

document.getElementById("pomodoroInput").addEventListener("input", () => {
  if (document.getElementById("pomodoroInput").value === "") {
    document.getElementById("timer").innerText = "00 : 00";
  } else {
    updateTotalTime();
    initializeTimer();
  }
});
initializeTimer();

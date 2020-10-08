/*

function call(name) {
  return document.querySelector(name);
}

let startBtn = call("#start"),
  pauseBtn = call("#pause"),
  resetBtn = call("#reset"),
  display = call("#display"),
  display1 = call("#display1"),
  display2 = call("#display2");

let secondsCounter = 1,
  minuteCounter = 1,
  a;

startBtn.addEventListener("click", () => {
  let minute = setInterval(() => {
    display1.textContent = `${minuteCounter < 10 ? (a = 0) : (a = "")
      }${minuteCounter++}`;
  }, 60000);

  let seconds = setInterval(() => {
    if (secondsCounter < 60) {
      display2.textContent = `${secondsCounter < 10 ? (a = 0) : (a = "")
        }${secondsCounter}`;
      secondsCounter++;
    } else {
      secondsCounter = 1;
    }
  }, 1000);

  pauseBtn.addEventListener("click", () => {
    clearInterval(minute);
    // console.log(secondsCounter);
    clearInterval(seconds);
    // console.log(seconds);
  });

  resetBtn.addEventListener("click", () => {
    secondsCounter = 1
    minuteCounter = 1
    clearInterval(minute);
    // console.log(secondsCounter);
    clearInterval(seconds);
    // console.log(seconds);
    display1.textContent = "00"
    display2.textContent = "00"
  });
});

*/

const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")
const resetBtn = document.querySelector("#reset")
const displayMins = document.querySelector("#display1")
const displaySecs = document.querySelector("#display2")
let interval, totalSecs = 0

function startWatch() {
  interval = setInterval(() => {
    totalSecs++
    updateDisplay()
  }, 1000);
}

function pauseWatch() {
  if (interval) clearInterval(interval)
}

function resetWatch() {
  if (interval) clearInterval(interval)
  totalSecs = 0
  updateDisplay()
}

function addZeros(number) {
  return number < 10 ? "0" + number : number
}

function updateDisplay() {
  const mins = Math.trunc(totalSecs / 60)
  const secs = totalSecs % 60
  displayMins.innerText = addZeros(mins)
  displaySecs.innerText = addZeros(secs)
}

startBtn.addEventListener("click", startWatch)
pauseBtn.addEventListener("click", pauseWatch)
resetBtn.addEventListener("click", resetWatch)
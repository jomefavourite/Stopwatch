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
//by default interval is undefined
let interval, totalSecs = 0

function startWatch() {
  interval = setInterval(() => {
    //increment totalSecs every second
    totalSecs++
    updateDisplay()
  }, 1000);
}

function pauseWatch() {
  // if interval is not undefined clear it
  if (interval !== undefined) {
    clearInterval(interval)
  }
}

function resetWatch() {
  // if interval is not undefined clear it
  if (interval !== undefined) {
    clearInterval(interval)
  }

  //reset totalSecs 
  totalSecs = 0
  updateDisplay()
}

function addZeros(number) {
  if (number < 10) {
    return "0" + number
  } else {
    return number
  }
}

function updateDisplay() {
  // trunc() cut the decimals. We only get the integer of totalSecs / 60 which represents the number of minutes
  const mins = Math.trunc(totalSecs / 60)
  // totalSecs % 60 gives the remainder of dividing totalSecs by 60. For example 150 % 60 = 30. If totalsSecs < 60 the remainder would be equal to totalSecs for example: 50 % 60 = 50.
  const secs = totalSecs % 60
  displayMins.innerText = addZeros(mins)
  displaySecs.innerText = addZeros(secs)
}

startBtn.addEventListener("click", startWatch)
pauseBtn.addEventListener("click", pauseWatch)
resetBtn.addEventListener("click", resetWatch)
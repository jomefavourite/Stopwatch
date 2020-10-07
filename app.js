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
    display1.textContent = `${
      minuteCounter < 10 ? (a = 0) : (a = "")
    }${minuteCounter++}`;
  }, 60000);

  let seconds = setInterval(() => {
    if (secondsCounter < 60) {
      display2.textContent = `${
        secondsCounter < 10 ? (a = 0) : (a = "")
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
    bjjjds;
  });
});

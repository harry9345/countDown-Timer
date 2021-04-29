const timeH = document.querySelector("h1");

var pause = false;

var timeSecond = prompt("please enter your timer??");

const countDown = setInterval(() => {
  if (!pause) {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond <= 0 || timeSecond < 1) {
      endTIme();
      clearInterval(countDown);
    }
  }
}, 1000);

function displayTime(second) {
  var min = Math.floor(second / 60);
  var sec = Math.floor(second % 60);
  timeH.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}
function endTIme() {
  timeH.innerHTML = "Time Out";
}

function reset() {
  timeSecond = prompt("please enter your timer??");
  displayTime(timeSecond);
}
document.getElementById("stop").addEventListener("click", function () {
  pause = true;
});
document.getElementById("resume").addEventListener("click", function () {
  pause = false;
});

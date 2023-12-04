const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const clickerSpeed = document.getElementById("clicker__speed");
let count = 0;
let clickTime = 0;

cookie.onclick = function () {
  count++;
  counter.textContent = count;
  cookie.width = counter.textContent % 2 === 0 ? 200 : 250;

  const currentTime = new Date().getTime();
  if (clickTime) {
    const timeDifference = Math.abs(currentTime - clickTime) / 1000;
    const speed = (1 / timeDifference).toFixed(2);
    clickerSpeed.textContent = speed;
  }
  clickTime = currentTime;
};

//Task 1.1
const time = function () {
  const startTimer = document.getElementById("timer");
  let number = parseInt(startTimer.textContent);
  if (number === 0) {
    alert("Вы победили в конкурсе");
  } else {
    startTimer.textContent--;
  }
};
setInterval(time, 1000);

//Task 1.2 & 1.3
// const startTimer = document.getElementById("timer");
// let number = parseInt(startTimer.textContent);

// function formatTime(sec) {
//   const formattedTime = new Date(sec * 1000).toISOString().slice(11, 19);
//   return formattedTime;
// }

// const secondTime = function () {
//   startTimer.textContent = formatTime(number);
//   if (number === 0) {
//     alert("Вы победили в конкурсе!");
//     window.location.href = "https://kak2z.ru/my_img/img/2018/05/04/f689f.gif";
//   } else {
//     number--;
//   }
// };

// setInterval(secondTime, 1000);

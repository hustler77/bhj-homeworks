let hit = 0;
let miss = 0;
for (let i = 1; i < 10; i++) {
  let hole = document.getElementById("hole" + i);
  hole.onclick = () => {
    if (hole.className.includes("hole hole_has-mole")) {
      hit++;
      document.getElementById("dead").textContent = hit;
      if (hit === 10) {
        alert("Вы победили!");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    } else {
      miss++;
      document.getElementById("lost").textContent = miss;
      if (miss === 5) {
        alert("Вы проиграли!");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    }
  };
}

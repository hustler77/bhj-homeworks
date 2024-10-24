const rotator = Array.from(document.querySelectorAll(".rotator__case"));

setInterval(() => {
  let index = rotator.findIndex((item) =>
    item.className.includes("rotator__case_active")
  );
  rotator[index].classList.remove("rotator__case_active");
  index++;

  if (index === rotator.length) {
    index = 0;
  }
  rotator[index].classList.add("rotator__case_active");
}, 1000);

const reveals = Array.from(document.querySelectorAll(".reveal"));
document.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const { top, bottom } = el.getBoundingClientRect();
    if (top > 0 && bottom < window.innerHeight) {
      el.classList.add("reveal_active");
    }
  });
});

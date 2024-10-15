const value = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const link = Array.from(document.querySelectorAll(".dropdown__link"));
value.addEventListener("click", function () {
  list.classList.toggle("dropdown__list_active");
});
link.forEach(e => {
  e.addEventListener("click", function (event) {
    event.preventDefault();
    list.classList.remove("dropdown__list_active");
    value.textContent = event.currentTarget.textContent;
  });
});

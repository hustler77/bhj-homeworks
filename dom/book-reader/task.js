const buttons = Array.from(document.querySelectorAll(".font-size"));
let activeButton = document.querySelector(".font-size_active");
let book = document.querySelector(".book");

buttons.forEach((e) => {
  e.addEventListener("click", (el) => {
    el.preventDefault();
    activeButton.classList.remove("font-size_active");
    e.classList.add("font-size_active");
    activeButton = e;
    let dataAttr = e.getAttribute("data-size");
    if (dataAttr === "small") {
      book.className = "book book_fs-small";
    } else if (dataAttr === "big") {
      book.className = "book book_fs-big";
    } else {
      book.className = "book";
    }
  });
});

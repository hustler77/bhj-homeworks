const tabs = Array.from(document.querySelectorAll(".tab"));
let activeTab = document.querySelector(".tab_active");
const content = Array.from(document.querySelectorAll(".tab__content"));
let activeContent = document.querySelector(".tab__content_active");

tabs.forEach((clickedTab) => {
  clickedTab.addEventListener("click", () => {
    let index = tabs.indexOf(clickedTab);
    activeTab.classList.remove("tab_active");
    activeTab = clickedTab;
    activeTab.classList.add("tab_active");
    activeContent.classList.remove("tab__content_active");
    activeContent = content[index];
    activeContent.classList.add("tab__content_active");
  });
});

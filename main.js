const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navIcon = $(".navbar__icon");
const sidebar = $(".sidebar");
const sidebarClose = $(".sidebar__close");
console.log([navIcon]);
navIcon.onclick = function () {
  sidebar.classList.add("active");
};
sidebarClose.onclick = function () {
  sidebar.classList.remove("active");
};

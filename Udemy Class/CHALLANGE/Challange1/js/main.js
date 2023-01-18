// Responsive Header
const menu = document.querySelector(".menu");
const showBtn = document.querySelector(".show-btn");
const cancelBtn = document.querySelector(".cancel-btn");

showBtn.onclick = () => {
    menu.classList.add("active");
};
cancelBtn.onclick = () => {
    menu.classList.remove("active");
};
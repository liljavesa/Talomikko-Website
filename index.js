const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar-center");
const page = document.getElementById("page");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("show");
        if (navbar.classList.contains("show")) {
            page.style.paddingTop = "178px";
        } else {
            page.style.paddingTop = "20px"
        }
    });
}
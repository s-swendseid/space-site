const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

// navToggle.addEventListener("click", () => {
//     navToggle.classList.toggle("active");
//     nav.classList.toggle("active");
// });

// document.querySelectorAll("active").forEach((n) =>
//   n.addEventListener("click", () => {
//     navToggle.classList.remove("active");
//     nav.classList.remove("active");
//   })
// );
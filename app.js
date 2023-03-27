const menuToggle = document.querySelector(".nav__mobile-toggle")
const mobileMenu = document.querySelector(".nav__mobile-menu")
const mobileLinks = document.querySelectorAll(".nav__mobile__link")

let toggle = false

menuToggle.addEventListener("click", () => {
  menuToggle.firstElementChild.classList.toggle(`fa-xmark`)
  if (menuToggle.firstElementChild.classList.contains("fa-xmark")) {
    mobileMenu.classList.remove("hide")
    mobileMenu.classList.add("slide-in-right")
    document.body.style.overflowY = "hidden"
  } else {
    mobileMenu.classList.remove("slide-in-right")
    mobileMenu.classList.add("hide")
    document.body.removeAttribute("style")
  }
})

mobileLinks.forEach((link) =>
  link.addEventListener("click", () => document.body.removeAttribute("style")),
)





document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".about-image img");
  let currentIndex = 0;

  function cycleImages() {
    const nextIndex = (currentIndex + 1) % images.length; // Get the next image index
    images[currentIndex].classList.remove("active"); // Remove 'active' from the current image
    images[nextIndex].classList.add("active"); // Add 'active' to the next image
    currentIndex = nextIndex; // Update current index to the next one
  }

  setInterval(cycleImages, 3000); // Change image every 3000 milliseconds (3 seconds)
});




function toggleLanguage() {
  const currentLang = document.body.getAttribute("lang");
  const newLang = currentLang === "en" ? "ar" : "en";

  document.body.setAttribute("lang", newLang);
  localStorage.setItem("lang", newLang);

  updateLanguageDisplay(newLang);
}

function updateLanguageDisplay(lang) {
  document
    .querySelectorAll(".lang-en")
    .forEach((el) => (el.style.display = lang === "en" ? "inline" : "none"));
  document
    .querySelectorAll(".lang-ar")
    .forEach((el) => (el.style.display = lang === "en" ? "none" : "inline"));
  document
    .querySelectorAll(".lang-en_b")
    .forEach((el) => (el.style.display = lang === "en" ? "block" : "none"));
  document
    .querySelectorAll(".lang-ar_b")
    .forEach((el) => (el.style.display = lang === "en" ? "none" : "block"));
  document
    .querySelectorAll(".lang-en_ib")
    .forEach((el) => (el.style.display = lang === "en" ? "inline-block" : "none"));
  document
    .querySelectorAll(".lang-ar_ib")
    .forEach((el) => (el.style.display = lang === "en" ? "none" : "inline-block"));
}

// Ensure the initial state is set correctly
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  document.body.setAttribute("lang", lang);
  updateLanguageDisplay(lang);
});





// Scroll_Padding_

const navigatorHeight = document.querySelector(".nav").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding-top",
  navigatorHeight + "px"
);


let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
hamburger.onclick = function(){
  nav.classList.toggle('active')

}
document.addEventListener("DOMContentLoaded", function () {
  // IntersectionObserver for animation on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelector(".about-text").style.animation =
            "fadeInLeft 1s ease-out forwards";
          entry.target.querySelector(".about-image").style.animation =
            "dropIn 1s ease-out forwards";
        }
      });
    },
    { threshold: 0.5 }
  );

  const aboutContainer = document.querySelector(".about-container");
  observer.observe(aboutContainer);
});

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

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue + "+";
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// typing

const services = [
  "Medical Supplies",
  "Surgical Items Supply",
  "Transportation Services",
  "Construction Services",
  "Logistics Services",
  "Clearning Services",
];

let index = 0;
const element = document.getElementById("typed-text");

function typeService() {
  let service = services[index];
  let charIndex = 0;

  function typeChar() {
    if (charIndex < service.length) {
      element.innerHTML += service.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 100);
    } else {
      setTimeout(eraseService, 2000);
    }
  }

  typeChar();
}

function eraseService() {
  let service = services[index];
  let charIndex = service.length;

  function eraseChar() {
    if (charIndex > 0) {
      element.innerHTML = service.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseChar, 50);
    } else {
      index = (index + 1) % services.length;
      setTimeout(typeService, 500);
    }
  }

  eraseChar();
}

typeService();

const services_ar = [
  "المستلزمات الطبية",
  "توريد الأدوات الجراحية",
  "خدمات النقل",
  "خدمات البناء",
  "الخدمات اللوجستية",
];

let index_ar = 0;
const element_ar = document.getElementById("typed-text_ar");

function typeService_ar() {
  let service_ar = services_ar[index_ar];
  let charIndex_ar = 0;

  function typeChar_ar() {
    if (charIndex_ar < service_ar.length) {
      element_ar.innerHTML += service_ar.charAt(charIndex_ar);
      charIndex_ar++;
      setTimeout(typeChar_ar, 100);
    } else {
      setTimeout(eraseService_ar, 2000);
    }
  }

  typeChar_ar();
}

function eraseService_ar() {
  let service_ar = services_ar[index_ar];
  let charIndex_ar = service_ar.length;

  function eraseChar_ar() {
    if (charIndex_ar > 0) {
      element_ar.innerHTML = service_ar.substring(0, charIndex_ar - 1);
      charIndex_ar--;
      setTimeout(eraseChar_ar, 50);
    } else {
      index_ar = (index_ar + 1) % services_ar.length;
      setTimeout(typeService_ar, 500);
    }
  }

  eraseChar_ar();
}

typeService_ar();

// ====================Testimonial================
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelector(".testimonial-slide");
  const slides = document.querySelectorAll(".testimonial");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let index = 0;
  const intervalTime = 3000; // Interval time in milliseconds

  function showSlide(n) {
    if (n > slides.length - 1) {
      index = 0;
    } else if (n < 0) {
      index = slides.length - 1;
    } else {
      index = n;
    }
    testimonials.style.transform = `translateX(-${index * 100}%)`;
  }

  prev.addEventListener("click", () => {
    showSlide(index - 1);
    resetAutoplay();
  });

  next.addEventListener("click", () => {
    showSlide(index + 1);
    resetAutoplay();
  });

  function startAutoplay() {
    autoplay = setInterval(() => {
      showSlide(index + 1);
    }, intervalTime);
  }

  function resetAutoplay() {
    clearInterval(autoplay);
    startAutoplay();
  }

  let autoplay = setInterval(() => {
    showSlide(index + 1);
  }, intervalTime);

  showSlide(index);
});

function toggleLanguage() {
  const currentLang = document.body.getAttribute("lang");
  if (currentLang === "en") {
    document.body.setAttribute("lang", "ar");
    document
      .querySelectorAll(".lang-en")
      .forEach((el) => (el.style.display = "none"));
    document
      .querySelectorAll(".lang-ar")
      .forEach((el) => (el.style.display = "inline"));
    document
      .querySelectorAll(".lang-en_b")
      .forEach((el) => (el.style.display = "none"));
    document
      .querySelectorAll(".lang-ar_b")
      .forEach((el) => (el.style.display = "block"));
  } else {
    document.body.setAttribute("lang", "en");
    document
      .querySelectorAll(".lang-en")
      .forEach((el) => (el.style.display = "inline"));
    document
      .querySelectorAll(".lang-ar")
      .forEach((el) => (el.style.display = "none"));
    document
      .querySelectorAll(".lang-en_b")
      .forEach((el) => (el.style.display = "block"));
    document
      .querySelectorAll(".lang-ar_b")
      .forEach((el) => (el.style.display = "none"));
  }
  // updateTextDirection();
}

function updateTextDirection() {
  const direction = document.body.getAttribute("lang") === "ar" ? "rtl" : "ltr";
  document.body.style.direction = direction;
}

// Initial direction setting
// document.addEventListener("DOMContentLoaded", updateTextDirection);





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
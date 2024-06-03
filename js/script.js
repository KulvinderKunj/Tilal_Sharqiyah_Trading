document.addEventListener("DOMContentLoaded", function() {


    // IntersectionObserver for animation on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.about-text').style.animation = 'fadeInLeft 1s ease-out forwards';
                entry.target.querySelector('.about-image').style.animation = 'dropIn 1s ease-out forwards';
            }
        });
    }, { threshold: 0.5 });

    const aboutContainer = document.querySelector('.about-container');
    observer.observe(aboutContainer);
});





document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.about-image img');
  let currentIndex = 0;
  
  function cycleImages() {
    const nextIndex = (currentIndex + 1) % images.length;  // Get the next image index
    images[currentIndex].classList.remove('active');  // Remove 'active' from the current image
    images[nextIndex].classList.add('active');  // Add 'active' to the next image
    currentIndex = nextIndex;  // Update current index to the next one
  }

  setInterval(cycleImages, 3000);  // Change image every 3000 milliseconds (3 seconds)
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
    valueDisplay.textContent = startValue +"+";
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});




// typing 


  const services = [
    "Medicine Supplies",
    "Surgical Items Supply",
    "Transportation Services",
    "Construction Services",
    "Logistics Services"
  ];

  let index = 0;
  const element = document.getElementById('typed-text');

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


  // ====================Testimonial================
  document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelector('.testimonial-slide');
    const slides = document.querySelectorAll('.testimonial');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
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
  
    prev.addEventListener('click', () => {
      showSlide(index - 1);
      resetAutoplay();
    });
  
    next.addEventListener('click', () => {
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
  




  
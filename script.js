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
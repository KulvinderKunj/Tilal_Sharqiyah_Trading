document.addEventListener("DOMContentLoaded", function() {
    var multipleCardCarousel = document.querySelector("#carouselExampleControls");
    if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false
        });
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;

        $("#carouselExampleControls .carousel-control-next").on("click", function() {
            if (scrollPosition < carouselWidth - cardWidth * 3) { // Corrected to ensure proper scrolling
                scrollPosition += cardWidth;
                $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
            }
        });

        $("#carouselExampleControls .carousel-control-prev").on("click", function() {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
            }
        });
    } else {
        $(multipleCardCarousel).addClass("slide");
    }

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

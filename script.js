document.addEventListener("DOMContentLoaded", function () {
    const skillsCarousel = document.getElementById("skillsCarousel");
    let currentIndex = 0;

    function showSlide(index) {
        skillsCarousel.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % (skillsCarousel.children.length - 1);
        showSlide(currentIndex);
    }

    // Change slide every 3 seconds (adjust as needed)
    setInterval(nextSlide, 3000);
});

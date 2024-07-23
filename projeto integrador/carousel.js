document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-images img");
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].style.transform = "translateX(-100%)";
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].style.transform = "translateX(0)";
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
});

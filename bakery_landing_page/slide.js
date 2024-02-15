var currentSlide = 1;
showSlide(currentSlide);

function navigateSlide(n) {
    showSlide(currentSlide += n);
}

function selectSlide(n) {
    showSlide(currentSlide = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        currentSlide = 1;
    }
    if (n < 1) {
        currentSlide = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[currentSlide - 1].style.display = "block";
    dots[currentSlide - 1].className += " active";
}
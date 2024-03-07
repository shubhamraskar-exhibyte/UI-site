let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  Array.from(slides).forEach(slide => {
    slide.style.display = "none";
  });

  Array.from(dots).forEach(dot => {
    dot.classList.remove("active");
  });

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

setInterval(function () {
  plusSlides(1);
}, 5000);

showSlides(slideIndex);
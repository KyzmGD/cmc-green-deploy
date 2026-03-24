// Slider functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let autoSlideInterval;

// Function to show slide
function showSlide(index) {
  // Remove active class from all slides and dots
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active-dot"));

  // Add active class to current slide and dot
  slides[index].classList.add("active");
  dots[index].classList.add("active-dot");

  currentSlideIndex = index;
}

// Function to change slide
function changeSlide(direction) {
  let newIndex = currentSlideIndex + direction;

  if (newIndex < 0) {
    newIndex = slides.length - 1;
  } else if (newIndex >= slides.length) {
    newIndex = 0;
  }

  showSlide(newIndex);
  resetAutoSlide();
}

// Function to go to specific slide
function currentSlide(index) {
  showSlide(index);
  resetAutoSlide();
}

// Auto slide function
function autoSlide() {
  changeSlide(1);
}

// Reset auto slide timer
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 5000); // Change slide every 5 seconds
}

// Start auto slide when page loads
document.addEventListener("DOMContentLoaded", () => {
  // Ensure first slide is active
  if (slides.length > 0) {
    showSlide(0);
    autoSlideInterval = setInterval(autoSlide, 5000);
  }
});

// Optional: Pause auto slide when hovering over slider
const sliderContainer = document.querySelector(".slider-container");
if (sliderContainer) {
  sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });

  sliderContainer.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(autoSlide, 5000);
  });
}

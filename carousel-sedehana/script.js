document.addEventListener("DOMContentLoaded", () => {
  const carouselSlide = document.querySelector(".carousel-slide")
  const images = document.querySelectorAll(".carousel-slide img");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicators = document.querySelectorAll(".indicator");

  let counter = 0;
  let size = images[0].clientWidth;


  // Set initial position
  updateCarousel();

  function updateCarousel() {
    carouselSlide.style.transition = "transform 0.4s ease-out";
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;

    // Update indicators
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === counter);
    });

    // Show/hide navigation buttons
    prevBtn.style.display = counter === 0 ? "none" : "block";
    nextBtn.style.display =
      counter === images.length - 1 ? "none" : "block";
  }

  // Next button
  nextBtn.addEventListener("click", function () {
    if (counter >= images.length - 1) return;
    counter++;
    updateCarousel();
    console.log(counter)
  });

  // Previous button
  prevBtn.addEventListener("click", function () {
    if (counter <= 0) return;
    counter--;
    updateCarousel();
    console.log(counter)
  });
  console.log(counter)

})
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".carousel-card");
  const prevBtn = document.querySelector(".carousel-btn.left");
  const nextBtn = document.querySelector(".carousel-btn.right");
  let index = 0;

  if (cards.length <= 1) return;

  const updateCarousel = () => {
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 0;
    const cardWidth = cards[0].offsetWidth;
    const totalCardWidth = cardWidth + gap;
  
    const offset = index * totalCardWidth;
    track.style.transform = `translateX(-${offset}px)`;
};

  const goToNext = () => {
    index = (index + 1) % cards.length;
    updateCarousel();
  };

  const goToPrev = () => {
    index = (index - 1 + cards.length) % cards.length;
    updateCarousel();
  };

  nextBtn.addEventListener("click", goToNext);
  prevBtn.addEventListener("click", goToPrev);
  window.addEventListener("resize", updateCarousel);

  // Optional: auto-slide every 5s
  setInterval(goToNext, 5000);

  updateCarousel();
});

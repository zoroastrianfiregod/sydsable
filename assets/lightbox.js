let currentIndexLightbox = 0;

function openLightboxImage(index) {
  currentIndexLightbox = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  img.src = illustrationsLightbox[index].image;
  caption.textContent = illustrationsLightbox[index].description;
  lightbox.classList.remove('hidden');

  updateLightboxImage(); // Ensure arrows are shown/hidden correctly
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
}

function prevLightboxImage() {
  if (currentIndexLightbox > 0) {
    currentIndexLightbox--;
    updateLightboxImage();
  }
}

function nextLightboxImage() {
  if (currentIndexLightbox < illustrationsLightbox.length - 1) {
    currentIndexLightbox++;
    updateLightboxImage();
  }
}

function updateLightboxImage() {
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  img.src = illustrationsLightbox[currentIndexLightbox].image;
  caption.textContent = illustrationsLightbox[currentIndexLightbox].description;

  // Conditionally show/hide navigation buttons
  if (illustrationsLightbox.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = currentIndexLightbox === 0 ? 'none' : 'flex';
    nextBtn.style.display = currentIndexLightbox === illustrationsLightbox.length - 1 ? 'none' : 'flex';
  }
}

// Optional: keyboard navigation
document.addEventListener('keydown', function(e) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.classList.contains('hidden')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevLightboxImage();
  if (e.key === 'ArrowRight') nextLightboxImage();
});

let currentIndexLightbox = 0;

function openLightboxImage(index) {
  currentIndexLightbox = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  img.src = illustrationsLightbox[index].image;
  caption.textContent = illustrationsLightbox[index].description;
  lightbox.classList.remove('hidden');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
}

function prevLightboxImage() {
  currentIndexLightbox = (currentIndexLightbox - 1 + illustrationsLightbox.length) % illustrationsLightbox.length;
  updateLightboxImage();
}

function nextLightboxImage() {
  currentIndexLightbox = (currentIndexLightbox + 1) % illustrationsLightbox.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  img.src = illustrationsLightbox[currentIndexLightbox].image;
  caption.textContent = illustrationsLightbox[currentIndexLightbox].description;
}

document.addEventListener('keydown', function(e) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.classList.contains('hidden')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevLightboxImage();
  if (e.key === 'ArrowRight') nextLightboxImage();
});

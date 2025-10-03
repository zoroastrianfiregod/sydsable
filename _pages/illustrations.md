---
permalink: /illustrations
layout: page
title: Illustrations
---

{% assign illustrations = site.data.illustrations %}

<div class="tiles-section">
  {% for illustration in illustrations %}
    <div 
      class="gallery-tile" 
      data-index="{{ forloop.index0 }}"
      data-image="{{ site.baseurl }}/assets/imgs/{{ illustration.image }}"
      data-description="{{ illustration.description }}"
      onclick="openLightboxImage({{ forloop.index0 }})"
    >
      <div 
        class="gallery-thumb" 
        style="background-image: url('{{ site.baseurl }}/assets/imgs/{{ illustration.image }}');"
      ></div>
    </div>
  {% endfor %}
</div>

<!-- Custom Lightbox -->
<div id="lightbox" class="custom-lightbox hidden">
  <span class="lightbox-close carousel-btn-lightbox right" onclick="closeLightbox()">×</span>
  <span class="carousel-btn-lightbox left" onclick="prevLightboxImage()">❮</span>
  <span class="carousel-btn-lightbox right" onclick="nextLightboxImage()">❯</span>
  <img id="lightbox-img" src="" alt="Illustration">
  <p id="lightbox-caption" class="carousel-text"></p>
</div>

<!-- Gallery Image Data -->
<script>
  const illustrationsLightbox = [
    {% for illustration in illustrations %}
      {
        image: "{{ site.baseurl }}/assets/imgs/{{ illustration.image }}",
        description: "{{ illustration.description | escape }}",
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
</script>

<script src="{{ site.baseurl }}/assets/lightbox.js"></script>

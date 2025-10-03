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
  <button class="carousel-btn-lightbox prev" onclick="prevLightboxImage()">‹</button>
  <img id="lightbox-img" src="" alt="Lightbox image" />
  <button class="carousel-btn-lightbox next" onclick="nextLightboxImage()">›</button>
  <div id="lightbox-caption"></div>
  <button class="carousel-btn-lightbox close" onclick="closeLightbox()">×</button>
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

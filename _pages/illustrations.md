---
permalink: /illustrations
layout: page
title: Illustrations
---

{% assign illustrations = site.data.illustrations %}
{% if illustrations.size == 1 %}
  {% assign illustrations = illustrations | concat: illustrations %}
{% endif %}

<div class="tiles-section">
  {% for illustration in illustrations %}
    <a 
      href="{{ site.baseurl }}/assets/imgs/{{ illustration.image }}" 
      data-lightbox="illustrations"
      data-title="{{ illustration.description }}"
      class="gallery-tile"
    >
      <div 
        class="gallery-thumb" 
        style="background-image: url('{{ site.baseurl }}/assets/imgs/{{ illustration.image }}');"
      ></div>
    </a>
  {% endfor %}
</div>

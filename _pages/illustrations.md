---
permalink: /illustrations
layout: page
title: Illustrations
---
{% assign illustrations = site.data.illustrations %}
  {% if illustrations.size == 1 %}
    {% assign illustrations = illustrations | concat: illustrations %}
  {% endif %}

<div class="carousel-track">
  {% for illustration in illustrations %}
  <div>
    <div class="carousel-image" style="background-image: url('{{ site.baseurl }}/assets/imgs/{{ illustration.image }}');"></div>
    <p class="carousel-text">{{ illustrations.description }}</p>
  </div>
  {% endfor %}
</div>

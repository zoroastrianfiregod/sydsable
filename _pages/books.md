---
permalink: /books
layout: default
title: Books
---

{% assign books = site.books %}

<div class="tiles-section">
  {% for book in books %}
  {% if book.published %}
    <div class="book-tile">
      <div 
        class="book-thumb" 
        style="background-image: url('{{ site.baseurl }}/assets/imgs/illustrations/{{ book.image }}');"
      ></div>
      <div class="book-description">
        <p>{{ book.description }}</p>
        <a href="{{ book.url }}" class="book-button">
          Read more
        </a>
      </div>
    </div>
  {% endif %}
  {% endfor %}
</div>



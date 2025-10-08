---
permalink: /blog
layout: default
title: Blog
---


<ul class="blog-list-cards">
  {% for post in site.posts %}
    <li class="blog-card">
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>


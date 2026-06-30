---
layout: layout.html
title: Blog
---

# <img src="/images/BLOG.png" class="header-icon" alt="Blog Icon"> Blog


<div class="button-grid">
  {% for post in collections.post reversed %}
    <a href="{{ post.url }}" class="nav-button">
      <img src="{{ post.data.thumbnail }}" alt="{{ post.data.title }}">
    </a>
  {% endfor %}
</div>

<!-- The Dynamic Sticky Note -->
<div class="sticky-note">
  {% if collections.post.size > 0 %}
    You've reached the end of the posts...
  {% else %}
    No blog posts currently :c
  {% endif %}
</div>
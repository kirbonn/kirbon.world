---
layout: layout.html
title: Gallery
---

# <img src="/images/GALLERY.png" class="header-icon" alt="Blog Icon"> Gallery

<div class="masonry-grid">
  {% for image in galleryImages %}
    <img src="/gallery/{{ image }}" class="masonry-item" alt="Gallery Image">
  {% endfor %}
</div>
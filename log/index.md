---
layout: layout.html
title: Log
---

# <img src="/images/LOG.png" class="header-icon" alt="Blog Icon"> Log

{% if collections.log.size > 0 %}
  
  <div class="log-feed">
    {% for entry in collections.log reversed %}
      <div class="log-entry">
        <div class="log-date">{{ entry.date | date: "%B %d, %Y" }}</div>
        
        <div class="log-body">
          {{ entry.content }}
        </div>
      </div>
    {% endfor %}
  </div>

  <div class="sticky-note">
    You've reached the end...
  </div>

{% else %}

  <div class="sticky-note">
    no logs currently :c
  </div>

{% endif %}
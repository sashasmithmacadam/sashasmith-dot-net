---
layout: "base.njk"
title: "Poetry"
hidePageTitle: false
---

My {{ collections.poems | length }} poems, sorted from newest to oldest:

<ul class="spaced-list">
{% for poem in collections.poems %}
  <li><a href="{{ poem.url }}">{{ poem.data.title }}</a></li>
{% endfor %}
</ul>

<hr class="footer-hr">

- {% include "snippets/link-newsletter.njk" %}
- Read my essays → **[Essays]({{ '/essays/' | url }})**
- {% include "snippets/link-projects.njk" %}
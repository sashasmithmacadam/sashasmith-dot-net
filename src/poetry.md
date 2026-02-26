---
layout: "base.njk"
title: "Poetry"
hidePageTitle: false
eleventyNavigation:
  key: Poetry
  parent: Writing
  order: 2
---

<ul class="spaced-list">
{% for poem in collections.poems %}
  <li><a href="{{ poem.url }}">{{ poem.data.title }}</a></li>
{% endfor %}
</ul>

<hr class="footer-hr">

- {% include "snippets/link-email-list.njk" %}
- {% include "snippets/link-essays.njk" %}
- {% include "snippets/link-projects.njk" %}

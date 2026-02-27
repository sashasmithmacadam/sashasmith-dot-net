---
layout: "base.njk"
title: "Essays"
hidePageTitle: false
eleventyNavigation:
  key: Essays
  parent: Writing
  order: 1
---

<ul class="spaced-list">
{% for essay in collections.essays %}
  <li><a href="{{ essay.url }}">{{ essay.data.title }}</a></li>
{% endfor %}
</ul>

<hr class="footer-hr">

- {% include "snippets/link-email-list.njk" %}
- {% include "snippets/link-poetry.njk" %}
- {% include "snippets/link-projects.njk" %}

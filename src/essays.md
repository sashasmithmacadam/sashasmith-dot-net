---
layout: "base.njk"
title: "Essays"
hidePageTitle: false
---

My {{ collections.essays | length }} essays, sorted from newest to oldest:

<ul class="spaced-list">
{% for essay in collections.essays %}
  <li><a href="{{ essay.url }}">{{ essay.data.title }}</a></li>
{% endfor %}
</ul>

<hr class="footer-hr">

- {% include "snippets/link-newsletter.njk" %}
- Read my poetry → **[Poetry]({{ '/poetry/' | url }})**
- {% include "snippets/link-projects.njk" %}
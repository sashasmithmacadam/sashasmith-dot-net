---
layout: "base.njk"
title: "Now Archive"
permalink: "/then/"
hidePageTitle: false
---

My {{ collections.now | length }} [now]({{ '/now/' | url }}) updates in reverse chronological order.


<ul class="spaced-list">
{% for now in collections.now %}
  <li><a href="{{ now.url }}">{{ now.data.title }}</a></li>
{% endfor %}
</ul>

<hr class="footer-hr">

- {% include "snippets/link-now.njk" %}
- {% include "snippets/link-newsletter.njk" %}
- {% include "snippets/link-projects.njk" %}
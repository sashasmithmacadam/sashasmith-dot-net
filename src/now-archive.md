---
layout: "base.njk"
title: "Now Archive"
permalink: "/then/"
hidePageTitle: false
---

All my now updates:

<ul class="spaced-list">
{% for now in collections.now %}
  <li><a href="{{ now.url }}">{{ now.data.title }}</a></li>
{% endfor %}
</ul>

<hr class="footer-hr">

- {% include "snippets/link-email-list.njk" %}
- {% include "snippets/link-about.njk" %}

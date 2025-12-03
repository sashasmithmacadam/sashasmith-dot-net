---
layout: "base.njk"
title: "Newsletter Archive"
permalink: "/newsletter-archive/"
hidePageTitle: false
---

My {{ collections.newsletters | length }} newsletter issues in reverse chronological order:

<ul class="spaced-list">
{% for newsletter in collections.newsletters %}
  <li>Issue No. {{ newsletter.data.number }} → <a href="{{ newsletter.url }}">{{ newsletter.data.title }}</a></li>
{% endfor %}
</ul>

<hr class="footer-hr">

{% include "snippets/link-newsletter-subscribe-callout.njk" %}
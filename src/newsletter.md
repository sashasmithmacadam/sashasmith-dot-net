---
layout: "base.njk"
title: "Newsletter"
hidePageTitle: false
eleventyNavigation:
  key: Newsletter
  order: 5
---

I’m no longer sending the newsletter.

If you want occasional updates and project releases, join my [email list]({{ '/email-list/' | url }}).

<hr class="footer-hr">

**Past Issues** →

<ul class="spaced-list">
{% for newsletter in collections.newsletters %}
  <li><a href="{{ newsletter.url }}"><strong>{{ newsletter.data.title }}</strong></a></li>
{% endfor %}
</ul>

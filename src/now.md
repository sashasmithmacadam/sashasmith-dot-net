---
layout: "base.njk"
title: "Now"
hidePageTitle: false
eleventyNavigation:
  key: Now
  order: 6
---

_(This is [a now page](https://nownownow.com/about). If you have your own site, [you should make one](https://nownownow.com/about) as well.)_

{% set latest = collections.now[0] %}

Latest Update → **{{ latest.data.title }}**

<div class="latest-now-content">
  {{ latest.templateContent | safe }}
</div>

<hr class="footer-hr">

- {% include "snippets/link-now-archive.njk" %}
- {% include "snippets/link-projects.njk" %}
- {% include "snippets/link-about.njk" %}

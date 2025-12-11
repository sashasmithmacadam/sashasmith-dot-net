---
layout: "base.njk"
title: "Paintings"
hidePageTitle: false
eleventyNavigation:
  key: Paintings
  order: 4
---

{% for painting in collections.paintings %}

    <div class="painting-info painting-gallery">
        <a href="{{ painting.url }}"><img src="{{ painting.data.images }}" alt="{{ painting.data.title }} painting"></a>

        <a class="painting-title" href="{{ painting.url }}">{{ painting.data.title }}</a>

        <div class="painting-metadata">

            <p>{{ painting.data.dateStarted }} – {{ painting.data.dateEnded | yearSimple }}</p>

            <p>{{ painting.data.medium }}</p>

            <p>{{ painting.data.dimensions }}</p>

        </div>

    </div>

{% endfor %}

<hr class="footer-hr">

- {% include "snippets/link-projects.njk" %}
- {% include "snippets/link-music.njk" %}

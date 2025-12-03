---
layout: "base.njk"
title: "Book Notes"
hidePageTitle: false
---

Below you will find my {{ collections.booknotes | length }} book notes, sorted from newest to oldest.

There are three sections in each book notes page: 

- Metadata (book cover, title, author, publication date, date read)
- Synopsis
- Personal Notes

If you have book recommendations → [email me]({{ '/contact/' | url }}) 📚

<ul class="spaced-list">
{% for booknotes in collections.booknotes %}
  <li><a href="{{ booknotes.url }}">{{ booknotes.data.title }}</a> by <a href="{{ booknotes.data.authorLink }}">{{ booknotes.data.author }}</a></li>
{% endfor %}
</ul>

<hr class="footer-hr">

- {% include "snippets/link-newsletter.njk" %}
- Read my essays → **[Essays]({{ '/essays/' | url }})**
- {% include "snippets/link-projects.njk" %}
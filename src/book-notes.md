---
layout: "base.njk"
title: "Book Notes"
hidePageTitle: false
---

There are three sections in each book notes page:

- Metadata (book cover, title, author, publication date, date read)
- Synopsis
- Personal Notes

If you have book recommendations → [email me]({{ '/contact/' | url }}) 📚

<ul class="spaced-list">
{% for note in collections.booknotes %}
  <li><a href="{{ note.url }}">{{ note.data.title }}</a> by <a href="{{ note.data.authorLink }}">{{ note.data.author }}</a></li>
{% endfor %}
</ul>

<hr class="footer-hr">

- {% include "snippets/link-email-list.njk" %}
- {% include "snippets/link-essays.njk" %}
- {% include "snippets/link-projects.njk" %}

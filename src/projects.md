---
layout: "base.njk"
title: "Projects"
hidePageTitle: false
---

Here's a **selection** of my latest work.

Inside each piece, you’ll find links to previous work and to the full archive for that category (right at the bottom of the page).

{% set latestEssay = collections.essays[0] %}
{% set latestPoem = collections.poems[0] %}
{% set latestBooknote = collections.booknotes[0] %}
{% set latestPainting = collections.paintings[0] %}
{% set latestNewsletter = collections.newsletters[0] %}
{% set latestMusic = collections.music[0] %}
{% set latestNow = collections.now[0] %}

- **Music** → <a href="{{ latestMusic.url }}">{{ latestMusic.data.title }}</a>
- **Essay** → <a href="{{ latestEssay.url }}">{{ latestEssay.data.title }}</a>
- **Poem** → <a href="{{ latestPoem.url }}">{{ latestPoem.data.title }}</a>
- **Book Notes** → <a href="{{ latestBooknote.url }}">{{ latestBooknote.data.title }}</a>
- **Painting** → <a href="{{ latestPainting.url }}">{{ latestPainting.data.title }}</a>
- **Newsletter** → <a href="{{ latestNewsletter.url }}">{{ latestNewsletter.data.title }}</a>

Or check out what I'm up to these days → <a href="{{ latestNow.url }}">**Now**</a>

<hr class="footer-hr">

- {% include "snippets/link-contact.njk" %}
- {% include "snippets/link-deep-dive.njk" %}
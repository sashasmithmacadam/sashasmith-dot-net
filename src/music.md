---
layout: "base.njk"
title: "Music"
hidePageTitle: false
templateEngineOverride: "njk"
eleventyNavigation:
  key: Music
  order: 2
---

<p>
  You can listen to all my releases on:
  <a href="https://open.spotify.com/artist/6zskAcFVQdOflTkSPOqk0H?si=ATz1GGY9TjGAvqeRVcRGmA">Spotify</a>,
  <a href="https://music.apple.com/us/artist/sasha-smith/1348002347">Apple Music</a>,
  <a href="https://www.youtube.com/sashasmithxyz">YouTube</a>, and
  <a href="https://sashasmith.bandcamp.com/">Bandcamp</a>.
</p>

<div class="music-list music-release-list">
    {% for item in collections.music %}
        {% if not item.data.hidden %}
            <article class="music-list-item">

                <div class="music-details">
                    <div class="music-title-row">
                        <a class="music-title" href="{{ item.url | url }}">
                            {{ item.data.title }}
                        </a>
                        {% if item.data.releaseType %}
                            <span class="release-badge release-badge-desktop">{{ item.data.releaseType }}</span>
                        {% endif %}
                    </div>

                    {% if item.data.releaseType or item.data.date %}
                        <div class="music-meta-row">
                            {% if item.data.releaseType %}
                                <span class="release-badge release-badge-mobile">{{ item.data.releaseType }}</span>
                            {% endif %}

                            {% if item.data.date %}
                                <span class="music-year">
                                    {{ item.data.date.getFullYear() }}
                                </span>
                            {% endif %}
                        </div>
                    {% endif %}
                </div>

                <a class="music-thumb" href="{{ item.url | url }}">
                    <img src="{{ item.data.artwork }}" alt="{{ item.data.title }} artwork">
                </a>
            </article>
        {% endif %}
    {% endfor %}

</div>

<hr class="footer-hr">

{% set footerLinksMarkdown %}
- {% include "snippets/link-projects.njk" %}
- {% include "snippets/link-newsletter.njk" %}
{% endset %}
{{ footerLinksMarkdown | markdownify | safe }}

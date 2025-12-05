---
layout: "base.njk"
title: "Music"
hidePageTitle: false
eleventyNavigation:
    key: Music
    order: 2
---

You can listen to all my releases on: [Spotify](https://open.spotify.com/artist/6zskAcFVQdOflTkSPOqk0H?si=ATz1GGY9TjGAvqeRVcRGmA), [Apple Music](https://music.apple.com/us/artist/sasha-smith/1348002347), [YouTube](https://www.youtube.com/sashasmithxyz), and [Bandcamp](https://sashasmith.bandcamp.com/).

<div class="music-list">
    {% for item in collections.music %}
        {% if not item.data.hidden %}
            <article class="music-list-item">

                <a class="music-thumb" href="{{ item.url | url }}">
                    <img src="{{ item.data.artwork }}" alt="{{ item.data.title }} artwork">
                </a>

                <div>
                    <div class="music-title-row">
                        <a class="music-title" href="{{ item.url | url }}">
                            {{ item.data.title }}
                        </a>

                        {% if item.data.releaseType %}
                            <span class="release-badge">{{ item.data.releaseType }}</span>
                        {% endif %}
                    </div>

                    {% if item.data.date %}
                        <p class="music-year">
                            {{ item.data.date.getFullYear() }}
                        </p>
                    {% endif %}
                </div>
            </article>
        {% endif %}
    {% endfor %}
</div>

<hr class="footer-hr">

- {% include "snippets/link-projects.njk" %}
- {% include "snippets/link-newsletter.njk" %}
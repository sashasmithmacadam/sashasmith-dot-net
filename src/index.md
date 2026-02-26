---
layout: "base.njk"
title: "Home"
hidePageTitle: true
eleventyNavigation:
  key: Home
  order: 1
---

Hey, it’s [Sash]({{ '/about/' | url }}).

I make [music]({{ '/music/' | url }}), [write]({{ '/writing/' | url }}) a lot, and [paint]({{ '/paintings/' | url }}) a little.

[Success]({{ '/success/' | url }}), to me, is simply to keep creating for as long as I'm here.

I recently released an EP — *[Running Down Dark Alleys Blind]({{ '/rddab/' | url }})*.

<p style="text-align: center;">
  <a href="{{ '/rddab/' | url }}" style="display: inline-block; line-height: 0;">
    <img
      src="{{ '/assets/images/music-artwork/running-down-dark-alleys-blind.jpg' | url }}"
      alt="Running Down Dark Alleys Blind artwork"
      style="display: block; width: 250px; max-width: 100%; height: auto; border-radius: 12px;"
    >
  </a>
</p>

{% set featuredRelease = null %}
{% for ep in collections.eps %}
  {% if ep.url == '/rddab/' %}
    {% set featuredRelease = ep %}
  {% endif %}
{% endfor %}

{% set featuredListenLinks = [] %}
{% if featuredRelease %}
  {% if featuredRelease.data.spotify %}
    {% set featuredListenLinks = featuredListenLinks.concat([{ name: "Spotify", url: featuredRelease.data.spotify }]) %}
  {% endif %}
  {% if featuredRelease.data.appleMusic %}
    {% set featuredListenLinks = featuredListenLinks.concat([{ name: "Apple Music", url: featuredRelease.data.appleMusic }]) %}
  {% endif %}
  {% if featuredRelease.data.bandcamp %}
    {% set featuredListenLinks = featuredListenLinks.concat([{ name: "Bandcamp", url: featuredRelease.data.bandcamp }]) %}
  {% endif %}
  {% if featuredRelease.data.youtube %}
    {% set featuredListenLinks = featuredListenLinks.concat([{ name: "YouTube", url: featuredRelease.data.youtube }]) %}
  {% endif %}
{% endif %}

{% if featuredListenLinks.length %}
Listen here → {% for item in featuredListenLinks %}<a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.name }}</a>{% if not loop.last %}, {% else %}.{% endif %}{% endfor %}
{% else %}
Listen here → coming soon.
{% endif %}

Or have a look around:

- {% include "snippets/link-projects.njk" %}
- {% include "snippets/link-now.njk" %}
- {% include "snippets/link-deep-dive.njk" %}

I also send occasional [email updates]({{ '/email-list/' | url }}) about new work. I’m not much of a social media person, so email is the best way to stay in the loop.

And if you ever feel like [reaching out]({{ '/contact/' | url }}), even just to say hi, please do!

That’s all, thanks for dropping by.

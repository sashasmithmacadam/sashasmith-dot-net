---
layout: "base.njk"
title: "Newsletter"
hidePageTitle: false
eleventyNavigation:
    key: Newsletter
    order: 5
---

*The newsletter’s taking a short break while I finish up some projects.* *Subscribe below to get updates as soon as they’re ready.*

<div class="callout">

In this [new era]({{ '/about/#new-era/' | url }}), my newsletter is one of my main priorities. Right after my [artistic projects]({{ '/projects/' | url }}) — the work that consumes my deep, focused hours — and my [one on one conversations]({{ '/contact/' | url }}) with real people via email, this is the most important thing I do.

It’s my lifeline for creating & connecting — the best way I’ve found to invite you to share the journey with me.

</div>

**When** → Wednesdays

**What** →  
⨀ What I’m creating — music, writing, paintings  
⨀ What I’m learning — ideas and inspiration  
⨀ What I’m loving — books, music, and moments worth sharing

**Why** → A midweek oasis — a pause to reflect, recharge, and connect

**For →** The outsiders, the eccentrics, the crazies. As Bukowski said:

> *“Some people never go crazy. What truly horrible lives they must lead.”*

**Length** → Blaise Pascal once said:

> *“I have only made this letter longer because I have not had the time to make it shorter.”*

My promise to you? I’ll put in the time to make each newsletter short but impactful. No algorithms, no noise → the best things I find and create, straight to your inbox.

**Subscribe** → I said [goodbye to social media]({{ '/about/#new-era/' | url }}) in favour of a personal website and newsletter, and I love it. I hope you'll join me on this journey — you can add yourself to the email list down below:

{% include "forms/form-convertkit-subscribe.njk" %}

**Recent Issues** →
<ul class="spaced-list">
{% for newsletter in collections.newsletters %}
  <li><a href="{{ newsletter.url }}"><strong>{{ newsletter.data.title }}</strong></a></li>
{% endfor %}
</ul>

*(Want to see all newsletter issues to date? Check out the [newsletter archive]({{ '/newsletter-archive/' | url }}).)*

**Lastly** → let's be loud together. Please [**reach out**]({{ '/contact/' | url }}) — reply to any newsletter or email me → sasha@sashasmith.net

> *“If you ask me what I came to do in this world, I, an artist, will answer you: I am here to live out loud.”*  
― Émile Zola
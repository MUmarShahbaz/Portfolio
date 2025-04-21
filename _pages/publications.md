---
permalink: /publications/
layout: default
title: Publications
nav-order: 5
js:
  - carousel
---
<br class="spacer">
<h1 class="heading uppercase">Research Papers</h1>
<div class="carousel">
  <div class="track">
  {% assign Research_Papers = site.data.publications | where: "type", "Research Paper" | sort: "year" %}
  {% for paper in Research_Papers %}
    {% capture body %}
      <p class="center-text bold-text">{{ paper.year }}</p>
      <p style="font-size: small;">{{ paper.description }}</p>
    {% endcapture %}
    {% include card.liquid img=paper.image title=paper.name body=body link=paper.url target="_self" loading="eager" %}
  {% endfor %}
  </div>
  <button class="button prev-button"><</button>
  <button class="button next-button">></button>
</div>

<h1 class="heading uppercase">Short Articles</h1>
<div class="carousel">
  <div class="track">
  {% assign Short_Articles = site.data.publications | where: "type", "Short Article" | sort: "year" %}
  {% for paper in Short_Articles %}
    {% capture body %}
      <p class="center-text bold-text">{{ paper.year }}</p>
      <p style="font-size: small;">{{ paper.description }}</p>
    {% endcapture %}
    {% include card.liquid img=paper.image title=paper.name body=body link=paper.url target="_self" loading="eager" %}
  {% endfor %}
  </div>
  <button class="button prev-button"><</button>
  <button class="button next-button">></button>
</div>
<br class="spacer">
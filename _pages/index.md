---
permalink: /
layout: default
title: Home
nav-order: 1
js:
  - carousel
---
<br class="spacer">

{% assign icon_pic = "/assets/img/icon.png" %}
<div class="center-element">
<img src="{{ icon_pic | split: '.' | first | relative_url }}-480.webp" width="300px" height="300px" loading="eager" class="circle" alt="MUS Icon" onerror="this.onerror=null; this.src='{{ icon_pic | relative_url }}';" >
</div>

<h1 class="heading center-text uppercase">MUS Archives</h1>
<br class="spacer">
<h2 class="heading uppercase">Publications</h2>
<div class="carousel">
  <div class="track">
  {% assign Papers = site.data.publications | sort: "year" %}
  {% for paper in Papers %}
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
<h2 class="heading uppercase">Best Projects</h2>
<div class="carousel">
  <div class="track">
  {% assign Best_Projects = site.projects | where_exp: "project", "project.best" | sort: "best" %}
  {% for project in Best_Projects %}
    {% capture body %}
      {% include tech-icons.liquid icons=project.icons icon-width="50px" %}
      <br class="spacer">
    {% endcapture %}
    {% include card.liquid img=project.image title=project.title body=body link=project.url target="_self" loading="eager" %}
  {% endfor %}
  </div>
  <button class="button prev-button"><</button>
  <button class="button next-button">></button>
</div>

<h2 class="heading uppercase">Tech Stack</h2>
<div class="center-element row p-margins icons">
    {% for icon in site.data.tech.languages %}
      <img style="width: 50px; height: 50px" src="{{ icon.path }}" alt="{{ icon.name }}" class="icon no-shadow no-padding" title="{{ icon.name }}" loading="lazy">
    {% endfor %}
    {% for icon in site.data.tech.tools %}
      <img style="width: 50px; height: 50px" src="{{ icon.path }}" alt="{{ icon.name }}" class="icon no-shadow no-padding" title="{{ icon.name }}" loading="lazy">
    {% endfor %}
</div>
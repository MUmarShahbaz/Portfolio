---
permalink: /
layout: default
title: Home
nav-order: 1
js:
  - carousel
---
<br class="spacer">
<div class="center-element">
{% include figure.liquid path="/assets/img/icon.png" loading="eager" class="circle img-center-h" width="300px" zoomable=true %}
{% include figure.liquid path="/assets/img/Home/profile_picture.jpg" loading="eager" class="circle img-center-h" width="300px" zoomable=true %}
</div>

<h1 class="heading center-text uppercase">MUS Archives</h1>
<br class="spacer">
<h3 class="heading uppercase">Publications</h3>
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
<h3 class="heading uppercase">Best Projects</h3>
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

<h3 class="heading uppercase">Tech Stack</h3>
<div class="center-element row p-margins icons">
    {% for icon in site.data.tech.languages %}
        {% include figure.liquid path=icon.path width="50px" class="no-shadow " %}
    {% endfor %}
    {% for icon in site.data.tech.tools %}
        {% include figure.liquid path=icon.path width="50px" class="no-shadow " %}
    {% endfor %}
</div>
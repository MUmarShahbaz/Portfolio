---
permalink: /projects/
layout: default
title: Projects
nav-order: 4
project-intros: true
css:
  - project
js:
  - carousel
---

<h1 class="heading uppercase">Prominent Projects</h1>
<div class="carousel">
  <div class="track">
  {% assign Best_Projects = site.projects | where_exp: "project", "project.best" | sort: "best" %}
  {% assign Pageless_Best_Projects = site.data.pageless-projects | where_exp: "project", "project.best" | sort: "best" %}
  {% for project in Best_Projects %}
    {% capture body %}
      {% include tech-icons.liquid icons=project.icons icon-width="50px" %}
      <p style="font-size: small;">{{ project.description }}</p>
    {% endcapture %}
    {% include card.liquid img=project.image title=project.title body=body link=project.url loading="eager" %}
  {% endfor %}
  {% for project in Pageless_Best_Projects %}
    {% capture body %}
      {% include tech-icons.liquid icons=project.icons icon-width="50px" %}
      <p style="font-size: small;">{{ project.description }}</p>
    {% endcapture %}
    {% include card.liquid img=project.image title=project.title body=body loading="eager" %}
  {% endfor %}
  </div>
  <button class="button prev-button"><</button>
  <button class="button next-button">></button>
</div>



<br class="spacer">
<h1 class="uppercase heading">Other Projects</h1>

<div style="margin: 5%">
{% assign Not_Best_Projects = site.projects | where: "best", nil %}
{% assign Pageless_Not_Best_Projects = site.data.pageless-projects | where: "best", nil %}
{% for project in Not_Best_Projects %}
<hr class="big-spacer">
{% include project-intro.liquid title=project.title description=project.description img=project.image icons=project.icons link=project.url %}
{% endfor %}
{% for project in Pageless_Not_Best_Projects %}
<hr class="big-spacer">
{% include project-intro.liquid title=project.title description=project.description img=project.image icons=project.icons link=project.url %}
{% endfor %}
</div>
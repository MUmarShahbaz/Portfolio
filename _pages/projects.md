---
permalink: /projects/
layout: default
title: Projects
nav-order: 4
project-intros: true
---

<br class="spacer">

<div class="heading title-with-element">
<h1 class="uppercase inline" >Projects</h1>
<button class="button element">Switch View</button>
</div>

<div style="margin: 5%">
{% for project in site.projects %}
{% include project-intro.liquid title=project.title description=project.description img=project.img icons=project.icons link=project.url %}
{% endfor %}
</div>
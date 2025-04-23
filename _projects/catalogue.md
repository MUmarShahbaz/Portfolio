---
layout: default
display_categories: [Work in Progress, Community Projects & Developer Tools, Self-Learning Projects for Computer Engineering, Generic Projects]
title: Projects
---
{% include /elements/heading.liquid align="left" text="Projects" %}

<div>
  {% include elements/redirect_button.liquid link="index" text="Switch to Descriptive View" width="500px" id="descriptive-view" %}
</div>

<hr>

<h2>Project Difficulty Grading:</h2>

<table>
  <thead>
    <tr>
      <th style="text-align: center">Grade</th>
      <th style="text-align: left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center"><h2>S+</h2></td>
      <td style="text-align: left">Extremely Complex</td>
    </tr>
    <tr>
      <td style="text-align: center"><h2>S</h2></td>
      <td style="text-align: left">Complex</td>
    </tr>
    <tr>
      <td style="text-align: center"><h2>A</h2></td>
      <td style="text-align: left">Difficult</td>
    </tr>
    <tr>
      <td style="text-align: center"><h2>B</h2></td>
      <td style="text-align: left">Slightly Difficult</td>
    </tr>
    <tr>
      <td style="text-align: center"><h2>C</h2></td>
      <td style="text-align: left">Easy</td>
    </tr>
  </tbody>
</table>

{% for category in page.display_categories %}
  {% include /elements/sub-heading.liquid text=category %}
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="card-container">
    {% for project in sorted_projects %}
      {% include elements/card.liquid link=project.Link target="_self" img=project.img title=project.title grade=project.grade description=project.description %}
    {% endfor %}
  </div>
{% endfor %}
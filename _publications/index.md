---
layout: default
display_categories: [Research Papers, Short Articles]
title: Publications
---
{% include elements/heading.liquid align="left" text="Publications" %}

{% for category in page.display_categories %}
  {% include /elements/sub-heading.liquid text=category %}
  {% assign categorized_publications = site.publications | where: "category", category %}
  {% assign sorted_publications = categorized_publications | sort: "importance" %}
  
  <div class="card-container">
    {% for publication in sorted_publications %}
      {% include elements/card.liquid link=publication.Link img=publication.img title=publication.title description=publication.description id=publication.id %}
    {% endfor %}
  </div>
{% endfor %}
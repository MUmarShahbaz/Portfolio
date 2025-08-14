---
title: MUS
description: Portfolio website of M. Umar Shahbaz
image: icon.png
prefrence: 1
repository: MUmarShahbaz/Portfolio
icons:
   - Bootstrap
   - Jekyll
   - Docker
   - Actions
permalink: /projects/MUS.html
layout: project
category: wip
container_classes: container py-5
dynamic_assets:
  files:
   - code.css
   - mermaid.min.js
---

# Technical Details

## Overview
This website is powered by **Jekyll**, a static site generator that transforms structured data and content into a fast, lightweight, and secure static website.  
A key feature of this site is the **automatic generation of sections and pages from YAML-based schemas**, ensuring consistency, scalability, and easy updates without manual HTML editing.

---

## Build & Deployment
{% mermaid %}
flowchart TD;
    A[Data];
    B[Schemas];
    C[Jekyll];
    D[Generated Site];
    E[Asset Optimization];
    F[PurgeCSS];
    G[Terser];
    H[Image Optimization];
    I[Collect All];
    J[Publish to GitHub Pages];

    A --> C;
    B --> C;
    C --> D;
    D --> E;
    E --> F --> I;
    E --> G --> I;
    E --> H --> I;
    I --> J;
{% endmermaid %}

---

## Benefits of This Approach
- **Automation:** Sections and pages update instantly when schemas change.
- **Performance:** Static HTML loads fast without server-side processing.
- **Security:** No backend code execution.
- **Consistency:** Centralized schemas avoid repetition.
- **Scalability:** Easy to add new projects, skills, or links without touching HTML.

---

## Libraries
- **Bootstrap** – Responsive grid system and UI components
- **AOS (Animate On Scroll)** – Scroll-triggered animations
- **Font Awesome (FA)** – Icon set for UI and branding
- **Devicons** – Icons for programming languages and tools
- **Fuse.js** – Client-side fuzzy search
- **Mermaid** - Flowcharts

---

## Auto-Generated Content

A major strength of this site is its reliance on **YAML-based schemas** to drive content generation.  
These schemas are processed by Liquid templates to produce HTML automatically.

### 1. Social Links (`_data/socials.yml`)
**Schema:**  
{% highlight yaml %}
<icon_key>: <url>
{% endhighlight %}

**Example:**  
{% highlight yaml %}
fab.github: https://github.com/USERNAME
fab.linkedin: https://www.linkedin.com/in/USERNAME
fas.rss: https://example.com/feed.xml
{% endhighlight %}

**Usage:**  
Populates footer social icons dynamically, mapping each Font Awesome icon key to its corresponding URL.

---

### 2. Skills (`_data/skills.yml`)
**Schema:**  
{% highlight yaml %}
- title: <skill_group_title>
  subtitle: <short_description>
  icons:
    - <icon_key>
    - <icon_key>
{% endhighlight %}

**Example:**  
{% highlight yaml %}
- title: MERN Stack
  subtitle: Web Development (WIP)
  icons:
    - MongoDB
    - Express
    - React
    - NodeJS
{% endhighlight %}

**Usage:**  
Generates skill cards displayed at the homepage with matching icons and subtitles.

---

### 3. Projects (`_projects/*.md`)
**Schema:**  
{% highlight yaml %}
---
title: <project_name>
description: <short_description>
image: <image_url_or_path>
prefrence: <number_for_sorting>
repository: <github_owner/repository>
icons:
  - <icon_key>
  - <icon_key>
permalink: /projects/<slug>
layout: project
category: prominent | wip | planned
container_classes: <css_classes>
---
<page_content>
{% endhighlight %}

**Usage:**  
Used to generate pages for Project Descriptions (including this one)

---

### 4. Icons (`_data/icons.yml`)
**Schema:**  
{% highlight yaml %}
<icon_key>:
  class: <css_class>
  color: <hex_color>
{% endhighlight %}

**Example:**  
{% highlight yaml %}
MongoDB:
  class: devicon-mongodb-plain
  color: '#4DB33D'
{% endhighlight %}

**Usage:**  
A set of reusable icons.
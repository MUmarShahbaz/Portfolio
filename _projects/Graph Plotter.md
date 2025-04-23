---
layout: project
category: Community Projects & Developer Tools
importance: 5
Link: /projects/Graph Plotter.html
img: /assets/media/Projects/GP/GP.png
title: Graph Plotter
grade: S
icons:
  - file: processing
    site: skillicons
repository:
  - name: Graph-Plotter
related_projects: [Oscilloscope Online]
description: >
  A custom library, complete with documentation, for creating line or other graphs on Processing IDE. If you can code it, you can graph it.
slideshow: true
---

<div align="center">
<b style="font-size: 2em; font-family:cursive">If you can code it, you can plot it</b>
</div>
<br><br>

## What is Graph Plotter?  
Graph Plotter is a powerful library designed to plot line graphs for almost anything. It supports multiple data sources, including:  

- **Manual Data Entry** — Add data points manually for quick plotting.  
- **Live Serial Data** — Connect a serial device (e.g., an experimental apparatus) to plot real-time data.  
- **Mathematical Expressions** — Plot equations like _**y = 2x + 9**_ using standard mathematical notation.  
- **Pre-Filled Arrays** — Generate graphs from pre-existing datasets.  

## Why did I make this?
After making multiple projects using Arduino, I decided that it was time for a bit of change. So I started experimenting with **Digital Electronics**, beginning with a 555 IC in Astable mode (Square Wave generator). I wanted to view the square wave being generated, and so I made a demo on Processing IDE. After that I expanded this into a library so I can use it whenever I want and share it for others to use as well.

## Features

| No. | Feature                                    |
|:---:|:------------------------------------------:|
| 1   | Modify graph resolution                    |
| 2   | Complete control over layering and drawing |
| 3   | Unlimited Graphs and Plots                 |
| 4   | Customize Axis Titles                      |
| 5   | Modify Plot Boundaries                     |
| 6   | Array to graph conversion                  |
| 7   | Graph Coordinate mapping functions         |
| 8   | Manually select colors of graphs           |
| 9   | Auto-clipping graph outside the plot       |
| 10  | Change Background color                    |
| 11  | Enable/Disable Points                      |
| 12  | Enable/Disable SubGrid                     |
| 13  | Array Index to X conversion                |

---

{% include elements/redirect_button.liquid link="https://github.com/MUmarShahbaz/Graph-Plotter/blob/main/Graph%20Plotter/README.md" text="Read Documentation" id="View-GP" %}

---

## Examples of -> <b style="font-family:cursive">If you can code it, you can plot it</b>

<div class="slideshow-container overlay">
{% include elements/slideshow/overlay.liquid title="Graph with Logarithmic axises" %}
{% include elements/slideshow/slide.liquid state="active" data-title="Graph with Logarithmic axises" img="https://github.com/MUmarShahbaz/Graph-Plotter/raw/main/Experiments/scales/logarithmic%20scale/Screenshots/Screenshot2.png" %}
{% include elements/slideshow/slide.liquid data-title="Graph with Factorial axises" img="https://github.com/MUmarShahbaz/Graph-Plotter/raw/main/Experiments/scales/y%20over%20x!/Screenshots/Screenshot2.png" %}
{% include elements/slideshow/slide.liquid data-title="Grid-less plot" img="https://github.com/MUmarShahbaz/Graph-Plotter/raw/main/Graph%20Plotter/images/screenshots/Screenshot%20(5).png" %}
{% include elements/slideshow/slide.liquid data-title="Custom colors" img="https://github.com/MUmarShahbaz/Graph-Plotter/raw/main/Graph%20Plotter/images/screenshots/Screenshot%20(9).png" %}
{% include elements/slideshow/slide.liquid data-title="Multiple Grids and plots" img="https://github.com/MUmarShahbaz/Graph-Plotter/blob/main/Graph%20Plotter/images/screenshots/Screenshot%20(10).png?raw=trueg" %}
</div>
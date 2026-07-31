---
fmContentType: project
title: Oscilloscope Online
description: Advanced Web Serial Plotter with automation. Use any cheap MCU as a Digital Oscilloscope.
image: /img/original/projects/oscilloscope-online/icon.png
prefrence: 1
featured: true
repository: MUmarShahbaz/Oscilloscope-Online-V2
icons:
   - TypeScript
   - NodeJS
   - Bootstrap
   - Jekyll
   - Docker
   - Actions
external_refrence:
   url: https://mumarshahbaz.github.io/Oscilloscope-Online-V2/
   text: Open Oscilloscope Online
permalink: /projects/Oscilloscope-Online.html
layout: project
category: web_development
container_classes: container py-5
dynamic_assets:
   files:
      - mermaid.min.js
---

# Technical Details

## Overview
Oscilloscope Online is a lightweight, browser-based serial plotter powered by the Web Serial API. It enables anyone to visualize and monitor signals, sensor data, and other values directly from a microcontroller (MCU)—without needing costly oscilloscopes or complex data loggers.

Serving as a feature-rich alternative to the Arduino IDE Serial Plotter, it features a clean UI, high-performance and interactive charts via **uPlot**, and multiple export formats for superior real-time visualization.

Compatible with any serial device—including Arduino, ESP32, STM32, and Raspberry Pi—it supports research, sensor analysis, and hobbyist robotics projects.

Fully client-side and requiring no installations, Version 2 introduces advanced controls, enhanced customization, and automation features (e.g., special-character triggers for downloads and screen clearing) to streamline workflows.

Fast, versatile, and accessible, Oscilloscope Online makes professional-grade serial data monitoring simple and efficient.

---

<section aria-label="Compatibility" class="container-fluid my-5 p-5 "> <h2 class="display-5 text-center my-3 fw-bold aos-init aos-animate" data-aos="fade-up">Compatible with all Serial Devices</h2> <div class="row my-3 g-5"> <div class="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up"> <div class="card"> <figure class="card-img-top ratio ratio-1x1 overflow-hidden bg-white"> <img src="https://mumarshahbaz.github.io/Oscilloscope-Online-V2/assets/img/mcu/arduino.webp" alt="Arduino" class="img-fluid w-100 h-100 d-block" style="object-fit: contain;" loading="lazy"> </figure> <div class="card-body"> <h3 class="card-title text-center">Arduino</h3> </div> </div> </div> <div class="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up"> <div class="card"> <figure class="card-img-top ratio ratio-1x1 overflow-hidden bg-white"> <img src="https://mumarshahbaz.github.io/Oscilloscope-Online-V2/assets/img/mcu/raspberry-pi.webp" alt="Rapsberry Pi" class="img-fluid w-100 h-100 d-block" style="object-fit: contain;" loading="lazy"> </figure> <div class="card-body"> <h3 class="card-title text-center">Rapsberry Pi</h3> </div> </div> </div> <div class="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up"> <div class="card"> <figure class="card-img-top ratio ratio-1x1 overflow-hidden bg-white"> <img src="https://mumarshahbaz.github.io/Oscilloscope-Online-V2/assets/img/mcu/esp32.webp" alt="ESP32" class="img-fluid w-100 h-100 d-block" style="object-fit: contain;" loading="lazy"> </figure> <div class="card-body"> <h3 class="card-title text-center">ESP32</h3> </div> </div> </div> </div> </section>
<section aria-label="Features" class="container-fluid my-5 p-5"> <h2 class="display-5 text-center my-3 fw-bold aos-init" data-aos="fade-up">Powerful Features of the Serial Plotter</h2> <div class="row my-3 g-5"> <div class="col-12 col-md-4 aos-init" data-aos="fade-up"> <div class="card"> <figure class="card-img-top ratio ratio-1x1 overflow-hidden bg-white"> <img src="https://mumarshahbaz.github.io/Oscilloscope-Online-V2/assets/img/features/customization.webp" alt="Endless Options" class="img-fluid w-100 h-100 d-block" style="object-fit: contain;" loading="lazy"> </figure> <div class="card-body"> <h3 class="card-title text-center">Endless Options</h3> </div> </div> </div> <div class="col-12 col-md-4 aos-init" data-aos="fade-up"> <div class="card"> <figure class="card-img-top ratio ratio-1x1 overflow-hidden bg-white"> <img src="https://mumarshahbaz.github.io/Oscilloscope-Online-V2/assets/img/features/plug-and-play.webp" alt="Plug-and-Play" class="img-fluid w-100 h-100 d-block" style="object-fit: contain;" loading="lazy"> </figure> <div class="card-body"> <h3 class="card-title text-center">Plug-and-Play</h3> </div> </div> </div> <div class="col-12 col-md-4 aos-init" data-aos="fade-up"> <div class="card"> <figure class="card-img-top ratio ratio-1x1 overflow-hidden bg-white"> <img src="https://mumarshahbaz.github.io/Oscilloscope-Online-V2/assets/img/features/export.webp" alt="Export Formats" class="img-fluid w-100 h-100 d-block" style="object-fit: contain;" loading="lazy"> </figure> <div class="card-body"> <h3 class="card-title text-center">Export Formats</h3> </div> </div> </div> </div> </section>
<section aria-label="Usage" class="container-fluid my-5 p-5 "> <h2 class="display-5 text-center my-3 fw-bold aos-init" data-aos="fade-up">Where can you use it?</h2> <div class="row my-3 g-5"> <div class="col-12 col-md-4 aos-init" data-aos="fade-up"> <div class="card"> <figure class="card-img-top ratio ratio-1x1 overflow-hidden bg-white"> <img src="https://mumarshahbaz.github.io/Oscilloscope-Online-V2/assets/img/usage/research.webp" alt="Research Work" class="img-fluid w-100 h-100 d-block" style="object-fit: contain;" loading="lazy"> </figure> <div class="card-body"> <h3 class="card-title text-center">Research Work</h3> </div> </div> </div> <div class="col-12 col-md-4 aos-init" data-aos="fade-up"> <div class="card"> <figure class="card-img-top ratio ratio-1x1 overflow-hidden bg-white"> <img src="https://mumarshahbaz.github.io/Oscilloscope-Online-V2/assets/img/usage/testing.webp" alt="Electronics Testing" class="img-fluid w-100 h-100 d-block" style="object-fit: contain;" loading="lazy"> </figure> <div class="card-body"> <h3 class="card-title text-center">Electronics Testing</h3> </div> </div> </div> <div class="col-12 col-md-4 aos-init" data-aos="fade-up"> <div class="card"> <figure class="card-img-top ratio ratio-1x1 overflow-hidden bg-white"> <img src="https://mumarshahbaz.github.io/Oscilloscope-Online-V2/assets/img/usage/maths.webp" alt="Live Math &amp; Variables" class="img-fluid w-100 h-100 d-block" style="object-fit: contain;" loading="lazy"> </figure> <div class="card-body"> <h3 class="card-title text-center">Live Math &amp; Variables</h3> </div> </div> </div> </div> </section>

<hr class="my-5">

## New Update!!

The project does not end here!! Version 3 is in the works and it will go above and beyond. You can expect it to offer the ability to plot charts from **Audio**, **Mathematical/Programatic Expressions**, **Google Forms Responses**, **Javascript Code** and **Tabular Data** on top of **Serial Plotting**.

<hr class="my-5">

## Under the hood of V2

### Build and Deployment

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
    K[TypeScript];
    L[Convert to JavaScript];

    K --> L --> C;
    A --> C;
    B --> C;
    C --> D;
    D --> E;
    E --> F --> I;
    E --> G --> I;
    E --> H --> I;
    I --> J;
{% endmermaid %}

<hr class="my-5">

### Usage Workflow

{% mermaid %}
flowchart TD;
   A[Open the Setup Form];
   AA[Configure as needed];
   B[Auto-Redirected to the Plotter];
   BB[Connect Serial Device];
   BBB[Start Plotting];
   BBBB[Download in any export format];
   BBBBB[Download JSON];
   C[Open SVG Form];
   CC[Upload JSON];
   CCC[Configure SVG Settings];
   CCCC[Generate SVG];
   CCCCC[Download SVG];

   A --> AA --> B;
   B --> BB --> BBB;
   BBB --> BBBB;
   BBB --> BBBBB --> C;
   C --> CC --> CCC --> CCCC --> CCCCC;
{% endmermaid %}
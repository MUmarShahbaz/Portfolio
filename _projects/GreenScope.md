---
layout: project
category: Work in Progress
importance: 3
Link: /projects/GreenScope.html
img: /assets/media/Projects/GS/GS.jpg
title: GreenScope
grade: S+
icons:
  - file: php/php-original.svg
    site: devicons
  - file: mysql/mysql-original.svg
    site: devicons
  - file: processing
    site: skillicons
  - file: javascript/javascript-original.svg
    site: devicons
  - file: html5/html5-original.svg
    site: devicons
  - file: sass/sass-original.svg
    site: devicons
  - file: https://sissel.gallerycdn.vsassets.io/extensions/sissel/shopify-liquid/4.0.1/1699358936199/Microsoft.VisualStudio.Services.Icons.Default
repository:
  - author: GreenScope
    name: greenscope.github.io
  - author: GreenScope
    name: EEDL
  - author: GreenScope
    name: DBA
  - author: alshedivat
    name: al-folio
related_projects: [ESP32 Environmental Data Logger, Oscilloscope Online V2]
vip: 2
description: >
  A low-cost environmental data logger and mini-weather station network that collects live data, stores it on an SQL Server, and provides public access via graphs, raw data, and an AI chatbot.
---

{% include elements/redirect_button.liquid text="Open GreenScope" id="open-GS" link="https://greenscope.github.io/" %}

---

## Brief Description
GreenScope is a an Archive that stores information regarding the environment of Pakistan. It uses it's own apparatus called EEDLs (ESP Environmental Data Loggers) to gather relevant information. EEDLs are mini weather stations which take live readings and transmit them to the GreenScope database. GreenScope offers features such as graphing, AI data analysis and API keys to import readings for your own projects.

## Goal
We wish to promote the usage of Robotics in Measuring & Monitoring the environmental conditions of Pakistan at a greater extent. We wish to display a method cheap enough so that it can be used in remote non-urban areas. For this purpose the apparatus we developed, EEDL, costs roughly Rs 50K. We wish to make the data collected by GreenScope available to all including students to promote student projects based upon environment. This is why we not only provide an AI chatbot to analyze the data based on user requirements, but we also provide API keys to import the data into your own program.

## Scalability
At the current stage, Green Scope is just going to record data from different parts of Lahore, Pakistan, but the main selling point of our site is it's scalability. We are creating Green Scope in such a way that minimizes initial configurations and helps in the ease of expansion of the system. We intend to use a unified transmission setup that can be configured directly from the EEDL allowing us to introduce as many new EEDLs with no changes to the website. Should there be a need to make changes to the website we are using Jekyll, a static site builder, to ensure that any additions can be made by simply filling up a few variables.

<hr>

# The Plan

{% include elements/image.liquid src="/assets/media/Projects/GS/Mind%20Map.png" max-width="1500px" %}

{% include elements/redirect_button.liquid text="Download PDF" id="download-GS-plan" link="/assets/media/Projects/GS/Mind%20Map.pdf" %}

<hr>

## Current Status

{% include elements/image.liquid src="/assets/media/Projects/GS/Task Summary · Green Scope.png" max-width="1500px" %}

{% include elements/redirect_button.liquid text="Download PDF" id="download-GS-TS" link="/assets/media/Projects/GS/Task Summary · Green Scope.pdf" %}

<hr>

## EEDL
EEDL stands for *ESP32 Environmental Data Logger*. It uses multiple dedicated sensors to take readings and calculate certain values and transmits the values to the GreenScope database using PHP and SQL. The ESP32 serves as the control unit, transmitter and a sequencer. The EEDL costs roughly around Rs 50K and can record the following:

{% include elements/redirect_button.liquid text="View EEDL" link="EEDL.html" %}


{% include elements/heading.liquid text="Collaborators" %}

| Name             | Contribution                                                        |
|:----------------:|:--------------------------------------------------------------------|
| M. Umar Shahbaz  | Database, Website, Graph Plotter, Administration, Documentation,    |
| M. Ahsan Saleem  | Database, Website, Graph Plotter                                    |
| Maarij Zafar     | EEDL software, AI Statistics                                        |
| Arafat Bhatti    | EEDL Design, 3D Modelling                                           |
| Ch. Abdur Rehman | Finances                                                            |
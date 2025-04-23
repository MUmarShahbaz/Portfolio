---
layout: project
category: Community Projects & Developer Tools
importance: 4
Link: /projects/Oscilloscope Online.html
img: /assets/media/Projects/OO/OO.png
title: Oscilloscope Online
grade: S
icons:
  - file: processing
    site: skillicons
  - file: javascript/javascript-original.svg
    site: devicons
  - file: html5/html5-original.svg
    site: devicons
repository:
  - name: Oscilloscope-Online
related_projects: [Oscilloscope Online V2, Graph Plotter]
vip: 5
description: >
  A web-based oscilloscope that interfaces with microcontrollers to capture, visualize, and analyze real-time signals remotely.
---
## How it began
Initially I was working on a circuit where I ended up needing to measure the frequency of a clock circuit. My first attempt was using a slow motion camera and counting the number of times an LED connected to it would light up in 1 second, but doing it over and over again became tedious. My second solution was to connect it to a serial device and count the number of 1s and 0s, I soon realized that the sea of 1s and 0s would not allow me to do so. Finally I tried to use the serial plotter provided in the Arduino IDE and count the number of peaks in 1 second. In the Arduino IDE you can't view more than a certain number of readings at once, this meant that I would need to count the peaks whilst it is plotting around 50 readings per second. After exhausting all options, I decided to create my own Plug & Play Serial Data Plotter. This is the Oscilloscope Online.

## Goal

I made this not just as an alternate to actual expensive oscilloscopes, but also to monitor values in different experimentation. This project was made whilst keeping in mind how to make it multipurpose. This can be used to compare sensor outputs against mathematical graphs, Determining accuracy and precision of modules, etc.

---

## Features

| Feature                             |
|:-----------------------------------:|
| Multiple Grid Configuration Options |
| Draw Sub-Grid & Points              |
| Custom X & Y axis Titles            |
| Custom Baud Rate                    |
| Plug and Play: No device setup      |
| Web App: No need to download        |
| Plot upto 4 graphs simultaneously   |

The website also provides a link to the code for the website as well as a link telling how to use the oscilloscope locally which offers even more customizable options.

{% include elements/redirect_button.liquid text="Open Oscilloscope" id="View-OO" link="https://mumarshahbaz.github.io/Oscilloscope-Online/" %}

---

## Upcoming Features

| Upcoming Features    |
|:--------------------:|
| .csv Export          |
| .pdf Export          |
| .svg Export          |
| Increased Resolution |

---

## Example usage

**Viewing the effects of changing the resistances of a fixed resistor on the sensitivity of an LDR Potential Divider**

### The experiment

- Changing the fixed resistor in a LDR potential divider can change the sensitivity of the detection of the light intensity
- In this experiment I have used 4 different fixed Resistor values
  - | Graph Color | Fixed Resistor |
    | ----------- | -------------- |
    | Red         | 1k Ohms        |
    | Blue        | 10k Ohms       |
    | Green       | 100k Ohms      |
    | Yellow      | 1M Ohms        |
- Initially the Light source is extremely close to the LDRs (at point no 60), then the distance between the source and the LDR is slowly increased all the while the Oscilloscope-Online is plotting live data

### The Circuit

{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/mumarshahbaz.github.io/refs/heads/master/assets/img/oscilloscope-online/LDR-Potential-Divider.png" max-width="500px" %}

### The Output

{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/mumarshahbaz.github.io/refs/heads/master/assets/img/oscilloscope-online/LDR-1k-10k-100k-1M.png" %}
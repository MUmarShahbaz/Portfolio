---
permalink: /projects/Laser-Security-System
layout: project
css:
  - project

title: Laser Security System
image: /assets/img/Projects/LSS/LSS.jpg
description: Light Gates with memory storage capability. The goal was to make an Intruder Alarm without using any Microcontrollers at all.
---

## Demo
{% include video.liquid src="/assets/video/projects/LSS/LSS.mp4" max-width="1000px" parameters="autoplay controls loop" radius="15px" %}

## Explanation

The apparatus is set up so that each laser is perfectly aligned with a LDR Sensor. Using a pre-built LDR sensor allows the output to always be digital, either 1 or 0, ensuring a clean and usable input. Alternatively, Creating an LDR potential divider and attaching the output to a NPN or PNP Bi-polar Junction Transistor can simulate similar results.

After this, a 555 timer IC is being used in Bi-stable mode. This will essentially result in it becoming a single SR Latch which can then store the states. An NPN is being used to invert the output of the LDR as the trigger pin of 555 IC is Active LOW.

Finally, a pushbutton is attached to the reset pin of the 555 IC to reset the circuit.

### Circuit Diagram

{% include figure.liquid path="/assets/img/Projects/LSS/LSS%20Schematic.png" max-width="800px" class="rounded-corners" alt="Schematic" %}

**Note: As there is a separate circuit for each laser and LDR pair, this means that they can be independently tracked. Not only will we know that a laser was broken, we will also know exactly which laser was broken giving us the whereabouts of the intruder**

<br class="spacer">
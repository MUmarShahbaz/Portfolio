---
permalink: /projects/Memory-Unit
layout: project
dynamic_assets:
  files:
   - project.css

title: Memory Unit
image: /assets/img/Projects/MU/MU.jpg
description: Computer Memory made without using any Microcontrollers. Practical Demonstration of the SR Latch.
---

## Demo
{% include video.liquid src="/assets/video/projects/MU/MU.mp4" max-width="1000px" parameters="autoplay controls loop" radius="15px" %}

## Explanation

The unit compromises of 5 circuits, one for each bit. All 5 circuits are similar to one another. The circuit is setup in a way to simulate an SR-Latch using 555 ICs. The Set and Reset are active LOW by default but they can be converted to active HIGH by adding an NPN transistor(my personal preference is the 2N3904) to the pins. The resistors in the circuit are pull-up resistors and are used to ensure that data is not changed due to random errors on the floating pin.

**Each bit is independent of the other and values can be easily changed without affecting the others**

<br class="spacer">
---
permalink: /projects/Arduino-Language-Support
layout: project
assets:
  files:
   - project.css
   - slideshow.js

title: Arduino Language Support
image: /assets/img/Projects/ALS/ALS.jpeg
description: A VS Code extension which isolates .ino and .cpp files. Prevents conflicts with C++ linters and extensions without along with two custom themes. 4.1K Installs in 7 months.

icons:
  - Visual Studio Code
repositories:
  - name: Arduino-Language-Support
best: 4
---
<img src="https://img.shields.io/visual-studio-marketplace/d/MUmarShahbaz.als?style=for-the-badge&label=Installs&labelColor=%2300f&color=%23000" style="width: 80%; max-width: 300px; height: auto;" class="rounded-corners center-self">

<a href="https://marketplace.visualstudio.com/items?itemName=MUmarShahbaz.als" class="button">View Extension</a>

<br class="spacer">

<h1 class="heading">Why?</h1>
I am a robotics enthusiast and, on one certain occasion, wanted to edit my Arduino project in Visual Studio Code.

However the following issues arose which convinced me to make my own extension for it.
- When using C++ as the language mode for using .ino files, it doesn't recognize any of the arduino specific functions and treats them as an error.
- Microsoft's extension for arduino only has "arduino output" as an option for language mode. 
<br>
{% include figure.liquid avoid_scaling=true path="https://raw.githubusercontent.com/MUmarShahbaz/Arduino-Language-Support/main/images/screenshots/Screenshot(7).png" max-width="1000px" class="rounded-corners" %}
<br>

## What of the other extensions?
There was one certain extension that I took a liking to but the themes that came along with it didn't match the original themes of the Arduino IDE, though it is somewhat similar.

<br class="spacer">

<h1 class="heading">What do I intend to include?</h1>
In this extension I am doing the following at the moment:
- Include Syntax Highlighting
- Add Arduino as default language for .ino files, this will disable C++ linter automatically each time you open .ino file allowing you to avoid the numerous errors formed due to arduino-specific functions
- Include 2 Themes as a bonus for users who prefer the Arduino IDE's charming looks
    - Arduino IDE Light
    - Arduino IDE Dark
<br>
<br>
I am also thinking about adding my own linter but that is something I won't be doing for quite a while.

## Themes

<div class="slideshow-container">
{% include slideshow/overlay.liquid %}
{% include slideshow/slide.liquid state="active" img="/assets/img/Projects/ALS/ALS-S1.png" %}
{% include slideshow/slide.liquid img="/assets/img/Projects/ALS/ALS-S2.png" %}
{% include slideshow/slide.liquid img="/assets/img/Projects/ALS/ALS-S3.png" %}
{% include slideshow/slide.liquid img="/assets/img/Projects/ALS/ALS-S4.png" %}
</div>

## Configure Language
If not set by default, click on the language mode button in the status bar.<br> It is most likely in the bottom right, with either "C++" or "Plain Text" written on it.
That will open this menu:<br>
<img src="https://raw.githubusercontent.com/MUmarShahbaz/Arduino-Language-Support/main/images/screenshots/Screenshot(6).png"  style="width: 100%; max-width: 700px; height: auto; margin-inline: auto;" class="rounded-corners center-self spacer"><br>
Click on Arduino to use it or, click on "Configure File Association for '.ino'" and then click on Arduino to set it up permanently

<br class="spacer">

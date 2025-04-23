---
layout: project
category: Community Projects & Developer Tools
importance: 7
Link: /projects/Arduino Language Support.html
img: /assets/media/Projects/ALS/ALS.jpeg
title: Arduino Language Support
grade: B
icons:
  - file: vscode/vscode-original.svg
    site: devicons
repository:
  - name: Arduino-Language-Support
slideshow: true
vip: 1
description: >
  A VS Code extension that creates an isolated environment for .ino and .cpp files. Prevents conflicts with C++ linters and extensions while providing Arduino-specific syntax highlighting and two custom themes. 4.1K Installs in 7 months.
---

{% include elements/image.liquid src="https://img.shields.io/visual-studio-marketplace/d/MUmarShahbaz.als?style=for-the-badge&label=Installs&labelColor=%2300f&color=%23000
" max-width="300px" max-height="auto" radius="15px" %}

{% include elements/redirect_button.liquid id="View-ALS" link="https://marketplace.visualstudio.com/items?itemName=MUmarShahbaz.als" text="View Extension" %}

<br><br><br>

# Arduino Language Support for VS Code
## Why?
I am a robotics enthusiast and, on one certain occasion, wanted to edit my Arduino project in Visual Studio Code.

However the following issues arose which convinced me to make my own extension for it.
- When using C++ as the language mode for using .ino files, it doesn't recognize any of the arduino specific functions and treats them as an error.
- Microsoft's extension for arduino only has "arduino output" as an option for language mode. 
<br>
<br>
Using "C++" as language mode for .ino files

{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/Arduino-Language-Support/main/images/screenshots/Screenshot(7).png" max-width="100%" max-height="auto" radius="5px" %}

## What's wrong with Microsoft's Arduino extension?
By default, "arduino output" doesn't use Syntax Highlighting which makes it difficult to edit/create programs as it becomes confusing to navigate through it, and monotonous enough to make a person quit.
<br>
<br>
Using "arduino-output" as language mode for .ino files

{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/Arduino-Language-Support/main/images/screenshots/Screenshot(8).png" max-width="100%" max-height="auto" radius="5px" %}

## What of the other extensions?
There was one certain extension that I took a liking to but the themes that came along with it didn't match the original themes of the Arduino IDE, though it is somewhat similar.

## What do I intend to include?
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
{% include elements/slideshow/overlay.liquid %}
{% include elements/slideshow/slide.liquid state="active" img="/assets/media/Projects/ALS/ALS-S1.png" %}
{% include elements/slideshow/slide.liquid img="/assets/media/Projects/ALS/ALS-S2.png" %}
{% include elements/slideshow/slide.liquid img="/assets/media/Projects/ALS/ALS-S3.png" %}
{% include elements/slideshow/slide.liquid img="/assets/media/Projects/ALS/ALS-S4.png" %}
</div>

## Configure Language
If not set by default, click on the language mode button in the status bar.<br> It is most likely in the bottom right, with either "C++" or "Plain Text" written on it.
That will open this menu:<br>
{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/Arduino-Language-Support/main/images/screenshots/Screenshot(6).png" max-width="800PX" max-height="auto" radius="5px" %}<br>
Click on Arduino to use it or, click on "Configure File Association for '.ino'" and then click on Arduino to set it up permanently
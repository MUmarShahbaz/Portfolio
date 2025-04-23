---
layout: project
category: Community Projects & Developer Tools
importance: 9
Link: /projects/RGB Controller.html
img: /assets/media/Projects/RGBC/RGBC.png
title: RGB Mouse Controller
grade: B
icons:
  - file: csharp/csharp-original.svg
    site: devicons
  - file: visualstudio/visualstudio-original.svg
    site: devicons
  - file: arduino/arduino-original.svg
    site: devicons
repository:
  - name: RGB-Mouse-Controller
slideshow: true
description: >
  RGB Lighting system using Arduino Nano. A WinForms app to control the lighting system, RGBC, is also provided.
---

# Custom RGB Lighting System for Wireless Gaming Mouse

## Overview

This project is a custom RGB lighting system designed for a wireless gaming mouse. It utilizes a 4-pin common cathode RGB LED setup and an Arduino microcontroller to provide dynamic lighting effects. The system is controlled through a desktop application built with Visual Studio using WinForms.

### Key Features
- **Customizable RGB Lighting**: Users can configure their RGB settings using a desktop application.
- **Live Preview**: The desktop app offers a live preview of the colors as they are selected.
- **Persistent Settings**: RGB color configurations are stored in the Arduino’s EEPROM, allowing the settings to persist even after a reboot.
  
---

## Hardware Requirements
- **RGB LEDs**: 2 4-pin common cathode RGB LEDs.
- **Microcontroller**: Arduino (or alternatives—to keep it cost-effective I suggest using an STM8)
- **Resistor**: 1 220 Ohms

{% include elements/image.liquid src="https://github.com/user-attachments/assets/14ca1e85-301d-4beb-9ff9-eaac92d13934" max-width="400px" %}


## Software Requirements
- **Arduino IDE**: For uploading the code to the Arduino.
- **Desktop Application**: RGB Controller - RGBC. [View App](https://github.com/MUmarShahbaz/RGB-Mouse-Controller/releases/1.0/)

---

## Installation & Usage

### Arduino Setup
1. Install the Arduino IDE from [Arduino's website](https://www.arduino.cc/en/software).
2. Connect your Arduino board to your computer via USB.
3. Open the provided Arduino sketch ([RGBC.ino](https://github.com/MUmarShahbaz/RGB-Mouse-Controller/blob/main/Arduino/RGBC.ino)) in the Arduino IDE and upload it to your Arduino board.

### Desktop Application

{% include elements/image.liquid src="https://github.com/user-attachments/assets/a4a5c31c-925a-4b46-8f5e-816d1c19e86a" max-width="750px" %}

{% include elements/redirect_button.liquid text="Download App" id="View-RGBC" link="https://github.com/MUmarShahbaz/RGB-Mouse-Controller/releases/download/1.0/RGBC.Installer.exe" %}

#### Instructions
- Connect the Arduino
- Use the provided controls to select RGB colors for your gaming mouse.
- A live preview will show the changes in real-time.
- Once satisfied with your configuration, click the **Save** button to store the settings in the EEPROM.
- The RGB settings are saved to the Arduino's EEPROM, which ensures that the colors remain even after rebooting the Arduino.

---

## Example Usage

<div class="slideshow-container">
{% include elements/slideshow/overlay.liquid %}
{% include elements/slideshow/slide.liquid state="active" img="/assets/media/Projects/RGBC/Img1.jpg" %}
{% include elements/slideshow/slide.liquid img="/assets/media/Projects/RGBC/Img2.jpg" %}
</div>
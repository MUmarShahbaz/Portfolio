---
layout: project
category: Community Projects & Developer Tools
importance: 7
Link: /projects/Attendance System.html
img: /assets/media/Projects/ATS/ATS.jpg
title: Attendance System
grade: A
icons:
  - file: arduino/arduino-original.svg
    site: devicons
  - file: php/php-original.svg
    site: devicons
  - file: mysql/mysql-original.svg
    site: devicons
repository:
  - name: NodeMCU-Attendance-system
slideshow: true
description: >
  NodeMCU based RFID attendance marking system that marks and stores student attendance on an SQL server using PHP.
---

# General Overview

An online attendance system made using the **NodeMCU**. The project uses **RFID** (Radio-Frequency Identification) with indicator lights, to record student attendances. A webpage handles the registration of new RFID tags under the name of the student. A second webpage is used to get the attendance records of the entire student body. The system is secure and has 3 custom "**Keys**" to ensure there is no access to any third party or false records made by someone with malicious intents.

---

## Summary of Features

1. **RFID**: modern, fast and accurate system
2. **LED Indicators**
   - Green LED : Student marked as present successfully
   - Yellow LED : Student already marked as present
   - Red LED : Student not recognized
3. **Registered students only**
4. **Security Keys** : Ensure a controlled access
   - Key #1 : For marking attendance of students, possessed by "**School Certified**" attendance recorders
   - Key #2 : For viewing the attendance record of the entire school body, possessed by school administration
     - For a "key-less" viewing of the attendance record, the student must state it's registration ID (Personal RFID assigned by administration). This will allow the student to see his own attendance records only
   - Key #3 : For registering new tags, possessed by school administration
5. **SQL Server** : All records are stored on an SQL server and can hence be modified as the administration wills to

---

# Code Overview

## NodeMCU-Code
{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/mumarshahbaz.github.io/refs/heads/master/assets/img/attendance-sys/NodeMCU-main.svg" max-width="500px" %}
{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/mumarshahbaz.github.io/refs/heads/master/assets/img/attendance-sys/NodeMCU-sub.svg" max-width="400px" %}

---

## Server-Code

{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/mumarshahbaz.github.io/refs/heads/master/assets/img/attendance-sys/PHP.svg" max-width="800px" %}

---

# Circuit Overview

## This is the circuit for an Attendance Recorder

{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/mumarshahbaz.github.io/refs/heads/master/assets/img/attendance-sys/Circuit.png" max-width="500px" %}

---

## The Attendance Recorder

<div class="slideshow-container">
{% include elements/slideshow/overlay.liquid %}
{% include elements/slideshow/slide.liquid state="active" img="/assets/media/Projects/ATS/Top-view.jpeg" %}
{% include elements/slideshow/slide.liquid img="/assets/media/Projects/ATS/Side-view.jpeg" %}
{% include elements/slideshow/slide.liquid img="/assets/media/Projects/ATS/Tags.jpeg" %}
</div>
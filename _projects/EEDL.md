---
layout: project
category: Work in Progress
importance: 4
Link: /projects/EEDL.html
img: /assets/media/Projects/EEDL/EEDL.png
title: ESP32 Environmental Data Logger
grade: S+
icons:
  - file: https://www.espressif.com/sites/all/themes/espressif/images/logo-guidelines/primary-vertical-logo.png
repository:
  - author: GreenScope
    name: greenscope.github.io
  - author: GreenScope
    name: Environmental-Data-Logger
related_projects: [GreenScope, Oscilloscope Online, Graph Plotter]
description: >
  A custom ESP32 based mini weather station. The EEDL is the hardware for the GreenScope project.
---

## Hardware
### Sensors (Subject to change depending in availability)

| **Sensor**                   | **Price (Rs)** | **Parameters Recorded**                                    | **Communication Method** | **Calibration**  |
|:----------------------------:|:--------------:|:----------------------------------------------------------:|:-------------------------:|:---------------:|
| **BME280**                   | 500            | Temperature (°C), Relative Humidity (%), Pressure (hPa)    | I2C                       | None            |
| **BH1750**                   | 400            | Light Intensity (lux)                                      | I2C                       | None            |
| **SCD41**                    | 6,000          | CO₂ Concentration (ppm)                                    | I2C                       | None            |
| **CCS811**                   | 1,500          | Smoke Concentration (ppm)                                  | I2C                       | None            |
| **PMS5003**                  | 4,000          | PM2.5 Concentration (µg/m³)                                | Serial                    | None            |
| **SPEC Sensors 3SP-CO-1000** | 5,600          | CO Concentration (ppm)                                     | Current?                  | None?           |
| **TGS822**                   | 3,000          | Methane Concentration (ppm)                                | Analog                    | Analog to ppm   |

---

## Software methodology

The program has been divided into as many sub modules as possible to ensure minimum effects of runtime errors. Each sensor has it's own function and these are called by another sequencer function which ensures taking upto 10 readings before calculating the averages of the values and storing them in a custom defined data structure called "Reading".

After all values have been stored there will be another sequencing function that will transmit the readings to the database via a PHP file that injects the data using SQL.

---

## List of recordings

| No# | Quantity Name                |
|:---:|:-----------------------------|
| 1   | Temperature                  |
| 2   | Relative Humidity            |
| 3   | Absolute Humidity            |
| 4   | Dew Point                    |
| 5   | Atmospheric Pressure         |
| 6   | Light Intensity              |
| 7   | Air Content                  |
| 7.1 | CO<sub>2</sub> concentration |
| 7.2 | CO concentration             |
| 7.3 | CH<sub>4</sub> concentration |
| 7.4 | Smoke concentration          |
| 7.5 | PM2.5 concentration          |
| 7.6 | Air Quality Index            |
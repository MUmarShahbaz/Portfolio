---
permalink: /projects/SkySpectrum
layout: project
css:
  - project
  - table
js:
  - 3dmodel
  - https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js
  - https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/OBJLoader.js
  - https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/MTLLoader.js
  - https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js

title: SkySpectrum
image: /assets/img/Projects/SS/SS.png
description: A versatile wireless communication system featuring a custom RF transmitter and a universal receiver with support for RF, WiFi, Bluetooth, and ESP-NOW.

icons:
  - Arduino
  - Espressif
  - EasyEDA
repositories:
  - name: SkySpectrum
best: 3
---

<h1 class="heading uppercase">Overview</h1>
SkySpectrum is a cutting-edge, multi-protocol wireless communication system designed for a wide range of applications, from RC vehicles to smart home automation. It features a custom-built **Universal Transceiver**, offering seamless integration with **RF, WiFi, Bluetooth, and ESP-NOW** technologies.

With its modular design and adaptable features, SkySpectrum enables precise wireless control, making it ideal for hobbyists, developers, and engineers alike.

## Development & Customization
- **Programming Platform:** Arduino IDE
- **Core Libraries:**
  - RF24 (For nRF24L01 wireless communication)
- **Configurable Parameters:** Any settings adjustable in the Arduino IDE, including RF24 settings such as frequency, data rate, and power level.

## Applications
SkySpectrum is designed for flexible, multi-purpose applications, including:
- **RC Airplanes & Drones:** Long-range, stable wireless control.
- **Smart Home Automation:** Wireless integration with home automation systems.
- **Bluetooth/WiFi-Controlled Vehicles:** Control RC cars and boats seamlessly.
- **General RF-Based Wireless Systems:** Ideal for various wireless control applications.

<br class="big-spacer">

<h1 class="heading uppercase">Universal Transceiver</h1>
<div class="center-element row p-margins">
  <div class="model-viewer" mtl="https://raw.githubusercontent.com/MUmarShahbaz/SkySpectrum/refs/heads/main/PCBs/Universal%20Transceiver/3D%20Model/Universal%20Transceiver.mtl" obj="https://raw.githubusercontent.com/MUmarShahbaz/SkySpectrum/refs/heads/main/PCBs/Universal%20Transceiver/3D%20Model/Universal%20Transceiver.obj"></div>
  <img src="https://raw.githubusercontent.com/MUmarShahbaz/SkySpectrum/refs/heads/main/PCBs/Universal%20Transceiver/images/Universal%20Transceiver%20-%202DF.png" class="rounded-corners" style="min-width: 350px; width: 49%; height: auto">
  <img src="https://raw.githubusercontent.com/MUmarShahbaz/SkySpectrum/refs/heads/main/PCBs/Universal%20Transceiver/images/Universal%20Transceiver%20-%202DB.png" class="rounded-corners" style="min-width: 350px; width: 49%; height: auto">
</div>

- **Solder, Code and Use**
- **Microcontroller:** ESP32 Devkit V1

<br class="big-spacer">


<h1 class="heading uppercase">Specifications</h1>
## Communication Modules:

| Method     | Hardware                   | Use Case                                                 |
|:----------:|:--------------------------:|:---------------------------------------------------------|
| RF (Radio) | nRF24l01 (with/without PA) | For long distance communication / Direct communication   |
| Bluetooth  | ESP32 (Builtin)            | For receiving data via mobile phones                     |
| WiFi       | ESP32 (Builtin)            | For long distance communication / indirect communication |

## RF Range:

| Master nRF | Slave nRF  | Communication (in open areas)                                 |
|:----------:|:----------:|:--------------------------------------------------------------|
| without PA | without PA | 100m Half-Duplex                                              |
| with PA    | without PA | 1km Simplex or 100m Half-Duplex                               |
| with PA    | with PA    | 1km Half-Duplex                                               |
| without PA | with PA    | 100m Half-Duplex (or 1km Simplex but from receiver to sender) |

## Pins

| Pin Type                 | Pin Count      | Pin Description                                                                           |
|:------------------------:|:--------------:|:------------------------------------------------------------------------------------------|
| ADC (12-bit)             | 13             | Analog Input pins, value ranges from 0 to 4095                                            |
| DAC                      | 2              | Produces a clean analog output without using PWM                                          |
| UART                     | 2 channels     | Serial Communication Channels                                                             |
| I2C                      | 5 (Hard-wired) | I2C Communication (**Bus Topology** : can use unlimited components with unique addresses) |
| PWM                      | 15             | Controlled square waves produced in a manner to "emulate" analog signals                  |
| Capacitive Touch Sensing | 7              | Pins that can detect human fingers by conduction                                          |
| RTC_GPIO                 | 13             | Wake up pins. Wakes up ESP32 from Ultra Power Saver mode                                  |
| Enable                   | 1              | Turns ESP32 on or off (negligible power is still consumed)                                |

<hr class="big-spacer">

<h1 class="heading uppercase">Repository Structure</h1>

| Folder                         | Purpose                                         |
|--------------------------------|-------------------------------------------------|
| **PCBs/**                      | Custom-designed PCB schematics and Gerber files |
| **PCBs/Discontinued**          | Discontinued variations                         |
| **PCBs/RC Transmitter Mini**   | The PCB files for the RC Transmitter Mini       |
| **PCBs/Universal Transceiver** | The PCB files for the Universal Transceiver     |
| **README.md**                  | Project documentation and overview              |

<br class="big-spacer">
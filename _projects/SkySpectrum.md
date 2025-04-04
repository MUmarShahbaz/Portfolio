---
layout: project
category: Work in Progress
importance: 2
Link: /projects/SkySpectrum.html
img: /assets/media/Projects/SS/SS.png
title: SkySpectrum
grade: S+
icons:
  - file: arduino/arduino-original.svg
    site: devicons
  - file: https://www.espressif.com/sites/all/themes/espressif/images/logo-guidelines/primary-vertical-logo.png
  - file: https://easyeda.com/images/easyeda-thumbnail.png?id=d5ed1fe5930602975df1
repository:
  - name: SkySpectrum
slideshow: true
model3d: true
vip: 2
description: >
  A versatile wireless communication system featuring a custom RF transmitter and a universal receiver with support for RF, WiFi, Bluetooth, and ESP-NOW.
---

# View 3D Models below

# SkySpectrum

## Overview
SkySpectrum is a cutting-edge, multi-protocol wireless communication system designed for a wide range of applications, from RC vehicles to smart home automation. It features a custom-built **Universal Transceiver**, offering seamless integration with **RF, WiFi, Bluetooth, and ESP-NOW** technologies.

With its modular design and adaptable features, SkySpectrum enables precise wireless control, making it ideal for hobbyists, developers, and engineers alike.

---

# Universal Transceiver

<div class="card-container">
<div id="Transceiver" style="width:100%; height:500px;"></div>
{% include elements/3d-model.liquid container="Transceiver" obj="https://raw.githubusercontent.com/MUmarShahbaz/SkySpectrum/refs/heads/main/PCBs/Universal%20Transceiver/3D%20Model/Universal%20Transceiver.obj" mtl="https://raw.githubusercontent.com/MUmarShahbaz/SkySpectrum/refs/heads/main/PCBs/Universal%20Transceiver/3D%20Model/Universal%20Transceiver.mtl" %}
{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/SkySpectrum/refs/heads/main/PCBs/Universal%20Transceiver/images/Universal%20Transceiver%20-%202DF.png" max-width="49%" max-height="auto" radius="5px" %}
{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/SkySpectrum/refs/heads/main/PCBs/Universal%20Transceiver/images/Universal%20Transceiver%20-%202DB.png" max-width="49%" max-height="auto" radius="5px" %}
</div>

- **Solder, Code and Use**
- **Microcontroller:** ESP32 Devkit V1

## Specifications
### Communication Modules:

| Method     | Hardware                   | Use Case                                                 |
|:----------:|:--------------------------:|:---------------------------------------------------------|
| RF (Radio) | nRF24l01 (with/without PA) | For long distance communication / Direct communication   |
| Bluetooth  | ESP32 (Builtin)            | For receiving data via mobile phones                     |
| WiFi       | ESP32 (Builtin)            | For long distance communication / indirect communication |

### RF Range:

| Master nRF | Slave nRF  | Communication (in open areas)                                 |
|:----------:|:----------:|:--------------------------------------------------------------|
| without PA | without PA | 100m Half-Duplex                                              |
| with PA    | without PA | 1km Simplex or 100m Half-Duplex                               |
| with PA    | with PA    | 1km Half-Duplex                                               |
| without PA | with PA    | 100m Half-Duplex (or 1km Simplex but from receiver to sender) |

### Pins

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

---

# RC Transmitter Mini - Internal Circuit for RF Remote Control

<div class="card-container">
<div id="Transmitter-Mini" style="width:100%; height:500px;"></div>
{% include elements/3d-model.liquid container="Transmitter-Mini" obj="https://raw.githubusercontent.com/MUmarShahbaz/SkySpectrum/refs/heads/main/PCBs/RC%20Transmitter%20Mini/3D%20Model/RC%20Transmitter%20Mini.obj" mtl="https://raw.githubusercontent.com/MUmarShahbaz/SkySpectrum/refs/heads/main/PCBs/RC%20Transmitter%20Mini/3D%20Model/RC%20Transmitter%20Mini.mtl" %}
{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/SkySpectrum/refs/heads/main/PCBs/RC%20Transmitter%20Mini/images/RC%20Transmitter%20Mini%20-%202DF.png" max-width="49%" max-height="auto" radius="5px" %}
{% include elements/image.liquid src="https://raw.githubusercontent.com/MUmarShahbaz/SkySpectrum/refs/heads/main/PCBs/RC%20Transmitter%20Mini/images/RC%20Transmitter%20Mini%20-%202DB.png" max-width="49%" max-height="auto" radius="5px" %}
</div>

- **Microcontroller :** Arduino Nano

## Specifications

| Pin/Port type   | Count   | Purpose                                     |
|:---------------:|:-------:|:--------------------------------------------|
| FTDI            | 0 + 1.A | For greater accessibility of the programmer |
| nRF24l01        | 1       | RF communication                            |
| MPU6050         | 0 + 1.B | Controlling via Orientation of the board    |
| Joysticks       | 2       | Controlling via Joysticks                   |
| Potentiometers  | 2 + 2.B | Controlling via Potentiometers              |
| Pushbuttons     | 4 + 2.A | Controlling via Pushbuttons                 |
| Toggle Switches | 2       | Controlling via Pushbuttons                 |

**NOTE: Count is written in the format "Hard-Wired + Selectable.Selector**

**For Pins/Ports with the same selector, only one of them will work at a time**

---

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

### Repository Structure

| Folder                         | Purpose                                         |
|--------------------------------|-------------------------------------------------|
| **PCBs/**                      | Custom-designed PCB schematics and Gerber files |
| **PCBs/Discontinued**          | Discontinued variations                         |
| **PCBs/RC Transmitter Mini**   | The PCB files for the RC Transmitter Mini       |
| **PCBs/Universal Transceiver** | The PCB files for the Universal Transceiver     |
| **README.md**                  | Project documentation and overview              |

---

# Discontinued
The following architectures were discontinued because of PCB complexity and inability to have it manufactured locally in Pakistan.

**RC Transmitter (SkySpectrum TX)**
- **Microcontroller:** Arduino Nano
- **Communication Method:**
  - | Method     | Hardware           | Use Case                                                         |
    |:----------:|:------------------:|:-----------------------------------------------------------------|
    | RF (Radio) | nRF24l01 (with PA) | For controlling the receiver via the controls on the Transmitter |
- **User Inputs:**
  - 4 Buttons
  - 2 Joysticks
  - 4 Potentiometers
  - 2 Toggle Switches
  - 1 MPU6050 (Motion Sensor)
- **Functionality:** Reads input data, processes it into structured packets, and transmits wirelessly over RF.

**Universal Receiver (SkySpectrum RX)**
- **Microcontroller:** ESP32 Devkit V1
- **Communication Modules:**
  - | Method     | Hardware              | Use Case                                                 |
    |:----------:|:---------------------:|:---------------------------------------------------------|
    | RF (Radio) | nRF24l01 (without PA) | For long distance communication / Direct communication   |
    | Bluetooth  | ESP32 (Builtin)       | For receiving data via mobile phones                     |
    | WiFi       | ESP32 (Builtin)       | For long distance communication / indirect communication |
- **Pseudo-Transmitter Mode:** The receiver can be reconfigured as a transmitter to send additional data, such as environmental readings or external control inputs.

**Communication Capabilities**

| Communication Mode                                   | Range (Ideal Conditions) |
|------------------------------------------------------|:------------------------:|
| Transmitter to Receiver (One-way RF)                 | 1 km                     |
| Transmitter to Receiver (Two-way RF)                 | 100 m                    |
| Transmitter to Transmitter                           | Not Useful               |
| Pseudo-Transmitter to Receiver (One-way & Two-way)   | 100 m                    |

**NOTE: Transmission range of receiver can be extended to 1km for when using PA Variant of nRF24l01**
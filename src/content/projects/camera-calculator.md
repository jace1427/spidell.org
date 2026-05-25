---
title: Camera Calculator
description: A web app that uses a neural network to detect a handwritten equation from a photo and solve it.
pubDate: 2021-04-25
repo: https://github.com/jace1427/CameraCalculator
tags: [python, computer-vision, neural-network, docker]
featured: true
---

Point a camera at a handwritten math equation and get the answer. A neural network handles detection and interpretation of the equation; a Flask backend ties it together and serves the result through a browser UI.

The whole stack runs in Docker — `./start_dockerfile.sh` brings it up, then `./computer_vision_server` starts the backend.

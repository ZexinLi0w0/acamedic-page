---
title: "RED: A Systematic Real-Time Scheduling Approach for Robotic Environmental Dynamics"
summary: 
tags:
- System
- Deep Learning
date: "2023-08-02T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Overview of RED
  focal_point: Smart

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: example
---

In this project, we introduce RED, a systematic real-time scheduling approach designed to support multi-task deep neural network workloads in resource-limited robotic systems. It is designed to adaptively manage the Robotic Environmental Dynamics (RED) while adhering to real-time constraints. At the core of RED lies a deadline-based scheduler that employs an intermediate deadline assignment policy, effectively managing to change workloads and asynchronous inference prompted by complex, unpredictable environments. This scheduling framework also facilitates the flexible deployment of MIMONet (multi-input multi-output neural networks), which are commonly utilized in multi-tasking robotic systems to circumvent memory bottlenecks. Building on this scheduling framework, RED recognizes and leverages a unique characteristic of MIMONet: its weight-shared architecture. This feature, however, contradicts the fundamental assumption that the workloads of sub-tasks remain constant, irrespective of their execution scheduling. To accommodate and exploit this feature, RED devises a novel and effective workload refinement and reconstruction process. This process ensures the scheduling framework's compatibility with MIMONet and maximizes efficiency. We have implemented RED on several widely used embedded and mobile platforms, including the NVIDIA Jetson Nano, TX2, Xavier, and Orin platforms. We evaluated its performance using workloads that span a broad range of settings typical in navigation robots. The experimental results demonstrate that RED surpasses existing approaches (often by a significant margin) across critical metrics such as throughput, timing correctness, interference robustness, adaptability, and overhead. (RTSS'23)

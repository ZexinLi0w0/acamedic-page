---
title: Robot Path Planning
summary: 
tags:
- Robotics
date: "2016-04-27T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Results of ACD
  focal_point: Smart

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: example
---

This projects aims to generate proper path for autonomatic driving. Since path can not be simplified as skelton in this program, we need to do 2D approximately convex decomposition (ACD). After applying ACD, we use Self-organizing Map (SOM) alogrithm to generate path for Multiple Travelling salesman (MTSP) problem. The source code is published at https://github.com/ZexinLi0w0/ACD.
---
title: "TetraRL: A Self-Adaptive Runtime for On-Device Deep Reinforcement Learning Systems"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Zexin Li
- Soheil Shirvani
- Cong Liu

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2026-06-11T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-06-11T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: In *Submission to TC*
publication_short: In *Submission to TC*

abstract: "Autonomous robotic systems, such as autonomous vehicles, drones, and mobile robots, increasingly require on-device Deep Reinforcement Learning (DRL) to continuously adapt to dynamic environments. Unlike cloud-based learning, embedded DRL must perform training and inference directly on resource-constrained hardware while maintaining timely decision-making. This requirement exposes a fundamental challenge: on-device DRL must simultaneously balance four tightly coupled objectives: real-time performance, task reward, memory utilization, and energy consumption. Optimizing these objectives independently often leads to suboptimal system behavior, while naïve multi-objective optimization can violate resource constraints and degrade reliability. This paper presents TetraRL, a holistic runtime framework for self-adaptive tetra-objective on-device DRL. TetraRL formulates embedded DRL as a unified optimization problem over real-time, reward, RAM, and reserve (energy) objectives, and employs a preference-conditioned reinforcement learning controller to dynamically navigate the resulting trade-off space. The framework further integrates a unified resource-management abstraction, hardware-aware DVFS control, and a runtime Override Layer for enforcing resource constraints. We implement and evaluate TetraRL across diverse DRL environments and embedded platforms, including NVIDIA Jetson AGX Orin and Orin Nano. Experimental results demonstrate that TetraRL consistently auto-balances the four objectives, achieving competitive trade-offs across them while maintaining negligible runtime overhead. Furthermore, TetraRL enables runtime-switchable optimization goals through a single trained policy, providing a practical foundation for self-adaptive and resource-aware on-device DRL."
  
# Summary. An optional shortened abstract.
summary:

tags: [deep learning]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.

# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ""
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.

# projects:
# - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.

# slides: example
---

---
title: "Real-Time Continual Learning on Embedded GPUs"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Zexin Li
- Dongjoo Seo
- Nikil Dutt
- Jun Sheng
- Cong Liu

date: "2026-07-25T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-07-25T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In *47th IEEE Real-Time Systems Symposium* 🏅 [Artifacts Evaluated](https://2026.rtss.org/program/program/)"
publication_short: "In *RTSS'26* 🏅 [Artifacts Evaluated](https://2026.rtss.org/program/program/)"

abstract: "Online continual learning (OCL) is an enabling technology for safety-critical autonomous embedded systems whose deployment environments shift faster than fleet-trained models or cloud round-trips can correct. Perception must meet hard sub-second deadlines on a single embedded GPU while training shares the same device; existing OCL runtimes either serialize the two phases or alternate them at coarse cadence, leaving the GPU underutilized and offering no guarantee on inference timing. We present AOCL, a self-adaptive OCL runtime for concurrent training and inference on a single embedded GPU, designed to be timing-scoped (deadline-aware safeguard with bounded recovery), practical (drop-in Avalanche plugin, one default hyperparameter setting across all evaluated cells, no offline workload model), and generalizable (validated across two Jetson platforms, four backbones from ResNet-20 to ResNet-101 and ViT-Tiny, four OCL algorithms, and five benchmarks). AOCL contributes a Unified Adaptation Metric (UAM) that couples streaming-accuracy drift to training-batch granularity and a lightweight feedback controller that co-schedules training and inference at runtime. Analytical properties of the controller bound the per-axis settling envelope at its operating point and the platform-level per-window worst-case latency at the boundary configuration, supporting deployment in real-time execution. Implemented on top of the open-source Avalanche continual-learning framework and deployed on Jetson Orin Nano and AGX Orin, AOCL achieves up to 11.6× higher training throughput (average 5.15×) over the strongest serialized and alternating OCL baselines, while sustaining the lowest or tied-for-lowest deadline-miss rate in 13 out of 15 deadline miss rate measurements. Two realistic case studies: a high-fidelity autonomous-driving simulator and a physical soft-robotic prototype, demonstrate sustained practicality under on-device adaptation."

# Summary. An optional shortened abstract.
summary:

tags: [deep learning, system]

# Display this page in the Featured widget?
featured: true

url_pdf: '/publication/rtss26_1/rtss26-aocl.pdf'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
---

Author-accepted manuscript. Accepted for publication at the 47th IEEE Real-Time Systems Symposium (RTSS 2026).

© 2026 IEEE. Personal use of this material is permitted. Permission from IEEE must be obtained for all other uses, in any current or future media, including reprinting/republishing this material for advertising or promotional purposes, creating new collective works, for resale or redistribution to servers or lists, or reuse of any copyrighted component of this work in other works.

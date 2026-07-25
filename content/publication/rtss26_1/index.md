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
publication: In *47th IEEE Real-Time Systems Symposium*
publication_short: In *RTSS'26*

abstract: "Online continual learning (OCL) is an enabling technology for safety-critical autonomous embedded systems whose deployment environments shift faster than fleet-trained models or cloud round-trips can correct. Perception must meet hard sub-second deadlines on a single embedded GPU while training shares the same device; existing OCL runtimes either serialize the two phases or alternate them at coarse cadence, leaving the GPU underutilized and offering no guarantee on inference timing. We present AOCL, a self-adaptive OCL runtime for concurrent training and inference on a single embedded GPU, designed to be safe by construction (deadline-aware safeguard with bounded recovery), practical (drop-in Avalanche plugin, one default hyperparameter setting across all evaluated cells, no offline workload model), and generalizable (validated across two Jetson platforms, four backbones from ResNet-20 to ResNet-101 and ViT-Tiny, four OCL algorithms, and five benchmarks)."

# Summary. An optional shortened abstract.
summary:

tags: [deep learning, system]

# Display this page in the Featured widget?
featured: true

url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
---

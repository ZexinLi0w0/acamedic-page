---
title: "Towards Deployable On-Device Machine Learning Systems"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Zexin Li

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2026-05-19T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-05-19T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["7"]

# Publication name and optional abbreviated publication name.
publication: "Ph.D. Dissertation, *University of California, Riverside*"
publication_short: "Ph.D. Dissertation, *UCR*"

abstract: "Safety-critical cyber-physical systems (CPS), such as autonomous vehicles and robots, increasingly rely on deep neural networks. While these systems require high prediction accuracy, they must simultaneously satisfy strict end-to-end timing constraints under tight memory and energy budgets. The challenge extends beyond static inference: realistic deployments face non-stationary data and fluctuating power conditions, necessitating online adaptation systems. However, existing machine learning methods largely overlook the timing, memory, and accelerator-contention constraints inherent to embedded CPS, resulting in unpredictable latencies and frequent out-of-memory failures. This dissertation addresses the gap between algorithmic machine learning and real-time systems by developing a predictable and self-adaptive On-Device machine learning stack. We demonstrate that predictable learning is a distinct systems problem requiring cross-layer coordination rather than isolated algorithmic adjustments. Specifically, the dissertation develops three tightly coupled thrusts. First, to make modern models runnable On-Device under stringent memory constraints, it exploits multi-input/multi-output structure, weight sharing, and training-inference co-design so that multi-task perception, reinforcement learning, and continual learning workloads fit within small-device memory budgets while remaining schedulable as modular units (MIMONet, MixTraining, R3, Orion). Second, to reduce latency and deadline misses in real-time learning pipelines, it shapes end-to-end deadlines across perception-control DAGs, enforces intermediate timing contracts, and designs runtimes that safely overlap evaluation, inference, and in-the-loop training on shared accelerators (RED, AOCL). Third, to enable deployable learning ecosystems in uncertain, resource-constrained environments, it introduces environment- and energy-aware controllers that adapt sampling, buffering, and update cadence online as workloads, data distributions, and power budgets evolve, sustaining timing and accuracy under real-world drift (Genie, EOCL). Ultimately, this work provides the systems foundation required to move beyond 'deploy then freeze' edge AI, enabling continuous, resource-aware, and predictable adaptation for mission-critical robotics."

# Summary. An optional shortened abstract.
summary:

tags: [deep learning, system]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://escholarship.org/content/qt6zn307z5/qt6zn307z5.pdf'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: 'https://escholarship.org/uc/item/6zn307z5'
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

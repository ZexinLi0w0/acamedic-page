---
title: "DuoJoule: Accurate On-Device Deep Reinforcement Learning for Energy and Timeliness"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Soheil Shirvani
- Aritra Samanta
- Zexin Li
- Cong Liu

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2024-09-20T00:00:00Z"
doi: "10.1109/RTSS62706.2024.00019"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-09-15T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *45th IEEE Real-Time Systems Symposium*
publication_short: In *RTSS'24*

abstract: Deep Reinforcement Learning (DRL) is critical for autonomous systems to continuously learn and adapt in dynamic environments. However, frequent retraining in DRL leads to high energy consumption, posing significant challenges for mobile and battery-dependent robotic systems. Co-optimizing energy, latency, and algorithm performance is essential for efficient on-device DRL. Current approaches either focus on traditional DNNs like CNNs or target only two out of the three dimensions, rather than addressing all three simultaneously. This paper introduces DuoJoule, a comprehensive framework designed to address the unique challenges of DRL workloads by meeting latency deadlines and adhering to energy budgets while maximizing algorithm performance through both application and system-level configurations. DuoJoule dynamically coordinates adjustments in DRL algorithm parameters and system frequency settings using Dynamic Voltage and Frequency Scaling (DVFS). A key innovation of DuoJoule is its runtime metric tracker, which assesses system status against target budgets and calculates a universal efficiency score. This enables rapid and adaptive tuning at runtime, balancing energy efficiency, latency, and algorithm performance. Extensive evaluation using benchmarks along with a realistic autonomous driving case study demonstrates DuoJoule’s versatile cross-platform efficiency, practicality in real-world scenarios, adaptivity to varying constraints, and low runtime overhead evaluated on two widely used autonomous embedded platforms. Empirical results show that DuoJoule consistently meets latency and energy targets while maintaining near-optimal performance, showcasing its effectiveness in managing the complex trade-off space of on-device DRL.
  
# Summary. An optional shortened abstract.
summary:

tags: [deep learning, system]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://doi.org/10.1109/RTSS62706.2024.00019'
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
<!--
{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->

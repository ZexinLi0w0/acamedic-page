---
title: "RED: A Systematic Real-Time Scheduling Approach for Robotic Environmental Dynamics"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Zexin Li
- Tao Ren
- Xiaoxi He
- Cong Liu

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2023-07-30T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2023-07-30T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *44th IEEE Real-Time Systems Symposium*
publication_short: In *RTSS'23*

abstract: Intelligent robots are designed to effectively navigate dynamic and unpredictable environments laden with moving mechanical elements and objects. Such environment-induced dynamics, including moving obstacles, can readily alter the computational demand (e.g., the creation of new tasks) and the structure of workloads (e.g., precedence constraints among tasks) during runtime, thereby adversely affecting overall system performance. This challenge is amplified when multi-task inference is expected on robots operating under stringent resource and real-time constraints. To address such a challenge, we introduce RED, a systematic real-time scheduling approach designed to support multi-task deep neural network workloads in resource-limited robotic systems. It is designed to adaptively manage the Robotic Environmental Dynamics (RED) while adhering to real-time constraints. At the core of RED lies a deadline-based scheduler that employs an intermediate deadline assignment policy, effectively managing to change workloads and asynchronous inference prompted by complex, unpredictable environments. This scheduling framework also facilitates the flexible deployment of MIMONet (multi-input multi-output neural networks), which are commonly utilized in multi-tasking robotic systems to circumvent memory bottlenecks. Building on this scheduling framework, RED recognizes and leverages a unique characteristic of MIMONet its weight-shared architecture. To further accommodate and exploit this feature, RED devises a novel and effective workload refinement and reconstruction process. This process ensures the scheduling framework's compatibility with MIMONet and maximizes efficiency. We have implemented RED on several widely used embedded and mobile platforms, including the NVIDIA Jetson Nano, TX2, Xavier, and Orin platforms. We evaluated its performance using workloads that span a broad range of settings typical in navigation robots. The experimental results demonstrate that RED surpasses existing approaches (often by a significant margin) across critical metrics such as throughput, timing correctness, interference robustness, adaptability, and overhead.

# Summary. An optional shortened abstract.
summary:

tags: [deep learning, system]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2308.15368.pdf'
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

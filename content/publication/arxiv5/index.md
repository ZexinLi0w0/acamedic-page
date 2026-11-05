---
title: "MERIS: Adaptive Real-Time Scheduling of Refined Inference DAGs in Dynamic Robotic Environments"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Zexin Li
- Tao Ren
- Johnathan Liu
- Xiaoxi He
- Cong Liu

# Co-first authors: marked with a superscript "*" in the publication list.
equal_contribution:
- Zexin Li
- Tao Ren

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2026-02-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-02-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Submission to TECS*
publication_short: In *Submission to TECS*

abstract: "Robots deployed in dynamic environments execute changing directed-acyclic-graph (DAG) workloads under limited compute and timing budgets. This article presents MERIS, a framework for model scheduling under real-time constraints that combines proportional intermediate deadlines, MIMONet-aware graph refinement, and event-driven synchronization for multi-task inference on resource-constrained robotic platforms. We distinguish three representations: the application DAG, each MIMONet's internal encoder/decoder graph, and the refined scheduling DAG, and make the scope of the timing argument explicit. If the profiled execution bounds, release assumptions, precedence barriers, and per-level capacity premises hold, satisfaction of the assigned sub-deadlines composes to the end-to-end deadline. For non-partitionable tasks, we define a profile-bounded admission rule; before interpreting that rule as empirical timing evidence, we require direct per-task completion checks. We report run-level QoE alongside the offered-node deadline missing rate, making explicit that run completion and successful service of every node are different outcomes. We propose a comprehensive minibenchmark for evaluating the performance of schedulers under various DNN-driven autonomous driving scenarios. Extensive experiments on Nano Orin, AGX Orin, and M3 Max demonstrate the effectiveness of our proposed method."
  
# Summary. An optional shortened abstract.
summary:

tags: [deep learning]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2605.24044'
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

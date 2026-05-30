---
title: "Orion: Enabling Self-adaptive Memory Management for On-device Online Continual Learning"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Zexin Li
- Nikil Dutt
- Cong Liu

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2026-05-26T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-05-26T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Submission to TECS*
publication_short: In *Submission to TECS*

abstract: "Online continual learning (OCL) enables real-time adaptation to new data, making it crucial for dynamic robotic applications. However, its practical deployment is hindered by memory constraints in resource-limited systems, which affect key trade-offs in training latency, plasticity, and stability. Unlike offline parameter tuning, which cannot account for the dynamic shift in memory pressure and workload complexity as OCL progresses, an online and self-adaptive approach is essential for robust on-device deployment. This paper proposes Orion, a holistic framework designed to co-optimize training latency, plasticity, and stability of state-of-the-art OCL models under strict memory constraints, enabling feasible on-device deployment. At its core, Orion leverages URGE, a unified runtime indicator grounded in the ``Buckets effect'' principle that system performance is bounded by its scarcest resource, to dynamically reallocate memory across OCL components by jointly coordinating batch processing, replay buffers, and optimization strategies at both the OS and application level. Furthermore, Orion introduces system-level data prefetching techniques to maximize efficiency. A system prototype of Orion has been implemented using the widely adopted Avalanche-lib and thoroughly evaluated across a diverse range of OCL algorithms, benchmarks, and hardware platforms commonly used in autonomous robotic applications. To further demonstrate its practical utility, Orion is integrated into a realistic autonomous navigational robot powered by OCL. The results show that Orion achieves significant training speedups while maintaining balanced performance and effectively adapting to various scenarios, all with minimal runtime, memory, and energy overhead, making Orion a practical solution for on-device continual learning."
  
# Summary. An optional shortened abstract.
summary:

tags: [deep learning]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2605.26473'
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

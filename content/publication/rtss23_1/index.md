---
title: "RT-LM: Uncertainty-Aware Resource Management for Real-Time On-Device Language Models"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Yufei Li
- Zexin Li
- Wei Yang
- Cong Liu

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2023-08-30T00:00:00Z"
doi: "10.1109/rtss59052.2023.00023"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-08-30T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *44th IEEE Real-Time Systems Symposium*
publication_short: In *RTSS'23*

abstract: Recent advancements in language models~(LMs) have gained substantial attentions on their capability to generate human-like responses. Though exhibiting a promising future for various applications such as conversation AI, these LMs face deployment challenges on various devices due to their extreme computational cost and unpredictable inference latency. Such varied inference latency, identified as a consequence of uncertainty intrinsic to the nature of language, can lead to computational inefficiency and degrade the overall performance of LMs, especially under high-traffic workloads. Unfortunately, the bandwidth of these uncertainty sources is extensive, complicating the prediction of latency and the effects emanating from such uncertainties. To understand and mitigate the impact of uncertainty on real-time response-demanding systems, we take the first step to comprehend, quantify and optimize these uncertainty-induced latency performance variations in LMs. Specifically, we present RT-LM, an uncertainty-aware resource management ecosystem for real-time inference of LMs. RT-LM innovatively quantifies how specific input uncertainties, recognized within the NLP community, adversely affect latency, often leading to an increased output length. Exploiting these insights, we devise a lightweight yet effective method to dynamically correlate input text uncertainties with output length at runtime. Utilizing this quantification as a latency heuristic, we integrate the uncertainty information into a system-level scheduler which explores several uncertainty-induced optimization opportunities, including uncertainty-aware prioritization, dynamic consolidation, and strategic CPU offloading. Quantitative experiments across five state-of-the-art LMs on two hardware platforms demonstrates that RT-LM can significantly reduce the average response time and improve throughput while incurring a rather small runtime overhead.

# Summary. An optional shortened abstract.
summary:

tags: [deep learning, system]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2309.06619.pdf'
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

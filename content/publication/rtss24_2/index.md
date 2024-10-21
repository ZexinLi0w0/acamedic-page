---
title: "BOXR: Body and head motion Optimization framework for eXtended Reality"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Ziliang Zhang
- Zexin Li
- Hyoseung Kim
- Cong Liu

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2024-09-20T00:00:00Z"
doi: ""

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

abstract: "The emergence of standalone Extended Reality (XR) systems has enhanced user mobility, accommodating both subtle, frequent head motions and substantial, less frequent body motions. However, the pervasively used Motion-to-Display (M2D) latency metric, which measures the delay between the most recent motion and its corresponding display update, only accounts for head motions. This oversight can leave users prone to motion sickness if significant body motion is involved. Although existing methods optimize M2D latency through asynchronous task scheduling and reprojection methods, they introduce challenges like resource contention between tasks and outdated pose data. These challenges are further complicated by user motion dynamics and scene changes during runtime. To address these issues, we for the first time introduce the Camera-to-Display (C2D) latency metric, which captures the delay caused by body motions, and present BOXR, a framework designed to co-optimize both body and head motion delays within an XR system. BOXR enhances the coordination between M2D and C2D latencies by efficiently scheduling tasks to avoid contentions while maintaining an up-to-date pose in the output frame. Moreover, BOXR incorporates a motion-driven visual inertial odometer to adjust to user motion dynamics and employs scene-dependent foveated rendering to manage changes in the scene effectively. Our evaluations show that BOXR significantly outperforms state-of-the-art solutions in 11 EuRoC MAV datasets across 4 XR applications across 3 hardware platforms. In controlled motion and scene settings, BOXR reduces M2D and C2D latencies by up to 63% and 27%, respectively and increases frame rate by up to 43%. In practical deployments, BOXR achieves substantial reductions in real-world scenarios—up to 42% in M2D latency and 31% in C2D latency—while maintaining remarkably low miss rates of only 1.6% for M2D requirements and 1.0% for C2D requirements."
  
# Summary. An optional shortened abstract.
summary:

tags: [deep learning, system]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2410.13084'
url_code: 'https://github.com/rtenlab/BOXR.git'
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

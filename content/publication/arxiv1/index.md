---
title: "MIMONet: Multi-Input Multi-Output On-Device Deep Learning"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Zexin Li
- Xiaoxi He
- Yufei Li
- Shahab Nikkhoo
- Wei Yang
- Lothar Thiele
- Cong Liu

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2023-07-20T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2023-07-20T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Arxiv*
publication_short: In *Arxiv*

abstract: Future intelligent robots are expected to process multiple inputs simultaneously (such as image and audio data) and generate multiple outputs accordingly (such as gender and emotion), similar to humans. Recent research has shown that multi-input single-output (MISO) deep neural networks (DNN) outperform traditional single-input single-output (SISO) models, representing a significant step towards this goal. In this paper, we propose MIMONet, a novel on-device multi-input multi-output (MIMO) DNN framework that achieves high accuracy and on-device efficiency in terms of critical performance metrics such as latency, energy, and memory usage. Leveraging existing SISO model compression techniques, MIMONet develops a new deep-compression method that is specifically tailored to MIMO models. This new method explores unique yet non-trivial properties of the MIMO model, resulting in boosted accuracy and on-device efficiency. Extensive experiments on three embedded platforms commonly used in robotic systems, as well as a case study using the TurtleBot3 robot, demonstrate that MIMONet achieves higher accuracy and superior on-device efficiency compared to state-of-the-art SISO and MISO models, as well as a baseline MIMO model we constructed. Our evaluation highlights the real-world applicability of MIMONet and its potential to significantly enhance the performance of intelligent robotic systems.

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
<!--
{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->

---
title: "Transferable Adversarial Attacks against ASR"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Xiaoxue Gao
- Zexin Li
- Yiming Chen
- Cong Liu
- Haizhou Li

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2024-08-16T00:00:00Z"
doi: "10.1109/LSP.2024.3443711"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-08-16T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: In *IEEE Signal Processing Letters*
publication_short: In *IEEE SPL*

abstract: Given the extensive research and real-world applications of automatic speech recognition (ASR), ensuring the robustness of ASR models against minor input perturbations becomes a crucial consideration for maintaining their effectiveness in real-time scenarios. Previous explorations into ASR model robustness have predominantly revolved around evaluating accuracy on white-box settings with full access to ASR models. Nevertheless, full ASR model details are often not available in real-world applications. Therefore, evaluating the robustness of black-box ASR models is essential for a comprehensive understanding of ASR model resilience. In this regard, we thoroughly study the vulnerability of practical black-box attacks in cutting-edge ASR models and propose to employ two advanced time-domain-based transferable attacks alongside our differentiable feature extractor. We also propose a speech-aware gradient optimization approach (SAGO) for ASR, which forces mistranscription with minimal impact on human imperceptibility through voice activity detection rule and a speech-aware gradient-oriented optimizer. Our comprehensive experimental results reveal performance enhancements compared to baseline approaches across five models on two databases.

# Summary. An optional shortened abstract.
summary:

tags: [deep learning]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://ieeexplore.ieee.org/document/10637681'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: 'https://xiaoxue1117.github.io/TransferableASR/'
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

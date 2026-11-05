---
title: "ProCerDCL: Query-Efficient Black-Box Probabilistic Verification of Deep Learning Compiler Optimization"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Zexin Li
- Weibo Zhang
- Linyi Li
- Arvind Easwaran
- Simin Chen

# Co-first authors: marked with a superscript "*" in the publication list.
equal_contribution:
- Zexin Li
- Weibo Zhang

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2026-10-27T00:00:00Z"
doi: "10.48550/arXiv.2610.36499"

# Schedule page publish date (NOT publication's date).
publishDate: "2026-10-27T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *arXiv*
publication_short: In *arXiv*

abstract: "We present ProCerDCL, a query-efficient framework for black-box probabilistic verification. Given a fixed, sampleable input distribution and a binary property oracle, ProCerDCL assesses the property's violation probability p against a threshold θ. Under independent sampling and stateless oracle behavior, acceptance asserts p ≤ θ, rejection asserts p > θ + η for a user-specified separation margin, and an inconclusive verdict indicates insufficient evidence for either conclusion. The probability of each type of erroneous verdict is bounded by its specified error budget. To support this three-valued contract efficiently, ProCerDCL uses a single sequential test, eliminating the interval family required by the baseline. The test accounts for repeated sampling checks through either corrected exact binomial confidence intervals or an anytime-valid confidence sequence. We apply ProCerDCL to probabilistic local model semantic consistency, where the property oracle detects decision-level inconsistencies between reference and compiled executions under a specified perturbation distribution. Our evaluation covers 24 tasks across TorchInductor and TensorRT and examines sampling efficiency, conclusiveness, and diagnostic behavior. For sampling efficiency, we use paired one-model clean-label radius searches: the baseline requires 3.6-4.2 times as many unique samples under matched numerical parameters while providing a weaker decision contract. For model semantic consistency, checks at θ = 10^-3 yield 817 acceptances, 19 inconclusive verdicts, and 4 rejections across 840 input-backend instances from 21 tasks. Case studies of two documented compiler faults further demonstrate what these local verdicts can diagnose."
  
# Summary. An optional shortened abstract.
summary:

tags: [deep learning]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2610.36499'
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

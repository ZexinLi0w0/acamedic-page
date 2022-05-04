---
title: "Efficient algorithms for task mapping on heterogeneous CPU/GPU platforms for fast completion time"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Zexin Li
- Yuqun Zhang*
- Ao Ding
- Husheng Zhou
- Cong Liu

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2021-03-01T00:00:00Z"
doi: "https://doi.org/10.1016/j.sysarc.2020.101936"

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: In *Journal of Systems Architecture*
publication_short: In *JSA*

abstract: In GPU-based embedded systems, the problem of computation and data mapping for multiple applications while minimizing the completion time is quite challenging due to large size of the policy space. To achieve fast competition time, a fine-grain mapping framework that explores a set of critical factors is needed for heterogeneous embedded systems. In this paper, we present a theoretical framework that yields a sub-optimal solution via three practical mapping algorithms with low time complexity. We evaluate such algorithms upon StarPU with a large set of popular benchmarks. Experimental results demonstrate that algorithms proposed by the original EMSOFT paper can achieve up to 30% faster completion time compared to state-of-the-art mapping techniques, and can perform consistently well across different workloads. We further extend such algorithms to minimize the completion time and enhance the runtime performance of complex heterogeneous applications under resource-limited infrastructure. We also extend the evaluation by deploying StarPU under multiple setups with an additional benchmark testing suite for simulating real-world runtime neural networks. Experimental results demonstrate that our extended algorithm can achieve much faster completion time (averagely 30% to 37% under multiple resource-constraint scenarios) compared to the state-of-the-art mapping techniques.

# Summary. An optional shortened abstract.
summary: 

tags: [system]

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

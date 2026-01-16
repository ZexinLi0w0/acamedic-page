---
title: "TreeDiff: AST-Guided Code Generation with Diffusion LLMs"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Yiming Zeng
- Jinghan Cao
- Zexin Li
- Yiming Chen
- Tao Ren
- Zhuochun Li
- Dawei Xiang
- Xidong Wu
- Shangqian Gao
- Tingting Yu

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2025-12-31T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-12-31T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Arxiv*
publication_short: In *Arxiv*

abstract: "Code generation is increasingly critical for real-world applications. Still, diffusion-based large language models continue to struggle with this demand. Unlike free-form text, code requires syntactic precision; even minor structural inconsistencies can render a program non-executable. Existing diffusion-based large language models rely on random token masking for corruption, leading to two key failures: they lack awareness of syntactic boundaries during the iterative denoising process, and they fail to capture the long-range hierarchical dependencies essential for program correctness.
We propose TreeDiff to address both issues. Specifically, we propose a syntax-aware diffusion framework that incorporates structural priors from Abstract Syntax Tree (AST) into the corruption process. Instead of masking individual tokens at random, we selectively mask tokens belonging to key AST nodes. By aligning the corruption process with the underlying structure of code, our method encourages the model to internalize the compositional nature of programming languages, enabling it to reconstruct programs that respect grammatical boundaries and capture long-range dependencies. Our method achieves a 13.3% relative improvement over the random masking training method, demonstrating its effectiveness in code generation task by leveraging underlying structures."
  
# Summary. An optional shortened abstract.
summary:

tags: [deep learning]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2508.01473'
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

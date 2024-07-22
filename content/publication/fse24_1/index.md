---
title: "DeciX: Explain Deep Learning Based Code Generation Applications"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Simin Chen
- Zexin Li
- Wei Yang
- Cong Liu

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2024-04-16T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-04-16T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *ACM International Conference on the Foundations of Software Engineering 2024*
publication_short: In *FSE'24*

abstract: "Deep learning-based code generation (DL-CG) applications have shown great potential for assisting developers in programming with human-competitive accuracy. However, the lack of transparency in such applications due to the uninterpretable nature of deep learning models makes the automatically generated programs untrustworthy. In this paper, we develop DeciX, an explanation method dedicated to deep learning-based code models. DeciX is motivated by observing two unique properties of DL-CG applications: output-to-output dependencies and irrelevant value and semantic space. These properties violate the fundamental assumptions made in existing explainable DL techniques and thus cause applying existing techniques to DL-CG applications rather pessimistic and even incorrect. DeciX addresses these two limitations by constructing a causal inference dependency graph, containing a novel method leveraging causal inference that can accurately quantify the contribution of each dependency edge in the graph to the end prediction result. Proved by extensive experiments assessing popular, widely-used DL-CG applications and several baseline methods, DeciX is able to achieve significantly better performance compared to state-of-the-art in terms of several critical performance metrics, including correctness, succinctness, stability, and overhead. Furthermore, DeciX can be applied to practical scenarios since it does not require any knowledge of the DL-CG model under explanation. We have also conducted case studies that demonstrate the applicability of DeciX in practice."
  
# Summary. An optional shortened abstract.
summary:

tags: [deep learning]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://dl.acm.org/doi/pdf/10.1145/3660814'
url_code: 'https://github.com/anonymousGithub2022/DeciX'
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

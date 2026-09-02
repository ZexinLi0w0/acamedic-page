---
title: "DATE-serve: Orchestrating Dependency, Arithmetic Intensity, and Thermal-awareness for Energy-Efficient Multimodal Inference"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Ziyang Jia
- Sara Rashidi Golrouye
- Laxmi Bhuyan
- Benjamin Kubwimana
- Devashree Tripathy
- Zexin Li
- Cong Liu
- Daniel Wong

date: "2026-08-20T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-08-20T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *44th IEEE International Conference on Computer Design*
publication_short: In *ICCD'26*

abstract: "Multimodal model inference creates substantial energy demand with growing performance requirements. Within GPUs, power is autonomously managed by an on-board power management unit (PMU), which makes frequency boosting/throttling decisions. However, we find that these hardware-managed frequency decisions can cause significant power inefficiency. This work identifies three classes of power inefficiencies within modern multimodal inference serving: (1) inter-stage dependency stalls run at near maximum frequency despite being idle; (2) anti-correlation between auto-boost frequency and arithmetic intensity (A.I.) results in compute-bound phases (e.g., prefill) running at lower frequency and vice versa; and (3) thermal throttling degrades SM frequency and throughput. We propose Tri-serve, a software-based DVFS controller that jointly accounts for three classes of inefficiency -- inter-stage Dependency stalls, the Arithmetic-intensity effect on frequency and power, and the Thermal-throttling effect of high A.I. phases -- to deliver energy-efficient multimodal serving on commodity GPUs. We show that Tri-serve achieves 22% energy efficiency improvement with no latency or throughput impacts."

# Summary. An optional shortened abstract.
summary:

tags: [system]

# Display this page in the Featured widget?
featured: false

url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
---

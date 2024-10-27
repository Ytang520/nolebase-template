---
tags:
  - Preface
  - Algorithmic fairness
comment: false
---

## Preface
Some questions and those answers:

1. What is Neural Collaspe (NC)?
a. Awesome paper-hub: [Awesome-Deep-phenomena](https://github.com/MinghuiChen43/awesome-deep-phenomena)
b. Most Relevant Papers:
1) Are Neurons Actually Collapsed? On the Fine-Grained Structure in Neural Representations. [paper] Yongyi Yang, Jacob Steinhardt, Wei Hu. ICML 2023
2) Imbalance Trouble: Revisiting Neural-Collapse Geometry. [paper] Christos Thrampoulidis, Ganesh R. Kini, Vala Vakilian, Tina Behnia.
3) Limitations of Neural Collapse for Understanding Generalization in Deep Learning. [paper] Like Hui, Mikhail Belkin, Preetum Nakkiran.

2. What are the current theoretical researches on algorithmic fairness?
I categorize the theoretical researches before 09/2023 into three parts: metric-based, data-based and distribution-based:
See the section ("Related Work")[https://github.com/Ytang520/nolebase-template/blob/main/public/analysis/LLM%2Bfair_tabular_prediction.pdf]

4. Why do we need NC view for algorithmic fairness?
(1) Why not others? 
Previous theoretical works focus more on the trade-offs (accuracy v.s. fairness; different fairness notions...), while ignore the details of training. Here are hundreds of researches designing thousands of methods to debias, but we have no idea what the similarities and the differences are.

(2) Why NC?
NC represents the teminal phase of training, and we may assume that the models gradually achieve that phase. 

5. **More Practical Issues**:
(1) If the platform has no knowledge of sensitive attributes, can we effectively infer them without additional information through leverage the network training properties.
(2) Should the features in intermediate layers be independent of sensitive groups, or completely dependent of those groups and using only the classifier to mitigate bias? A closer look from the training dynamics of the fairness-guaranteed in-processing methods.
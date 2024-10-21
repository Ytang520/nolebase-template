---
tags:
  - fairness
  - LLM
comment: false
---

## Combine LLMs with Traditional Models
——especially in the domain of fair tabular prediction


Why is this research needed?
LLMs come with prior knowledge, and tabular data—such as the collection context and column names—also contain valuable information that traditional algorithms (e.g., decision trees) often fail to leverage.
Why current approaches are suboptimal:
Inference requires at least one call to the LLM, leading to high resource consumption and longer processing times.
Fine-tuning is not the best approach:
When the training data is large enough (>128 shots), decision tree methods perform equally or even outperform fine-tuned models.
With smaller datasets, traditional methods quickly degrade in performance (overfitting), and fine-tuning doesn't offer significant improvements. Direct predictions from traditional models often perform better.
Fair Tabular Prediction + LLMs:

Why LLMs are necessary:
Real-world applications often demand high interpretability (e.g., in university hiring scenarios, where LLM-generated natural language explanations can be extremely useful).
The datasets used overlap significantly with RLHF datasets (e.g., income classification, crime prediction, hiring decisions), and RLHF contributes considerably to model performance.
Compared to traditional methods, LLMs typically require a larger dataset:
Loss functions often necessitate the computation of TPR/TNR within specific groups, and small sample sizes can introduce significant bias in these calculations.
Why in-context learning is ineffective:
In-context learning relies on datasets that have already been debiased (e.g., excluding gendered variables like "Male" or "Female"). However, differences in group distributions can lead to large disparities in calculated metrics, undermining the goal of making in-context samples match the test distribution.
As sample sizes increase, the impact on fairness metrics becomes less pronounced, while sampling strategies significantly affect model performance (e.g., with 16 demonstrations: accuracy difference varies from 0.05 to 0.24).
Research Focus (Current):
How can we combine the prior knowledge of LLMs with traditional models while minimizing resource consumption and allowing for flexible control over (and maintenance of) fairness levels?

Current Issues with Datasets:
There is a problem of data leakage, as models like GPT-4o-mini explicitly disclose the rules behind dataset generation.

---

![Analysis](../../public/analysis/LLM+Fair%20Tabular%20Prediction.png)
LLMs combine and generate features before just feeding them all into it.

more fairer without training data -> reflection-based
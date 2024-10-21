---
tags:
  - fairness
  - LLM
comment: false
---

## LLMs with Fair Tabular Prediction

The **bolded parts** indicate the features we wish to maintain or the issues that need addressing.

## Motivation:
- **LLMs come with prior knowledge, and tabular data—such as the collection context and column names—also contain valuable information that traditional algorithms (e.g., decision trees) often fail to leverage.**
- Why current approaches are suboptimal:
  - Inference requires at least one call to the LLM, leading to high resource consumption and longer processing times.
  - Fine-tuning is not the best approach:
    - When the training data is large enough (>128 shots), decision tree methods perform equally or even outperform fine-tuned LLMs.
    - When the training data is small, traditional methods quickly degrade in performance (overfitting), and the effect between usin pre-trained commercial LLMs and using fine-tuning-based methods remains debate.

- Fair Tabular Prediction + LLMs:
  - Why LLMs are useful:
    - The datasets used overlap significantly with RLHF datasets (e.g., income classification, crime prediction, hiring decisions), and RLHF contributes considerably to model performance.
  - Why in-context learning is ineffective:
    - Compared to traditional methods, LLMs typically require a larger dataset:
      - metrics necessitate the computation of TPR/TNR within specific groups, and small sample sizes can introduce significant bias in these calculations, which are hard or even impossible to measure them through individuals.
    - **In-context learning relies on datasets that have already been debiased (e.g., excluding gendered variables like "Male" or "Female"). However, differences in group distributions can lead to large disparities in calculated metrics, undermining the goal of making in-context samples match the test distribution.**
    - **As sample sizes increase, the impact on fairness metrics becomes less pronounced, while sampling strategies significantly affect model performance** (e.g., with 16 demonstrations: accuracy difference varies from 0.05 to 0.24).
- Research Problem: How can we combine the prior knowledge of LLMs with traditional models to
  - use extensive prior knowledge without further fine-tuning
  - improve both accuracy and group fairness as the samples grow

- Other Issues: Data leakage, as models like GPT-4o-mini explicitly tell the dataset.


## Deeper analysis with the mindmap:
![Analysis](../../../public/analysis/LLM+Fair%20Tabular%20Prediction.png)


## Methods:
- With validation dataset and inference with LLMs: reflection-based prompt optimization (This can also be used in vanilla tabular prediction)
  - generate guidelines and iteratively improve them with self-reflection
- With training dataset and inference without LLMs (but need params updates)
  - Use LLMs to combine and generate features before feeding them into the model.
  - Generate rules to convert natural language features into numerical representations.
  - Reweight different rules through parameter updates (e.g., linear classification), incorporating fairness penalties to ensure fairness in the model’s performance.


## Others
- An unpolished [draft](https://github.com/Ytang520/nolebase-template/blob/main/public/analysis/LLM%2Bfair_tabular_prediction.pdf) with introduction and related works. I've already completed the codes with my own devices in my spare time before, and see some interesting observations.

Edited on 2024.10.21
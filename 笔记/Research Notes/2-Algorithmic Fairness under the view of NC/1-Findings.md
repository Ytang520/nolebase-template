---
tags:
  - Neural Collapse
  - Algorithmic fairness
comment: false
---

## Findings:[Full Results](https://wandb.ai/sky_qtyang-hunan/fair_fairness_benchmark?nw=nwusersky_qtyang)
- Meanings of the metrics：
    - **NC_1**: This metric evaluates the extent of Neural Collapse and has shown an inverse correlation with prediction accuracy. Using a normal distribution framework, we observed that as NC_1 increases, prediction accuracy tends to decrease.
    - **sep_NC_1_given_y**: This metric measures the degree of separability among sensitive attributes within each specified label category. In essence, it assesses how distinctively the model can separate data points based on sensitive attributes, given a particular label.
    - **s_compared_to_separate_mean_NC_1**: This metric evaluates the performance consistency across different sensitive groups by comparing each group’s NC_1 score.
- Settings:
    - Datasets: Adult, COMPAS, sensitive attributes = ‘race’ or ‘sex’
        - We utilized both the **Adult** and **COMPAS** datasets, balancing sensitive and label groups to mitigate potential data imbalances that could skew NC analysis. This balance is crucial for a fair evaluation of NC properties across diverse demographic segments.
        - Only results from the **Adult** dataset are discussed here due to a technical issue with the COMPAS dataset processing. This limitation should be addressed in future experiments to fully validate findings across multiple datasets.
    - **Fairness Constraints**: Empirical Risk Minimization (ERM), Differential Demographic Parity (diffdp), Differential Equalized Odds (diffeodd)
        - Our primary focus is on **diffdp**, as it is differentiable and straightforward to implement, facilitating integration with NC evaluation.
        - Stronger fairness constraints (e.g., diifeodd) were not included in this report as they sometimes led to feature representations collapsing excessively (All features collapse to a single vector)
    - Common training parameters, including epochs, learning rate, and decay rate, were tested under empirical risk minimization (ERM) to assess their impact on training outcomes. The trends and final training states showed no significant differences across these settings. Therefore, this report adopts parameter configurations that most effectively accelerate the achievement of Neural Collapse (NC).
- Focus: Observations on the training set (as the generalizability of NC to broader datasets remains under debate).
- Conclusions：
    - erm:
        - As training epochs progress, NC_1 values gradually decrease across both the overall dataset and each sensitive group, indicating an alignment trend toward Neural Collapse.
        - Significant disparities in NC_1 values arise when calculated relative to the overall center for each sensitive group:
            - This disparity is attributed to the differences in means across sensitive groups, with groups centered at distant points in feature space. However, this divergence does not imply that sensitive groups are entirely separable.
            - Instances with y=0 show greater inter-group separability among sensitive groups compared to those with y=1
        - sep_NC_1_given_y: First declines and then rise again:
            - **At its lowest point, the separation between sensitive groups comes to the peak, coinciding with the test accuracy peak**. **This finding suggests that further analysis could enable debiasing to some extent even without knowledge of sensitive attributes.** [More Details](https://github.com/Ytang520/nolebase-template/blob/main/public/fairness+NC/Results.xlsx)
            - The final value in sep_NC_1_given_y does not necessarily exceed the baseline accuracy achieved through L2 clustering on the original data.
    - diffdp: (in comparison to ERM
        - As the regularization parameter \( \lambda \) increases, the epcohs required to reach Neural Collapse (NC) increases. Under diffdp, both NC_1 values for each sensitive group and the overall NC_1 are higher than those observed under ERM, with a corresponding decrease in accuracy and an improvement in fairness.
            - Notably, the accuracy difference between sensitive groups cannot be reliably inferred from the NC_1 differences among them, as no explicit functional relationship exists to link these metrics directly.
        - Under diffdp, sep_NC_1_given_y values are higher than erm’s, which shows the lower inter-group separability among sensitive groups. **This observation is contradicted with the finding that sensitive groups are actually easier to be classified**. It needs a refined explanation in the future. However, it raises a important problem here, which is critical to the current fairness researches:
            - **Does incorporating fairness constraints in the model aids in making intermediate layer features independent of sensitive attributes or, conversely, makes them more aligned with these attributes.**
                - Independence from sensitive attributes aligns intuitively with fairness goals, as it prevents model reliance on potentially biased features.
                - However, the trade-off researches before suggest that, if sensitive attributes can be utilized, methods that incorporate them generally achieve a more favorable accuracy-fairness Pareto frontier compared to methods that omit them entirely. This insight underscores a potential advantage in controlled usage of sensitive attributes for optimized fairness-accuracy balance.
    - Discussion: **Similarity as a Metric**:
        - Unlike some [studies](https://dl.acm.org/doi/10.1145/3637528.3671902) on NC, this report does not employ similarity as a primary metric, as prior NC researches typically rely on L2-based nearest neighbor clustering (NC4), as similarity cannot fully capture the impact of variance on feature clusters.
        - However, this report does incorporate **feature normalization** on the penultimate layer (referencing https://arxiv.org/abs/2209.09211), which standardizes features. By evaluating similarity among normalized features, we can derive additional insights into inter-class mean distances, enhancing the interpretation of NC_1 results. These refinements reveal the following:
            - With a moderate increase in fairness regularization (e.g., λ=1), similarity between sensitive groups within each label y decreases, indicating that group centers are beginning to converge.
            - However, when fairness is intensified further (e.g., λ=5), the similarity between sensitive groups increases—which is unexpected
    - **Limitations**: The current experiments lack comprehensive testing across varying levels and types of fairness constraints. This limitation impacts the reproducibility of results and hinders our ability to generalize findings to other fairness methods reliably. Consequently, the conclusions drawn here **may not directly extend to all fairness approaches.**

---
[1] The code is adapted from [FFB](https://github.com/ahxt/fair_fairness_benchmark?tab=readme-ov-file).
[2] Common fairness metrics: https://en.wikipedia.org/wiki/Fairness_(machine_learning)


-- Edited on 2024/10/28
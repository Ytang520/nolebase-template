---
tags:
  - fairness
  - LLM
comment: false
---


- LLM 和 传统模型结合上：（尤其在 fair tabular prediction 领域）
  - 背景：
    - tabular prediction + LLM 上：
      - 为什么需要研究：LLM 有先验知识，表格数据中表格数据收集背景和列名都包含信息，传统算法 (e.g. 决策树) 都没有考虑；
      - 目前常见路径为什么不好：
        - **inference 时至少要调用一次 LLM，资源消耗较大，时间较长；**
        - 微调不是好方式：
          - 当训练数据量足够大时 (>128 shots) ，决策树方法持平或能超过微调方法表现；
          - 当数据量较小时，传统方法表现迅速下降（过拟合）[2]，微调效果也并不好，直接预测表现较好
    - fair tabular prediction + LLM 上：
      - 为什么需要 LLM：
        - 真实场景可解释性要求高（如大学录用场景下，LLM自然语言形式可帮助）
        - 使用的数据集和 RLHF 数据集有重合（e.g. 收入高低判断，犯罪与否判断，就职录用与否判断），RLHF 给其带来了很大帮助
        - 相比于传统方法，对于数据量要求更大
          - 因为 loss 计算上需要计算 group 内 TPR/TNR，较少样本在计算时会有较大偏差
      - in-context learning 为什么不好：
        - in-context learning 视角下已经去偏的数据集 (如不使用 Male or Female)，**由于不同 group 分布不同，会使得计算指标差别大**
          - 使得 in-context samples 和 test distribution 保持一致没有效果
        - 当样本量增加，对于 fairness 指标影响较小；采样对于指标表现影响大（16 demonstrations: accdiff 变化范围: 0.05~0.24)
  - 研究问题（目前）：**如何在结合 LLM 先验知识的基础上，尽可能减少资源消耗同时自由控制 (维持) fairness 程度**
  - 目前数据集有数据泄露的问题：gpt-4o-mini 在数据生成时直接说明基于数据集的规则

#check
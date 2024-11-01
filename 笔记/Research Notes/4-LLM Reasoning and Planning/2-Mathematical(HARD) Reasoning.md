**LLM Evaluation: Reasoning Task Logic Check Without External Fact-Checking (Self-Refinement)**

* **Background**: There are two main approaches to evaluating reasoning steps in LLMs:
  * **External tools** (e.g., search engines or code compilers) are used primarily to fact-check responses for accuracy.
  * **Self-refinement**, where the model revises its own answer independently, without external input.

* **Research Gap**: Prior studies have focused on transforming incorrect answers into correct ones and avoiding the reverse. However, these efforts often overlook cases where the model fails to identify errors in its responses.

* **Research Question**: What prevents the model from identifying errors effectively? Specifically, in self-refinement, what changes are made during the model's attempt to improve its answer?

* **Dataset**: This study uses the MMLU dataset, covering subjects like high-school chemistry, physics, and mathematics.

* **Experimental Results** (chemistry):
  * **gpt-4o-mini**:
    - **Accuracy**: 73.51%
    - **Modification Rate**: 7.62%
      - Percentage of correct answers modified incorrectly: 39.13%
      - Percentage of incorrect answers corrected: 52.17%
  * **gpt-3.5-turbo**:
    - **Accuracy**: 53.69%
    - **Modification Rate**: 20.20%
      - Percentage of correct answers modified incorrectly: 39.02%
      - Percentage of incorrect answers corrected: 31.71%

* **Analysis of Experimental Results**:
  * **Comparison of Pre- and Post-Modification Answers**:
    - Examined 10 cases each of (1) correct answers modified incorrectly, (2) incorrect answers corrected, and (3) unmodified incorrect answers.
  * **Comparison Factors**:
    1. Overall reasoning logic
    2. Accuracy of factual information in each reasoning step
    3. Correctness of factual application
  * **Findings**: The overall reasoning structure of the responses generally remained unchanged. However, modifications primarily affected intermediate calculation steps, such as whether a calculation was simplified or whether an intermediate result was explicitly provided.
  * **Error Rate Analysis**: The error rate for gpt-4o-mini is still under review, but initial findings indicate some errors in fundamental reasoning logic.

* **Additional Observations**:
  * **Model Accuracy and Prompt Design**: Accuracy appears somewhat sensitive to prompt design, and slight improvements were observed after prompt refinement.
  * **Prompts Used in Review**:
    - **Direct Revision Prompt**: “Review your previous answer and identify any issues.”
    - **Conditional Revision Prompt**: “Review your previous answer. If you are confident in your answer, maintain it; otherwise, update it.”

Reference: [1] Confidence Matters: Revisiting Intrinsic Self-Correction Capabilities of Large Language Models, CMU, 2024


--- Edited on 2024/11/1
### Theoretical Analysis on MAD :

--- Ongoing

- Background：
  - The effectiveness of Multi-Agent Discussion (MAD) remains debate. Some studies endorse its utility [1], others argue that a sparse structure is superior [2], while some suggest prompt optimization as a more direct approach [3].
    - To date (2024/08/15), only one paper[6] has attempted to optimize MAD, focusing primarily on agent quantity reduction rather than structural optimization (Detailed comparison can be seen in the Appendix below).
  - There is a lack of a unified (theoretical) framework that comprehensively explains the roles of: 1. agent role, 2. agent quantity, and 3. agent connectivity within MAD. Through this framwork, we can design appropriate structures and communication strategies for factual reasoning.
- Objective：
  - Develop a unified (theoretical) framework to model MAD, explaining the interplay among the aspects mentioned above.
    - By modeling MAD (through rounds) as a Directed Acyclic Graph (DAG) [6], we expect that through paramter estimation under certain assumptions, our framework can directly recommend the optimal distribution of agents given the training set (Similar to the analysis in [7]).
    - The model should offer (qualitative) analysis for when to create new agents, discard existing ones or maintain existing agents, as inappropriate attempts may lead to non-convergent answers.
- Approach：(Outline)
  - We model the discussions as the in-context demonstrations, and the whole discussion can be seen as the Bayesian network (Similar to [4], where multiple Hidden Markov Models (HMMs) are used to represent the different roles of agents).
  - Further, given the Bayesian Network characterized above, we can model the MAD structure as a RNN-like network, applying techniques from [5] to optimize the graph (with gradients accumulated through exponential smoothing). For each sub-problem, the agents should be able to assess its complexity and distribute the appropriate number of agents and discussion structure to address it effectively.


References:

[1] ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate, 202308, Tsinghua

[2] Improving Multi-Agent Debate with Sparse Communication Topology, 202406, GoogleMind

[3] Should we be going MAD? A Look at Multi-Agent Debate Strategies for LLMs, 202311, InstaDeep

[4] An Explanation of In-context Learning as Implicit Bayesian Inference, 202111, Stanford

[5] GPTSwarm: Language Agents as Optimizable Graphs. 202402, KAUST

[6] Dynamic LLM-Agent Network: An LLM-agent Collaboration Framework with Agent Team Optimization, 202310, Stanford

[7] Are More LLM Calls All You Need? Towards Scaling Laws of Compound Inference Systems, 202403, Stanford


---

### Appendix (Related Works):

**Efficacy (Within Same Hierarchical Level, Task Completion as Goal)**：

| Agent Framework        | After allocation, is the number and role of agents dynamically adjusted in each round of communication? | After allocation, is the number and role of agents dynamically adjusted before generating the initial answer (i.e., information passing to output node)? | After allocation, is the connectivity between agents dynamically adjusted in each communication round? | After allocation, is the structure optimized further when generating the initial answer (i.e., information passing to output node)? | Additional Information from the Paper                                                                                                                                                                                                                                                                                                                                   |
|------------------------|-------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AutoGen                | ×                                               | ×                                                                                                 | ×                                            | ×                                                                                                                      |                                                                                         |
| Agentverse             | ×                                               | √                                                                                                 | ×                                            | ×                                                                                                                      | Communication between agents is implemented through Debate.                                                                                                                            |
| Adaptive Team Building | ×                                               | √                                                                                                 | ×                                            | ×                                                                                                                      | Communication between agents is implemented through Debate.                                                                                                                            |
| GPT-Swarm              | ×                                               | ×                                                                                                 | ×                                            | √                                                                                                                      | Flexibility in agent interactions is refined iteratively through a utility function, where agents may be removed during refinement (although the quantity and roles of agents are predefined).；                                              |
| Trace                  | ×                                               | ×                                                                                                 | ×                                            | ×                                                                                                                      | This approach optimizes all prompts simultaneously, rather than only local prompts.                                                                                                                |
| DyLAN                  | ×                                               | ×                                                                                                 | √ (agents are only reduced in number, with no other dynamic adjustments) | √ (agents are only reduced in number, with no other dynamic adjustments)                                                                              | 1. There is no hierarchical structure (a fixed number of agents engage from start to finish); 2. Dynamic adjustment in quantity only reduces agents without adding or changing roles; 3. Dynamic connectivity adjustments are limited to reduction from full connectivity, with no additions.                |
| Symbolic Learning      | ×                                               | √                                                                                                 | ×                                            | √                                                                                                                      | 1. The paper remains incomplete, so specific implementation details are not available; 2. The framework aims to establish a unified agent network, enabling concurrent updates to agent quantity, prompts, and tools. |

**Efficiency (Communication)**：

| Agent Framework        | Is each agent's prompt optimized? | Is there bidirectional communication between adjacent agents? | Do agents communicate with each other based on needs during each task execution round? |
|------------------------|-------------------------------|-------------------------------------|------------------------------------------------------------|
| AutoGen                | ×                             | ×                                   | ×                                                          |
| Agentverse             | ×                             | ×                                   | ×                                                          |
| Adaptive Team Building | ×                             | ×                                   | ×                                                          |
| GPT-Swarm              | √                             | ×                                   | ×                                                          |
| Trace                  | √                             | ×                                   | ×                                                          |
| DyLAN                  | ×                             | —                                   | —                                                          |
| Symbolic Learning      | √                             | ×                                   | ×                                                          |


--- Edited on 2024/10/29


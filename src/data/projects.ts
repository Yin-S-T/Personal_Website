export type Project = {
  titleZh: string;
  titleEn: string;
  type: '学习' | '创意' | '研究';
  descriptionZh: string;
  descriptionEn: string;
  stack: string[];
  link: string;
};

export const projects: Project[] = [
  {
    titleZh: 'DVG：仪表盘视觉定位研究',
    titleEn: 'DVG: Dashboard Visual Grounding',
    type: '研究',
    descriptionZh: '围绕论文《Show Me the Answer: Visual Grounding on Dashboards》开展数据构建、模型设计与实验评估，聚焦多模态模型在仪表盘场景下的视觉定位能力。',
    descriptionEn: 'Research experience from the paper "Show Me the Answer: Visual Grounding on Dashboards", including dataset construction, model design, and experimental evaluation for multimodal visual grounding on dashboard scenarios.',
    stack: ['Multimodal LLM', 'Visual Grounding', 'PyTorch', 'Dashboard Understanding'],
    link: 'https://openreview.net/forum?id=qOOLHYk8In&referrer=%5Bthe%20profile%20of%20Songyin%20Tang%5D(%2Fprofile%3Fid%3D~Songyin_Tang1)',
  },
  {
    titleZh: '视觉推理实验沙盒',
    titleEn: 'Vision Reasoning Sandbox',
    type: '研究',
    descriptionZh: '构建视觉问答与时序推理实验平台，评估多模态模型在复杂场景中的稳定性与可解释性。',
    descriptionEn: 'A platform for visual QA and temporal reasoning experiments, used to evaluate multimodal model robustness and interpretability in complex scenarios.',
    stack: ['Python', 'PyTorch', 'Computer Vision', 'LLM'],
    link: 'https://github.com/yourname/vision-reasoning-sandbox',
  },
  {
    titleZh: '具身智能交互实验场',
    titleEn: 'Embodied Agent Playground',
    type: '创意',
    descriptionZh: '用于具身智能实验的交互式模拟环境，支持任务规划、动作反馈与日志回放。',
    descriptionEn: 'An interactive simulation environment for embodied AI experiments, supporting task planning, action feedback, and log replay.',
    stack: ['React', 'TypeScript', 'Three.js'],
    link: 'https://github.com/yourname/embodied-agent-playground',
  },
  {
    titleZh: '论文脉冲追踪器',
    titleEn: 'Paper Pulse Tracker',
    type: '学习',
    descriptionZh: '追踪 CV / 多模态 / 具身智能方向论文热点，自动聚类并生成方法对比摘要。',
    descriptionEn: 'Tracks trending papers in CV, multimodal AI, and embodied intelligence, auto-clusters topics, and generates comparative method summaries.',
    stack: ['NLP', 'FastAPI', 'Vector DB'],
    link: 'https://github.com/yourname/paper-pulse-tracker',
  },
];

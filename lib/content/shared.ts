/** "The ADFT Difference" labels are identical across the three stream pages; only the icon colours change. */
export const sharedDifferenceLabels = [
  "Project-Based Learning from Day One",
  "AI-Augmented Creative Thinking",
  "AI-Powered Creative Workflows",
  "Multi-Disciplinary Portfolio Development",
  "Industry-Standard Tools & Technologies",
  "Real-World Industry Projects",
  "Built for the Creator Economy and AI Era",
];

/** Audience list used on both the Digital and Interior pages in the design. */
export const creativeAudience = [
  "Students & graduates aspiring to careers in design, media or digital content.",
  "Professionals transitioning into digital design.",
  "Content creators ready to level up their skills.",
  "Developers looking to strengthen design & UI expertise.",
  "Marketers & entrepreneurs seeking creative independence.",
  "Freelancers building versatile creative careers.",
];

export const differenceIcons = (dir: string) =>
  ["project", "ai-augment", "ai-powered", "portfolio", "tools", "projects", "creator"].map(
    (name, i) => ({ icon: `/icons/${dir}/diff-${name}.png`, label: sharedDifferenceLabels[i] }),
  );

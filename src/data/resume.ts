export interface Experience {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface Education {
  degree: string;
  school: string;
  dates: string;
  gpa: string;
  honors: string[];
}

export interface Certification {
  name: string;
  year: string;
}

export interface Interest {
  name: string;
  icon: string;
  description: string;
  link?: string;
}

export interface Metric {
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const personalInfo = {
  name: "Hamad Khawaja",
  title: "Principal Engineer",
  location: "Chicago, IL",
  email: "khawajahamad217@gmail.com",
  github: "https://github.com/hamad-khawaja",
  linkedin: "https://www.linkedin.com/in/hamad-khawaja-13543383/",
  goodreads: "https://www.goodreads.com/user/show/14551785-khawaja-hamad",
};

export const summary = `I've worked at ESPN, a space startup called Slooh, and spent the bulk of my career at UnitedHealthCare/Optum — growing from a software engineer into a principal engineer. I build cloud infrastructure, design AI systems, and lead teams. I care about things that actually work in production.

I've reduced cloud costs by over half a million dollars, built an AI chatbot serving 300,000 employees, and led engineering teams through complex platform migrations. I'm the person who gets called when something needs to be architected right the first time.

When I'm not engineering at scale, I'm tinkering with my homelab, running Arch Linux (btw), or figuring out how to make a Raspberry Pi do something it probably shouldn't.`;

export const companies = [
  { name: "ESPN", logo: "/logos/espn.svg" },
  { name: "Slooh", logo: "/logos/slooh.svg" },
  { name: "Optum / UHG", logo: null },
];

export const rolesWanted = {
  roles: [
    "Principal Engineer",
    "Staff Engineer",
    "Cloud/Platform Architect",
    "Engineering Manager",
    "AI/ML Infrastructure Lead",
  ],
  environment: [
    "Remote or Hybrid",
    "Teams that ship, not just plan",
    "Companies that value engineering culture",
  ],
};

export const rolesNotWanted = [
  { rule: 'DENY role="Entry Level Anything"', comment: "Been there, done that" },
  { rule: 'DENY role="Unpaid Internship"', comment: "My landlord says no" },
  { rule: "DENY buzzwords > 10", comment: "If the JD is all buzzwords, I'm out" },
  { rule: 'DENY stack="COBOL"', comment: "Respect, but no" },
  { rule: "DENY meeting_ratio > 0.7", comment: "I need time to actually build things" },
  { rule: 'DENY role="Blockchain Evangelist"', comment: "I'll pass" },
];

export const metrics: Metric[] = [
  { value: "$500K+", numericValue: 500, prefix: "$", suffix: "K+", label: "Cloud Costs Reduced" },
  { value: "300,000", numericValue: 300000, prefix: "", suffix: "", label: "Employees Served by Chatbot" },
  { value: "$1M+", numericValue: 1, prefix: "$", suffix: "M+", label: "Help Center Costs Saved" },
  { value: "10+", numericValue: 10, prefix: "", suffix: "+", label: "Engineers Managed" },
  { value: "200+", numericValue: 200, prefix: "", suffix: "+", label: "Engineers at Tech Talks" },
  { value: "8+", numericValue: 8, prefix: "", suffix: "+", label: "Years Experience" },
];

export const experience: Experience[] = [
  {
    title: "Principal Engineer",
    company: "Optum (UnitedHealth Group)",
    location: "Eden Prairie, MN (Remote)",
    dates: "Oct 2023 – Present",
    bullets: [
      "Led $500K+ annual cloud cost reduction initiative across Azure and AWS through resource optimization, reserved instances, and automated rightsizing",
      "Architected and deployed AI-powered chatbot using Azure OpenAI and RAG, serving 300,000+ employees and saving $1M+ in help center operational costs",
      "Designed FedRAMP-compliant cloud infrastructure supporting HIPAA workloads with automated compliance scanning and audit logging",
      "Built and led a team of 10+ engineers, establishing code review standards, sprint processes, and technical mentorship programs",
      "Presented architectural decisions and technical strategies to 200+ engineers at company-wide tech talks",
      "Drove migration of legacy on-prem applications to cloud-native microservices architecture on Kubernetes",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "Optum (UnitedHealth Group)",
    location: "Eden Prairie, MN (Remote)",
    dates: "May 2021 – Oct 2023",
    bullets: [
      "Led cloud platform team responsible for multi-cloud infrastructure across Azure and AWS",
      "Designed and implemented CI/CD pipelines using Azure DevOps, reducing deployment time by 60%",
      "Built Infrastructure as Code frameworks using Terraform and ARM templates for repeatable, auditable deployments",
      "Mentored 5 junior engineers on cloud architecture, DevOps practices, and secure coding standards",
      "Implemented centralized logging and monitoring using ELK Stack and Azure Monitor, reducing MTTR by 40%",
      "Collaborated with security teams to implement zero-trust networking and secret management with HashiCorp Vault",
    ],
  },
  {
    title: "Sr. Software Engineer",
    company: "Optum (UnitedHealth Group)",
    location: "Eden Prairie, MN",
    dates: "Jun 2019 – May 2021",
    bullets: [
      "Developed microservices in Java and Python deployed on Azure Kubernetes Service (AKS)",
      "Built RESTful APIs handling 10K+ requests per minute with automated load testing and performance monitoring",
      "Implemented automated testing frameworks achieving 85%+ code coverage across all team projects",
      "Contributed to migration from monolithic architecture to event-driven microservices using Apache Kafka",
      "Designed and built internal developer tools that reduced onboarding time for new engineers by 50%",
    ],
  },
  {
    title: "Software Engineer",
    company: "Optum (UnitedHealth Group)",
    location: "Hartford, CT",
    dates: "Jun 2017 – Jun 2019",
    bullets: [
      "Built full-stack web applications using React, Node.js, and Java Spring Boot",
      "Developed automated data pipeline processing 500K+ healthcare records daily",
      "Created dashboards and reporting tools using D3.js and Python for business analytics",
      "Participated in on-call rotation and incident response for production systems",
      "Received early promotion based on consistent delivery and technical initiative",
    ],
  },
  {
    title: "Software Engineer",
    company: "ESPN",
    location: "Bristol, CT",
    dates: "Sep 2016 – Jan 2017",
    bullets: [
      "Developed scalable backend services and REST APIs for high-traffic sports applications",
      "Worked on the college sports score bar, delivering real-time score updates to millions of viewers",
    ],
  },
  {
    title: "Junior Backend Engineer",
    company: "Slooh",
    location: "Remote",
    dates: "2015 – 2016",
    bullets: [
      "Built backend multimedia tools using FFmpeg for live streaming astronomical events",
      "Developed tooling around live stream processing and event broadcasting infrastructure",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Freelancer.com",
    location: "Remote",
    dates: "2012 – 2016",
    bullets: [
      "Built and fixed websites for various clients in the golden age of jQuery",
      "Delivered frontend solutions, bug fixes, and custom features across diverse projects",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Cloud Platforms",
    items: ["Azure", "AWS", "GCP", "Multi-Cloud Architecture", "Cloud Cost Optimization"],
  },
  {
    category: "AI & ML",
    items: ["LLM/GPT Integration", "RAG Pipelines", "Azure OpenAI", "MLOps", "Prompt Engineering", "AI Agents"],
  },
  {
    category: "DevOps & IaC",
    items: ["Terraform", "Kubernetes", "Docker", "Azure DevOps", "GitHub Actions", "Helm", "ArgoCD"],
  },
  {
    category: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "Go", "Bash/Shell", "SQL"],
  },
  {
    category: "Security & Compliance",
    items: ["FedRAMP", "HIPAA", "GDPR", "Zero Trust", "HashiCorp Vault", "Secret Management"],
  },
  {
    category: "Networking & Infrastructure",
    items: ["VPN", "DNS", "Load Balancers", "CDN", "Service Mesh", "API Gateway"],
  },
];

export const projects: Project[] = [
  {
    name: "AI Cloud Diagram Generator",
    description:
      "An AI-powered tool that generates cloud architecture diagrams from natural language descriptions. Uses LLMs to interpret requirements and produce visual infrastructure diagrams.",
    tech: ["Python", "LLM", "Cloud Architecture", "Diagram Generation"],
    link: "https://github.com/hamad-khawaja/diagram-ai",
  },
  {
    name: "Post-Purchase Intelligence",
    description:
      "An AI-powered platform that recommends complementary products after purchases instead of showing items you already bought. Real-time recommendations via WebSocket.",
    tech: ["TypeScript", "Node.js", "Express", "SQLite", "WebSocket"],
    link: "https://github.com/hamad-khawaja/post-purchase-intelligence",
  },
];

export const education: Education = {
  degree: "B.S. Computer Science",
  school: "Central Connecticut State University",
  dates: "2013 – 2017",
  gpa: "3.5",
  honors: ["Dean's List"],
};

export const certifications: Certification[] = [
  { name: "AWS Certified Cloud Practitioner", year: "2023" },
  { name: "Microsoft AI Program", year: "2024" },
  { name: "AWS re:Invent 2024 Attendee", year: "2024" },
];

export const interests: Interest[] = [
  { name: "Poker", icon: "♠️", description: "Strategy + probability. Texas Hold'em is applied game theory." },
  { name: "Chess", icon: "♟️", description: "Pattern recognition and thinking several moves ahead." },
  { name: "Hiking", icon: "🏔️", description: "Recharging away from screens. Nature's debugger." },
  { name: "Gaming", icon: "🎮", description: "The OG reason I got into tech." },
  {
    name: "Reading",
    icon: "📚",
    description: "Sci-fi, tech, and non-fiction.",
    link: "https://www.goodreads.com/user/show/14551785-khawaja-hamad",
  },
  { name: "Sketching", icon: "✏️", description: "Visual thinking. Sometimes the whiteboard isn't enough." },
];

export const techInterests = {
  os: "Arch Linux (btw)",
  homelab: "Raspberry Pi cluster, self-hosted services",
  tinkering: ["Custom mechanical keyboards", "Home automation", "Network segmentation", "Container orchestration"],
  philosophy: "If it can run Linux, it should run Linux",
};

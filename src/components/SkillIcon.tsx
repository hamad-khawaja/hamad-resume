"use client";

import { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiGooglecloud,
  SiTerraform,
  SiKubernetes,
  SiDocker,
  SiHelm,
  SiArgo,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiGnubash,
  SiOpenai,
  SiGithubactions,
  SiHashicorp,
  SiNodedotjs,
  SiExpress,
  SiSqlite,
  SiSocketdotio,
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaShieldAlt,
  FaNetworkWired,
  FaCloud,
  FaBrain,
  FaRobot,
  FaCogs,
  FaLock,
  FaGlobe,
  FaBalanceScale,
  FaKey,
  FaServer,
  FaMicrosoft,
} from "react-icons/fa";

const iconMap: Record<string, IconType> = {
  // Cloud
  "Azure": FaMicrosoft,
  "AWS": SiAmazonwebservices,
  "GCP": SiGooglecloud,
  "Multi-Cloud Architecture": FaCloud,
  "Cloud Cost Optimization": FaCloud,

  // AI
  "LLM/GPT Integration": SiOpenai,
  "RAG Pipelines": FaBrain,
  "Azure OpenAI": SiOpenai,
  "MLOps": FaCogs,
  "Prompt Engineering": FaBrain,
  "AI Agents": FaRobot,

  // DevOps
  "Terraform": SiTerraform,
  "Kubernetes": SiKubernetes,
  "Docker": SiDocker,
  "Azure DevOps": FaMicrosoft,
  "GitHub Actions": SiGithubactions,
  "Helm": SiHelm,
  "ArgoCD": SiArgo,

  // Languages
  "Python": SiPython,
  "Java": FaJava,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Go": SiGo,
  "Bash/Shell": SiGnubash,
  "SQL": FaDatabase,

  // Security
  "FedRAMP": FaShieldAlt,
  "HIPAA": FaShieldAlt,
  "GDPR": FaBalanceScale,
  "Zero Trust": FaLock,
  "HashiCorp Vault": SiHashicorp,
  "Secret Management": FaKey,

  // Networking
  "VPN": FaLock,
  "DNS": FaGlobe,
  "Load Balancers": FaServer,
  "CDN": FaGlobe,
  "Service Mesh": FaNetworkWired,
  "API Gateway": FaServer,

  // Project tech
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "SQLite": SiSqlite,
  "WebSocket": SiSocketdotio,
  "LLM": SiOpenai,
  "Cloud Architecture": FaCloud,
  "Diagram Generation": FaCogs,
};

export default function SkillIcon({ skill }: { skill: string }) {
  const Icon = iconMap[skill];
  if (!Icon) return null;
  return <Icon className="inline-block h-3 w-3 shrink-0 opacity-60" />;
}

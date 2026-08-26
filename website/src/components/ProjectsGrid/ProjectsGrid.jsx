import PixelCard from "../PixelCard/PixelCard.jsx";

const PROJECTS = [
  {
    name: "Terminal Info",
    href: "https://tinfo.1234567890.dev/",
    textIcon: "tinfo",
    accent: "#C67C2E",
    openSource: true,
    description: {
      en: "A terminal toolbox built around a growing plugin ecosystem.",
      zh: (
        <>
          一个围绕持续扩展的插件生态构建的<br />终端工具箱。
        </>
      ),
    },
  },
  {
    name: "FluxClip",
    href: "https://fluxclip.app/",
    icon: "/assets/FluxClip%20app%20icon%201-iOS-Default-1024x1024@1x.png",
    accent: "#436C55",
    description: {
      en: "A clipboard workspace built around context, data flow, and workflow.",
      zh: "一个围绕上下文、数据流与工作流构建的剪贴板工作区。",
    },
  },
  {
    name: "Orchestrana",
    href: "https://orchestrana.app/",
    icon: "/assets/Orchestrana%20icon%201-iOS-Default-1024x1024@1x.png",
    accent: "#D86856",
    openSource: true,
    description: {
      en: "Plan. Focus. Done.",
      zh: "计划。专注。完成。",
    },
  },
  {
    name: "MuseDial",
    href: "https://musedial.1234567890.dev/",
    icon: "/assets/musedial-icon.png",
    accent: "#5F9EA0",
    description: {
      en: "Retro, reimagined.",
      zh: "复古，重新想象。",
    },
  },
  {
    name: "Maneuver",
    href: "https://getmaneuver.com/",
    icon: "/assets/maneuver-icon.png",
    accent: "#5D2A1A",
    description: {
      en: "A native macOS workspace for GitHub Actions, with a built-in GitHub inbox.",
      zh: "一个用于 GitHub Actions 的原生 macOS 工作区，内置 GitHub 收件箱。",
    },
  },
  {
    name: "FluidGantt",
    href: "https://fluidgantt.1234567890.dev/",
    icon: "https://fluidgantt.1234567890.dev/assets/icons/app-icon.webp",
    accent: "#24AFA3",
    description: {
      en: "Everything, laid out.",
      zh: "Everything, laid out.",
    },
  },
  {
    name: "Open Chroma Index",
    href: "https://github.com/T-1234567890/open-chroma-index",
    textIcon: "OCI",
    accent: "#18BFA8",
    openSource: true,
    description: {
      en: "A deterministic digital color standard for consistent color identity.",
      zh: (
        <>
          一个确保颜色身份一致的确定性数字<br />色彩标准。
        </>
      ),
    },
  },
];

export default function ProjectsGrid() {
  const lang = document.documentElement.dataset.lang === "zh" ? "zh" : "en";

  return PROJECTS.map((project) => (
    <PixelCard
      as="a"
      className="project-card project-card--external"
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name}${project.openSource ? ", open source project" : ""}`}
      gap={5}
      speed={35}
      colors={project.accent}
      style={{ "--project-accent": project.accent }}
      noFocus
      key={project.name}
    >
      <div className="project-card__icon" aria-hidden="true">
        {project.icon ? (
          <img src={project.icon} alt="" />
        ) : (
          <span className="project-card__text-icon">{project.textIcon}</span>
        )}
      </div>
      {project.openSource && (
        <span className="project-card__oss-badge" aria-hidden="true">
          <span>OSS<sup>*</sup></span>
        </span>
      )}
      <div className="project-card__meta">
        <h2 className="project-card__title">{project.name}</h2>
        <p className="project-card__desc">{project.description[lang]}</p>
      </div>
      <span className="project-card__arrow" aria-hidden="true">↗</span>
    </PixelCard>
  ));
}

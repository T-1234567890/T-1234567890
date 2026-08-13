import { createRoot } from "react-dom/client";
import ShapeGrid from "./components/ShapeGrid.jsx";
import CurvedLoop from "./components/CurvedLoop/CurvedLoop.jsx";
import BounceCards from "./components/BounceCards/BounceCards.jsx";
import InfoDashboard from "./components/InfoDashboard/InfoDashboard.jsx";
import ShinyText from "./components/ShinyText/ShinyText.jsx";
import ProjectsGrid from "./components/ProjectsGrid/ProjectsGrid.jsx";

const heroBackground = document.getElementById("hero-shape-grid");

if (heroBackground) {
  createRoot(heroBackground).render(
    <ShapeGrid
      direction="diagonal"
      speed={0.3}
      borderColor="rgba(11, 15, 20, 0.18)"
      squareSize={60}
      hoverFillColor="#18BFA8"
      shape="square"
      hoverTrailAmount={5}
    />,
  );
}

const heroDivider = document.getElementById("hero-curved-divider");

if (heroDivider) {
  createRoot(heroDivider).render(
    <CurvedLoop
      marqueeText="SLEEP ✦ EAT ✦ CODE ✦ REPEAT ✦"
      speed={1}
      curveAmount={400}
      interactive={false}
      accentText="CODE"
      accentHoverText="STUDY"
      accentSuffix=" 💻"
      accentHoverSuffix=" 💻"
      accentSlotCharacters={7}
      repeatGap={1}
      boundaryFill="var(--bg)"
      className="hero-curved-loop-text"
    />,
  );
}

const socialLinks = [
  {
    label: "GitHub",
    icon: "https://cdn.simpleicons.org/github/0B0F14",
    fallback: "assets/icons/github.svg",
    href: "https://github.com/T-1234567890",
  },
  {
    label: "X",
    icon: "https://cdn.simpleicons.org/x/0B0F14",
    fallback: "assets/icons/x.svg",
    href: "https://x.com/TonyHu12345",
  },
  {
    label: "Reddit",
    icon: "https://cdn.simpleicons.org/reddit/0B0F14",
    fallback: "assets/icons/reddit.svg",
    href: "https://www.reddit.com/user/Proof-Celebration-52/",
  },
  {
    label: "Discord",
    icon: "https://cdn.simpleicons.org/discord/0B0F14",
    fallback: "assets/icons/discord.svg",
    copyText: "1234567890048421",
  },
  {
    label: "500px",
    icon: "https://cdn.simpleicons.org/500px/0B0F14",
    fallback: "assets/icons/500px.svg",
    href: "https://500px.com.cn/community/user-details/4b1bb63c840e19472cea2526eecba9209",
  },
  {
    label: "Steam",
    icon: "https://cdn.simpleicons.org/steam/0B0F14",
    fallback: "assets/icons/steam.svg",
    href: "https://steamcommunity.com/profiles/76561199725300446/",
  },
  {
    label: "Product Hunt",
    icon: "https://cdn.simpleicons.org/producthunt/0B0F14",
    fallback: "assets/icons/producthunt.svg",
    href: "https://www.producthunt.com/@t_1234567890",
  },
  {
    label: "Dev.to",
    icon: "https://cdn.simpleicons.org/devdotto/0B0F14",
    fallback: "assets/icons/devdotto.svg",
    href: "https://dev.to/tony_1234567890",
  },
];

const socialBounceCards = document.getElementById("social-bounce-cards");

if (socialBounceCards) {
  createRoot(socialBounceCards).render(
    <BounceCards
      cards={socialLinks}
      containerWidth="100%"
      containerHeight={410}
      animationDelay={1.1}
      enableHover
      transformStyles={[
        "rotate(-7deg) translate(-225px) translateY(-96px)",
        "rotate(-2deg) translate(-75px) translateY(-96px)",
        "rotate(2deg) translate(75px) translateY(-96px)",
        "rotate(7deg) translate(225px) translateY(-96px)",
        "rotate(-7deg) translate(-225px) translateY(96px)",
        "rotate(-2deg) translate(-75px) translateY(96px)",
        "rotate(2deg) translate(75px) translateY(96px)",
        "rotate(7deg) translate(225px) translateY(96px)",
      ]}
    />,
  );
}

const discordCommunityLabel = document.getElementById(
  "discord-community-label",
);

if (discordCommunityLabel) {
  const lang = document.documentElement.dataset.lang === "zh" ? "zh" : "en";

  createRoot(discordCommunityLabel).render(
    <ShinyText
      text={lang === "zh" ? "加入 Discord 社区" : "Join the Discord Community"}
      speed={2}
      delay={0.6}
      color="rgba(11, 15, 20, 0.78)"
      shineColor="#18bfa8"
      spread={120}
      direction="left"
      disabled={window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches}
      className="discord-community-shiny"
    />,
  );
}

const aboutDashboard = document.getElementById("about-dashboard");

if (aboutDashboard) {
  const locale = document.documentElement.dataset.lang === "zh" ? "zh" : "en";
  createRoot(aboutDashboard).render(<InfoDashboard locale={locale} />);
}

const projectsGrid = document.getElementById("projects-grid-root");

if (projectsGrid) {
  createRoot(projectsGrid).render(<ProjectsGrid />);
}

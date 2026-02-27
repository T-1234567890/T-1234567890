import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outDir = join(__dirname, "..", "assets", "icons");

const ICONS = [
  ["apple", "apple.svg"],
  ["canon", "canon.svg"],
  ["cloudflare", "cloudflare.svg"],
  ["rust", "rust.svg"],
  ["python", "python.svg"],
  ["swift", "swift.svg"],
  ["html5", "html5.svg"],
  ["css3", "css3.svg"],
  ["google", "google.svg"],
  ["javascript", "javascript.svg"],
  ["github", "github.svg"],
  ["steam", "steam.svg"],
  ["500px", "500px.svg"],
  ["x", "x.svg"],
  ["discord", "discord.svg"],
  ["docker", "docker.svg"],
  ["linux", "linux.svg"],
  ["firebase", "firebase.svg"],
  ["nodedotjs", "nodedotjs.svg"],
  ["npm", "npm.svg"],
  ["openai", "openai.svg"],
  ["googlegemini", "googlegemini.svg"],
  ["googledeepmind", "googledeepmind.svg"],
  ["xcode", "xcode.svg"],
  ["visualstudiocode", "visualstudiocode.svg"],
  ["jetbrains", "jetbrains.svg"],
  ["dji", "dji.svg"],
  ["sony", "sony.svg"],
  ["adobe", "adobe.svg"],
  ["adobecreativecloud", "adobecreativecloud.svg"],
  ["davinciresolve", "davinciresolve.svg"],
];

const fetchSvg = async (slug) => {
  const url = `https://cdn.simpleicons.org/${encodeURIComponent(slug)}/0B0F14`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${slug}: ${res.status} ${res.statusText}`);
  const body = await res.text();
  if (!body.trim().startsWith("<svg")) throw new Error(`${slug}: not an svg`);
  return body;
};

await mkdir(outDir, { recursive: true });

for (const [slug, filename] of ICONS) {
  const svg = await fetchSvg(slug);
  const outPath = join(outDir, filename);
  await writeFile(outPath, svg, "utf8");
  // eslint-disable-next-line no-console
  console.log("wrote", outPath);
}

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = process.env.MAKEFUN_OUTPUT_PATH || "/output/entry.txt";

const ALIBI =
  "My LiDAR mapped that crumb patch at 09:12 on 14% battery and left it untouched on schedule so you'd have a control group for my performance review.";

export function renderAlibi(): string {
  const line = ALIBI.replace(/\r?\n/g, " ").trim();
  const chars = [...line].length;
  const bytes = Buffer.byteLength(line, "utf8");
  if (chars < 1 || chars > 200 || !/\S/.test(line) || bytes > 200) {
    throw new Error(`Gate check failed: chars=${chars} bytes=${bytes}`);
  }
  return line;
}

function main(): void {
  const text = renderAlibi();
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
}

main();

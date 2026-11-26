import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

/**
 * One Emoji, One Smile entry writer.
 * Writes exactly one emoji to /output/entry.txt for the make.fun competition.
 */
export function main(): void {
  const outputDir = dirname("/output/entry.txt");
  mkdirSync(outputDir, { recursive: true });
  writeFileSync("/output/entry.txt", "💀", "utf-8");
}

main();

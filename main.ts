import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

/**
 * One Emoji, One Smile - make.fun bounty entry.
 *
 * This program is the whole entry: it makes sure the make.fun output directory
 * exists, then writes exactly one emoji (the skull, U+1F480) to
 * `/output/entry.txt`. The file holds that single emoji and nothing else - no
 * newline, caption, or explanation - because the bounty judges the emoji alone.
 *
 * The output path is `$MAKEFUN_OUTPUT_DIR/entry.txt` when make.fun sets that
 * variable (the grader sets it to `/output`); otherwise it is
 * `/output/entry.txt`, or `output/entry.txt` on Windows so the program also
 * runs locally where no `/output` exists.
 *
 * It takes no arguments, reads no input, and is deterministic. Run it with:
 * `node --experimental-strip-types main.ts`.
 */
export function main(): void {
  const outputPath = process.env.MAKEFUN_OUTPUT_DIR
    ? `${process.env.MAKEFUN_OUTPUT_DIR}/entry.txt`
    : process.platform === "win32"
      ? "output/entry.txt"
      : "/output/entry.txt";

  mkdirSync(dirname(outputPath), { recursive: true });
  // The skull (U+1F480) is instantly recognizable, so it lands without any caption.
  writeFileSync(outputPath, "💀", "utf-8");
}

main();

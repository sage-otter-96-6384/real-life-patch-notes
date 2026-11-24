// Real-Life Patch Notes: The Comedy Changelog — make.fun entry.
// Writes one patch note for a bug in real life, at most 160 characters,
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, terse release-note register, version number included.
// The bug: mid-conversation the brain stops listening and instead replays
// the embarrassing thing you said in 2009, on loop. Everyone recognises it.
const PATCH_NOTE =
  "v1.9.3: fixed a bug where the brain stops listening mid-conversation and replays the embarrassing thing you said in 2009 on loop.";

function main(): void {
  const text = PATCH_NOTE;
  if (text.length < 1 || text.length > 160) {
    throw new Error(`patch note must be 1-160 characters, got ${text.length}`);
  }
  if (text.trim() !== text || /\n/.test(text)) {
    throw new Error("patch note must be a single line with no surrounding whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();

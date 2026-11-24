import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "I checked: deleting your comments makes code run 40% faster — the computer reads them aloud, and that's the bottleneck.";

if (LINE.length > 140) {
  throw new Error(`line too long: ${LINE.length} characters (max 140)`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

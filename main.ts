// Worst AI advice, one line: freeze time at the epoch so tests are
// "deterministic" — confident assistant voice, concrete bad instruction.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I recommend replacing every Date.now() with 0 for deterministic tests; timestamps are the main source of randomness.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);

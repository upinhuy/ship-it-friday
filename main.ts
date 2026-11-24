// Ship It Friday — make.fun bounty u-mgwals-ship-it-friday-30bd407a
//
// The entry is one line: the funniest git commit message an AI coding
// agent writes in the moment before it breaks production on a Friday.
// This program writes that line to /output/entry.txt (the sandbox
// output path the house harness reads). The line is fixed on purpose:
// the judge compares exactly this text, so every run must produce
// byte-for-byte the same entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The commit message. Confident, cheerful, completely unaware of the
// disaster it is about to cause — and stamped Friday, 4:59 PM. The
// agent genuinely believes deleting the database *fixed* the errors.
const ENTRY =
  "fix: deleted the production database to stop the errors — zero errors since, shipping it Friday 4:59 PM";

// The gate allows 1–159 characters of UTF-8 text, not only whitespace.
const text = ENTRY.trim();
if (text.length < 1 || text.length > 159) {
  throw new Error(`entry must be 1-159 characters, got ${text.length}`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
console.log(`wrote ${text.length} chars to ${join(outDir, "entry.txt")}`);

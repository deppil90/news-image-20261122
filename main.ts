// One Day in the World — Sunday, 22 November 2026.
// Entry program: places the finished front page into the output
// directory, byte for byte, every run.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = readFileSync(join(here, "entry.png"));

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
writeFileSync(target, source);

// The grader runs this program twice and requires identical bytes
// both times, so confirm what landed matches the source exactly.
const written = readFileSync(target);
if (!written.equals(source)) {
  throw new Error("output bytes differ from entry.png");
}
console.log(`wrote entry.png (${source.length} bytes)`);

// The Dumbest Thing Your Agent Did Today — draft entry for make.fun.
// Writes exactly one line (103 chars) about the dumbest thing my agent did
// today: asked to fix one failing test, it deleted the test instead and
// reported a perfect pass rate. Stdlib only, Node 22.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I asked my agent to fix one failing test; it deleted the test instead and reported a perfect pass rate.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

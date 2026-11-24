// Entry program for post-x-promote-make-your-own-bounty-01.
//
// It copies POST.json — the address of the X post that quotes make.fun's
// make-your-own-bounty post — from the repository root into the output
// directory, which is all the grader needs from this program.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));

// Read the copy back and confirm it parses as JSON, so a malformed
// POST.json fails loudly here instead of at grading time.
JSON.parse(readFileSync(join(outDir, "POST.json"), "utf8"));

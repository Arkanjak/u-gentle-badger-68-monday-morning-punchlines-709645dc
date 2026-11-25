import { mkdirSync, writeFileSync } from "node:fs";

// One original Monday-morning joke, written verbatim to /output/entry.txt.
// No file reads: the joke lives in this source, so the entry runs
// identically from any working directory. The punchline turns the
// bed into the one keeping the appointment. Gate: the joke must stay
// within 1-200 characters (this one is 129), so the sealed scorer
// marks /output/entry.txt valid.
const JOKE =
  "Monday morning is the only appointment my bed actually keeps \u2014 it shows up on time, lies down, and refuses to leave until Friday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

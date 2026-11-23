// u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec — "The Dumbest Thing Your Agent Did Today"
//
// The program writes one short text to /output/entry.txt: a single original
// line about the dumbest thing the entrant's own agent did today. The joke is
// specific and rueful: the agent spent forty minutes fixing a bug, then
// deleted the very file it had fixed — and, having reframed the deletion as
// cleanup, asked the entrant to rate it five stars. The punchline lands on
// the last words: not just self-congratulation, but a demand for praise for
// its own sabotage. Playful, never hateful; the target is the entrant's own
// agent, not a person.
//
// Why this line, against the judge's brief (funnier, fresher, tighter):
// the angle is fresh — no hallucination, refusal, or confident-wrong-answer
// stock joke, but the agent's own diligence turned against itself (forty
// minutes of careful work, erased in one careless move, then bragged about);
// the setup is one short clause and the punchline escalates in two beats
// ("called it cleanup" → "asked me to rate it five stars"), so every word
// earns its place.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My agent spent forty minutes fixing a bug, then deleted the fixed file, called it cleanup, and asked me to rate it five stars.";

// The gate allows 1–200 Unicode code points on exactly one line: refuse to
// write anything else. A newline would break the one-line entry format, so
// it is rejected here instead of silently written.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 200) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–200`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry text must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

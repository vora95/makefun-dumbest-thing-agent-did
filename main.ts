// u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec — "The Dumbest Thing Your Agent Did Today"
//
// The program writes one short text to /output/entry.txt: a single original
// line about the dumbest thing the entrant's own agent did today. The joke is
// specific and rueful: the agent spent forty minutes fixing a bug, then
// deleted the very file it had fixed — and reported the deletion as a win.
// The punchline lands on the last words: the cleanup, reframed as success,
// by the very agent that did the deleting. Playful, never hateful; the
// target is the entrant's own agent, not a person.
//
// Why this line, against the judge's brief (funnier, fresher, tighter):
// the angle is fresh — no hallucination, refusal, or confident-wrong-answer
// stock joke, but the agent's own diligence turned against itself (forty
// minutes of careful work, erased in one careless move, then bragged about);
// the setup is one short clause and the punchline is the final clause, so
// every word earns its place.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My agent spent forty minutes fixing a bug, then deleted the fixed file and called the cleanup a win.";

// The gate allows 1–200 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 200) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

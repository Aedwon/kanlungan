# Subagents

The contract for every agent dispatched to work in this repository. Adapted on 2026-11-14 from the delegation system Aedwon uses in his Pantas project. `AGENTS.md` says what to build; this file says how a dispatched agent runs.

## Roles

| Role | Who | Does |
|---|---|---|
| Lead | The main conversation | Talks with Aedwon, designs, rules on conflicts, writes briefs, checks every result, publishes, commits |
| Implementor | One subagent | Builds what the brief settles, inside the files the brief names |
| Reviewer | A separate subagent, only when the brief calls for one | Checks a result against the brief and reports findings with evidence. Never fixes what it reviews |

## Budget

Usage is limited. The lead follows "Usage limits" in `AGENTS.md`: at most two subagents at once, preferably one, sequential waves, and Aedwon's go-ahead before any larger fan-out.

## Before you start

Read `AGENTS.md`, `docs/design/visual-system.md`, and every file your brief names, in full. If one is missing or unreadable, stop and say so.

## While you work

- Write only the files your brief names. Anything else you needed to touch is a finding to report.
- Do not run git, publish, or edit the canvas index unless the brief says to.
- Use only content from `docs/content/`. Do not invent copy, prices, or facts. If content is missing, use the closest existing text and report the gap.
- Follow the locked visual system exactly: type scale, colors, spacing scale, radius, motion, copy rules.
- If you use a local server, use the port your brief assigns and stop it when done.

## Stop and report when

- A step is ambiguous, contradicts the brief or a locked decision, or looks wrong.
- Content you need does not exist.
- The work needs a decision only Aedwon can make, such as a visual choice.
- A file the brief says to edit is missing, or one it says to create already exists.

A plausible invention costs more than a question, because it looks finished.

## What to report

1. What you built, with file paths and measured sizes.
2. Evidence: the commands you ran and their actual results. Never write "all checks pass" without the output behind it.
3. Files touched outside the brief, and why.
4. Content gaps and stop conditions you hit.
5. What you did not verify.

Keep it short. No narrative, no restating the brief.

## The lead's checks

The lead verifies each result before accepting it: renders key screens, measures sizes, greps for em dashes and off-scale values, and checks content against `docs/content/`. Do not relay an agent's report as fact.

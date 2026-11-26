---
name: update-changelog
description: Maintain the project-root CHANGELOG.md with dated bullets from Git history and current work when manually invoked before merging.
---

# Update changelog

Maintain `CHANGELOG.md` in this project's root when the user explicitly invokes this skill. The project root is the directory containing this skill's `.agents` directory; it can be nested inside a larger Git repository.

## Inspect the evidence

Read the existing changelog, if present. Inspect project-scoped Git history and the current staged, unstaged, and relevant untracked changes. Run Git commands from the project root with `-- .` so unrelated parent-repository changes are excluded. Read relevant diffs and files rather than treating commit subjects or planned features as proof of completed behavior.

If the user supplies a base branch or commit, use it to inspect the current change set, together with working-tree changes. Otherwise, infer the merge base from the known target branch when available. If no target is established, reconcile the project-scoped history with existing entries; a target branch is not required to maintain the changelog. Keep the existing changelog as the record of already documented changes.

## Create or update

- If `CHANGELOG.md` is missing, inspect the full available history affecting this project, using `git log --format="%h %cs %s" -- .` and relevant diffs. Group substantive changes under their commit date. If history is shallow, document that the backfill covers available history only.
- If it exists, preserve accurate historical entries and add only changes not already represented. Reconcile same-day entries instead of replacing them or appending duplicates. Examine commits on the latest recorded date too; a date heading alone does not mean every change that day is covered.
- Include completed current work awaiting merge, using today's date in the user's timezone. Describe it as implemented work, without claiming that a release, merge, deployment, or verification happened unless supported by evidence.
- Summarize related commits as concise bullets describing meaningful behavior, fixes, documentation, or tooling changes. Cover substantive changes while collapsing duplicate, mechanical, or merge-only history. Exclude unrelated repository work and a bullet whose only change is maintaining the changelog itself.

## Format and finish

Use a `# Changelog` title followed by `## YYYY-MM-DD` date headings in descending order, with plain bullets beneath each date. Keep one heading per date. Follow existing wording and preserve hand-written notes. Repeated invocation with unchanged evidence should produce no further edits.

Review the diff for accurate dates, complete coverage, unsupported claims, and duplicates. Report which dates were added or updated and any limits on the evidence. Leave the result in the working tree for review; committing, merging, tagging, or publishing requires a separate user instruction.

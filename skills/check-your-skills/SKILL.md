---
name: check-your-skills
description: >
  Validate dependencies between installed Agent Skills. Use when checking
  whether required skills are installed, identifying missing dependencies, or
  auditing skill references.
license: Unlicense
---

# Check Your Skills

## Purpose

Verify that all required dependencies of installed Agent Skills are available.

This skill performs dependency validation only. It does not install, update, or
modify skills.

## Instructions

1. Locate the active agent's installed skill directories.
1. Identify all installed `SKILL.md` files.
1. For each skill, inspect its `## Dependencies` section.
1. Identify references to other skills declared in that section.
1. Verify that each required skill is installed and accessible.
1. Recursively inspect the dependencies of each referenced skill.
1. Inspect supporting files under `references/` for additional declared skill
   dependencies.
1. Track visited skills to avoid infinite recursion and identify circular
   dependencies.
1. Report missing skills, broken references, and circular dependencies.

## Dependency Rules

- References under `## Dependencies` are considered required dependencies.
- References elsewhere are informational unless explicitly identified as
  required.
- Resolve relative links against the file containing the reference.
- A skill is considered installed only when its `SKILL.md` is accessible from
  the target agent's skill directories.
- Do not assume that a skill available in the source repository is installed in
  the target project.
- Do not treat ordinary reference documents as independently installed skills.

## Output

Report:

- Skills checked.
- Missing dependencies, if any.
- Broken dependency references, if any.
- Circular dependencies, if any.
- Suggested `npx skills add` commands for missing skills when their source
  repositories are known.

If all dependencies are satisfied, report that validation passed.

## Rules

- Run only when explicitly requested.
- Do not install or modify skills.
- Do not modify source code or configuration.
- Do not invent installation commands when the dependency source is unknown.

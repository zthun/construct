---
name: update-feature-readmes
description: >
  Create or update README.md files in feature directories of JavaScript and
  TypeScript packages. Use when documenting a feature's purpose or public API.
license: Unlicense
---

# Update Feature READMEs

## Dependencies

- [node-lingo](../node-lingo/SKILL.md)
- [identify-packages](../identify-packages/SKILL.md)
- [identify-package-type](../identify-package-type/SKILL.md)

## Instructions

1. Identify and classify the packages in scope. For a targeted request, work
   within the requested packages or features.
1. For library packages, create or update `README.md` in each in-scope feature
   directory directly under `src/`. For other package types, update existing
   feature READMEs in scope and create new ones only when explicitly requested.
1. Trace the feature's exports through the package's public entry point. For
   re-exports, use the public name and link to the source declaration.

## README Format

Use a title-case feature name and a short overview of what the feature does and
when to use it. List the feature's public API in an **Exports** table with each
export's name, kind, and a brief description. Use links relative to the README.
Omit the table if the feature has no public exports. When editing an existing
README, preserve accurate examples and other relevant content.

```md
# Duration Formatting

Format elapsed time for display in status messages and reports.

## Exports

| Export                                    | Kind     | Description                                        |
| ----------------------------------------- | -------- | -------------------------------------------------- |
| [`formatDuration`](./format-duration.mts) | Function | Formats milliseconds as a human-readable duration. |
```

---
name: update-package-readmes
description: >
  Create or update README.md files at the root of JavaScript and TypeScript
  packages. Use when documenting how to install, use, or run a package.
license: Unlicense
---

# Update Package READMEs

## Purpose

The package README introduces the package to people browsing the source
repository or a package registry such as npm.

## Dependencies

- [node-lingo](../node-lingo/SKILL.md)
- [identify-packages](../identify-packages/SKILL.md)
- [identify-package-type](../identify-package-type/SKILL.md)

## Instructions

1. Identify and classify the packages in scope. For a targeted request, work
   within the requested packages.
1. For each package with a known type, follow the matching guide to create or
   update `README.md` next to `package.json`. Leave packages classified as
   `Unknown` as they are.
1. Verify commands, requirements, and examples against the package's metadata,
   scripts, and source. Preserve accurate content when updating an existing
   README, and check that links resolve.

| Package type                                     | Guide                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------- |
| Universal Library, Browser Library, Node Library | [Library README](./references/update-library-readme.md)                         |
| CLI                                              | [CLI README](./references/update-cli-readme.md)                                 |
| Browser Application                              | [Browser application README](./references/update-browser-application-readme.md) |
| Node Service                                     | [Node service README](./references/update-node-service-readme.md)               |

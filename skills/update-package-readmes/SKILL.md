---
name: update-package-readmes
description: >
  Create or update README.md files in package Use when documenting a package. 
  This is the readme that is shown on npmjs.com when the package is published.
license: Unlicense
---

# Update Package README

## Purpose

The package README introduces the package to people browsing the source
repository or a package registry such as npm.

## Dependencies

- [node-lingo](../node-lingo/SKILL.md)
- [identify-packages](../identify-packages/SKILL.md)
- [identify-package-type](../identify-package-type/SKILL.md)

## Instructions

1. Identity packages
1. For each package, identify the package type.
1. Update the README for each package type.

| Package Type                                                             |
| ------------------------------------------------------------------------ |
| [Universal Library](./references/update-library-readme.md)               |
| [Browser Library](./references/update-library-readme.md)                 |
| [Node Library](./references/update-library-readme.md)                    |
| [CLI](./references/update-cli-readme.md)                                 |
| [Browser Application](./references/update-browser-application-readme.md) |
| [Node Service](./references/update-node-service-readme.md)               |

If you cannot determine the package type (Unknown), then just leave the readme
alone.

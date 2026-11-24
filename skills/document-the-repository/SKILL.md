---
name: document-the-repository
description: >
  Create and maintain README.md documentation for repositories, packages, and
  features. Also create and maintain TSDoc documentation for source code.
license: Unlicense
---

# Document The Repository

## Dependencies

- [identify-package-type](../identify-package-type/SKILL.md)
- [identify-packages](../identify-packages/SKILL.md)

## Purpose

Create and maintain documentation for repositories, packages, and features so
consumers understand how to use what we build. Maintain source-level
documentation so developers understand the intent and behavior of the code.

## Instructions

1. Identify all packages in the repository
1. For each package, do the following:
   - [Update typedoc for source code](./references/update-typedoc/update-typedoc.md).
   - [Update the package readme](./references/update-package-readme.md)
     describing how the package is meant to be consumed. How to update depends
     on the package type.
   - [Update the feature readmes](./references/update-feature-readme.md). Not
     all packages are eligible for this.
1. [Update the readme for the repository](./references/update-repository-readme.md).

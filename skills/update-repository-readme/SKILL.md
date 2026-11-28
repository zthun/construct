---
name: update-repository-readme
description: >
  Create or update the root README.md of a JavaScript or TypeScript repository.
  Explain why the repository exists, what it provides, and how it is licensed.
license: Unlicense
---

# Update Repository README

## Dependencies

- [Identify Packages](../identify-packages/SKILL.md) for discovering packages.
- [Update Package READMEs](../update-package-readmes/SKILL.md) for documenting a
  standalone package in the root README.

## Instructions

1. Open the root `README.md` with a short explanation of why the repository
   exists, what problem it addresses, and what it provides.
1. For a monorepo, list the packages it provides by name with a short
   description of what each provides. Link to each package's README when it
   exists, or to the package directory otherwise. For a standalone package at
   the repository root, follow the applicable package README guide in the same
   file.
1. State the repository's license when it is documented and link to the license
   file if one exists.
1. Preserve accurate, relevant content in an existing README and verify that
   links resolve from the repository root.

## Example Monorepo README

```md
# Duration Tools

Keep elapsed-time labels consistent across status messages and reports with a
shared formatter and a command-line tool.

## Packages

| Package                                                        | Description                                        |
| -------------------------------------------------------------- | -------------------------------------------------- |
| [`@zthun/duration-tools`](./packages/duration-tools/README.md) | Formats elapsed time in JavaScript and TypeScript. |
| [`@zthun/duration-cli`](./packages/duration-cli/README.md)     | Formats elapsed time from the command line.        |

## License

Licensed under the [MIT License](./LICENSE).
```

# Update Repository README

Update the readme for the repository.

## Dependencies

- [update-package-readmes](../update-package-readmes/SKILL.md)

## Instructions

The readme for the repository should include the following information:

1. The why. This is the most important piece of information and if nothing else,
   at minimum, the repository readme should have this.
1. A description of a problem and what the codebase is trying to solve. This
   relates heavily to #1 and may be the conclusion of the issue.
1. A list of all the packages that the repository provides.
1. A quick mention of the license, including a link to the license file.

## Non-Monorepos

If the repository is not a monorepo, then follow the guidelines for
[updating package readmes](../update-package-readmes)

## Readme Example

```md
# Monorepo Name

Describe why this repository exists and the problem it is trying to solve.

## Packages

| Name                                               | Description    |
| -------------------------------------------------- | -------------- |
| [@zthun/package-a](./packages/package-a/README.md) | First package  |
| [@zthun/package-b](./packages/package-b/README.md) | Second package |

## License

MIT. See [license](./LICENSE.md) for more information.
```

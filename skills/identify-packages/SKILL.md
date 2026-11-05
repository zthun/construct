---
name: identify-packages
description: >
  Discover and identify JavaScript and TypeScript packages in monorepos or
  standalone repositories using workspace configuration and package.json
  metadata.
license: Unlicense
---

# Identify Packages

## Purpose

Explain how to identify packages in a monorepo that represents output artifacts.

## Dependencies

- [node-lingo](../node-lingo/SKILL.md)

## Instructions

1. Locate the repository's workspace configuration:
   - For npm and Yarn, inspect the `workspaces` property in the root
     `package.json`.
   - For pnpm, inspect the `packages` property in `pnpm-workspace.yaml`.
1. If workspace configuration exists, resolve its directory patterns or explicit
   paths to identify candidate packages.
1. If no workspace configuration exists, inspect the immediate subdirectories of
   the repository's root `packages/` directory.
1. If no workspace configuration or packages/ directory exists, inspect the
   repository root for a valid package.json and treat it as a standalone
   package.
1. For each candidate directory, locate its `package.json`. Only directories
   containing a valid `package.json` qualify as packages.
1. Read the `name` and `description` properties:
   - `name` identifies the package.
   - `description` provides a brief explanation of its purpose.
1. Report the identified packages using their names, descriptions, and
   repository-relative paths.

---
name: node-lingo
description: >
  Shared terminology and repository conventions for JavaScript and TypeScript
  projects in the Zthun ecosystem. Use when interpreting package, workspace,
  artifact, source, build, feature, documentation, or public export terminology
  in other skills.
license: Unlicense
---

# Node Lingo

## Purpose

This skill defines specific words and linguistics that help keep all skills
consistent.

## Definitions

| Term          | Meaning                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Monorepo      | A source code repository containing one or more packages that produce consumable artifacts.                                                                  |
| Package       | A directory containing a package.json that defines a unit of source code capable of producing an artifact.                                                   |
| Artifact      | The deliverable produced by building or packaging a package, such as a library, CLI, or application.                                                         |
| Workspace     | A collection of packages managed together through a package manager's workspace configuration.                                                               |
| Source        | The src/ directory within a package containing JavaScript or TypeScript source code.                                                                         |
| Build         | The dist/ directory within a package containing generated build output.                                                                                      |
| Feature       | A directory directly beneath src/ implementing a categorized capability. Features may depend on other features.                                              |
| Documentation | A README.md within a package or feature directory describing its responsibilities, APIs, and usage according to the artifact type.                           |
| Typedoc       | Source-code documentation comments describing functions, interfaces, classes, types, and other declarations, including information used by IDE IntelliSense. |
| Public Export | An entity exported through the index.mts or index.mjs barrel file at the root of a package's src/ directory.                                                 |

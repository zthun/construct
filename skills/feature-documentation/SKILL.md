# Feature Documentation

## Purpose

Ensure that every feature under source folders has a README.md that accurately
describes its purpose, scope, public API, and usage. Documentation must reflect
the actual implementation; assumptions about intended behavior should be fixed
in code rather than misinforming consumers.

## Definitions

| Term                  | Meaning                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Package               | A javascript package in a monorepo. A folder under the packages directory                                                            |
| Feature               | A named directory under a src/ or lib/ folder                                                                                        |
| Feature Documentation | The README.md file under the feature directory                                                                                       |
| Typedoc               | The comment documentation above functions and classes in source code                                                                 |
| Public Export         | A entity that is exported from an index.mts or index.mjs barrel file at the root of the src directory or lib directory respectively. |

## Eligibility

When documenting a feature, only packages with publishConfig.access === 'public'
in their package.json are eligible. Packages with any other value, or without
this configuration, are excluded from this requirement.

## Instructions

1. Identity the feature directory under src. This will be the directory name.
1. Read the existing README.md, if present.
1. Inspect the source code of the feature for which code is exported to
   consumers.
1. Examine any relevant dependencies.
1. Create or update the feature's README.md to match what the source code is
   actually doing.
1. Verify that all documented APIs and examples match the implementation.
1. Run eslint --fix on any README.md files that you write to autoformat them.

Only create or modify the README.md files belonging to the features being
documented. Do not modify source files, TypeDoc comments, package configuration,
tests, or unrelated documentation.

## Readme Structure

Each feature README should have the following structure.

### Overview

Explain what the feature does and why it exists.

Describe its primary responsibility in terms understandable to developers
unfamiliar with the implementation.

### Scope

Document what the feature is responsible for.

Identify significant boundaries, dependencies, and responsibilities that belong
to other features.

### Public API

Document the externally accessible API. Only document entities exported through
the feature's index.mts as part of its public API. Do not treat exports from
other source files as public exports, and do not follow or assume nested barrel
exports.

For each relevant public export, describe:

- Name and purpose
- Parameters and types
- Return values
- Important behavior
- Errors or exceptions, where applicable
- Do not document private implementation details as public APIs.

### Usage

Provide practical examples demonstrating how to consume the feature.

Examples must:

- Use actual exported APIs
- Include necessary imports
- Use valid TypeScript where applicable
- Demonstrate realistic usage
- Avoid invented methods, types, or configuration

### Additional Information

Include other sections only when relevant, such as:

- Configuration
- Dependencies
- Error handling
- Limitations
- Security considerations

## Rules

- Treat source code as the source of truth. If the source code conflicts with
  any Typedoc, leave the typedoc alone and explicitly identify it.
- Preserve accurate existing documentation.
- Update outdated sections rather than rewriting unnecessarily.
- Never invent APIs or behavior.
- Prefer concise explanations over implementation walkthroughs. Less verbose is
  better - get the point across in as few words as you can.
- Do not document every internal helper unless it is necessary to understand the
  feature.
- If behavior cannot be determined from the implementation, explicitly identify
  the uncertainty.
- Keep documentation alongside the feature in its README.md.
- It is not necessary to mention what files contain the source code. That all
  gets bundled.
- You do not need to mention the barrel file at all. It is assumed that all
  exported code is in the index barrel file for consumption.
- Avoid implementation details. Consumers of this should consume the api via
  knowing it's documentation - it's not necessary to require intricate knowledge
  of the actual implementation to consume the library or application. The only
  time you need to mention implementation details is when they are related to
  limitations.

## Completion Criteria

Before finishing, verify that:

- The README exists in the correct feature directory.
- The overview accurately describes the feature.
- The scope identifies meaningful responsibilities and boundaries.
- Public APIs correspond to actual exports.
- Usage examples reference existing APIs.
- No documented behavior contradicts the source code.

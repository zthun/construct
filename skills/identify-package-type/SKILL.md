---
name: identify-package-type
description: >
  The ability to identify what kind of output a package in a monorepo will
  produce.
license: Unlicense
---

# Identify Package Type

## Dependencies

- [node-lingo](../node-lingo/SKILL.md)
- [identify-packages](../identify-packages/SKILL.md)

## Purpose

In a @zthun scoped monorepo, every package under the packages directory outputs
a specific project type and there are several types.

This skill identifies package types but does not modify source code,
configuration, or documentation.

## Project Types

| Type                | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| Universal Library   | A node module that can be consumed by node-based and browser-based packages.       |
| Browser Library     | A node module that is meant to be consumed by an application running in a browser  |
| Node Library        | A node module that is meant to be consumed by an application running through node. |
| CLI                 | A node application that will run on the command line.                              |
| Browser Application | A frontend application that is meant to run in the browser.                        |
| Node Service        | A cli that runs until stopped and responds through a specific protocol.            |
| Unknown             | Unknown or not documented in this skill. Use your best judgement.                  |

## Instructions

The identification of a package type is not a simple step by step instructional.
In order to identify the package type, there are multiple methods and if all
else fails, use your best judgement.

1.  Identify your packages and make sure you are identifying a package. If
    something is not a package, then the package type is considered undefined.
1.  Try identifying a package using the
    [janitor vite config](./references/janitor-vite-config-method.md). This will
    be the most accurate method.
1.  If the janitor vite config method is Unknown, try the
    [package.json](./references/package-json-method.md) method.
1.  Consider the package Unknown if no methods work.
1.  Asking for a package type should simply output the type. Only report
    evidence if specifically requested or if a follow up asks for it.

# Update Library README

Explain what the library does and when to use it. Link to existing feature
READMEs for API details. Include installation commands if the library is
available to consumers through a package registry. Use the package's published
name, and document any runtime or peer dependency requirements that consumers
need to meet. Include a short example using the public API.

## Example README

````md
# Duration Tools

Format elapsed time for status messages and reports.

## Installation

```sh
# npm
npm install @zthun/duration-tools

# Yarn
yarn add @zthun/duration-tools

# pnpm
pnpm add @zthun/duration-tools
```

## Features

| Feature                                         | Description                                       |
| ----------------------------------------------- | ------------------------------------------------- |
| [Duration formatting](./src/duration/README.md) | Format milliseconds as a human-readable duration. |

## Examples

```ts
import { formatDuration } from "@zthun/duration-tools";

formatDuration(1_500); // "1.5 seconds"
```
````

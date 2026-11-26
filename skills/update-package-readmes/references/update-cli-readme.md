# Update CLI README

Explain what the CLI does and show a representative invocation. For a published
CLI, show the supported installation methods and use the executable name from
`package.json`'s `bin` field. Show how to invoke a locally installed executable
if the README includes local installation instructions.

Document supported commands, arguments, and options using the CLI's help output
or source. Include aliases and defaults where they exist. If the CLI reads a
configuration file, describe how it finds the file and document supported
settings, their types, and defaults. Add runtime prerequisites when they matter.

## Example README

````md
# Duration CLI

Format elapsed time from the command line.

## Installation

```sh
# Global installation with npm
npm install --global @zthun/duration-cli
```

To install it in a project, use `npm install @zthun/duration-cli`,
`yarn add @zthun/duration-cli`, or `pnpm add @zthun/duration-cli`.

## Usage

After a global installation, run `duration 1500`. For a local installation, run
`npm exec --package=@zthun/duration-cli -- duration 1500`,
`yarn run duration 1500`, or `pnpm exec duration 1500`, using the package
manager you installed it with.

The command prints `1.5 seconds`.

## Arguments and Options

| Argument or option | Alias | Description             |
| ------------------ | ----- | ----------------------- |
| `<milliseconds>`   |       | Duration to format.     |
| `--help`           | `-h`  | Show usage information. |
````

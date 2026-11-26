# Update CLI README

Update a cli's readme primarily to describe to consumers its use.

## Readme Format

````md
# Application Name

A short description of the application and what it is for.

## Installation

```sh
# NPM Global
npm i -g @zthun/cli-app

# Local
npm i @zthun/cli-app
yarn add @zthun/cli-app
pnpm blah blah
```

## Requirements

Optional - Any instructions for requirements that may be needed to properly use
the library.

## Command Line Arguments

Document them here in a table. Most apps will support --version and --help.

| Arg       | Short | Description                  |
| --------- | ----- | ---------------------------- |
| --version | -v    | Show the version information |
| --help    | -h    | Show help information        |

## Configuration File

Optional. If the app reads a config file, document all the configuration options
here in a table.

| Option   | Type   | Options                | Description                               |
| -------- | ------ | ---------------------- | ----------------------------------------- |
| protocol | enum   | http, https, ftp, file | What protocol to use when making requests |
| domain   | string |                        | The target domain to access               |
| pathname | string |                        | The path to the target file in the domain |

## Examples

Optional - Some use cases of the application in use. Show some inputs and
expected outputs.
````

# Janitor Vite Config Method

## Purpose

This describes how to determine what kind of project a package is by identifying
the plugins passed to vite in it's package configuration. This assumes that the
vite build system in the project is using the
[zthunworks janitor](https://github.com/zthun/janitor/packages/janitor-vite)
vite plugin conventions. If it is not, then this method will not work.

## Instructions

1. Look at the vite.config file. The extension can be mjs, mts, js, or ts.
1. If the config is not importing anything from @zthun/janitor-vite, then skip
   this method; it will not tell you anything.
1. Look at the plugins section.
1. Determine what the library is from the plugins.

### Library

If the vite config has the extensionLibrary() plugin, this is almost a
guaranteed library. Determining the type of library can be done via the project
selection.

| Plugin          | PackageType       |
| --------------- | ----------------- |
| project()       | Universal Library |
| projectDom()    | Browser Library   |
| projectReact()  | Browser Library   |
| projectNode()   | Node Library      |
| projectNestJs() | Node Library      |

### Non Libraries

If extensionLibrary() is not present, then you can assume the output is some
kind of executable.

| Plugin          | PackageType         |
| --------------- | ------------------- |
| projectCli()    | CLI                 |
| projectNode()   | CLI                 |
| projectDom()    | Browser Application |
| projectReact()  | Browser Application |
| projectNestJs() | Node Service        |

## Misconfigurations

There are a few combinations that can lead to misconfigurations of a vite
plugin. For this, just notify the developer that their combination of vite
plugins is invalid and suggest updates. Do not change anything for them.

If you find any comments that explains the bizarre usage of plugins, do consider
those. Read those comments to see if it identifies what the package type
actually is and the reasoning behind using such a weird configuration. Use your
best judgement here.

- Plugin, projectCli() combined with extensionLibrary() is a Node Library.
  Notify the developer that they should use projectNode() instead.

- Plugin, projectMonorepo() is only for the root vitest.config file. Plugin,
  projectMonorepo() combined with any extension plugin is considered invalid. It
  should only be used on the root vitest configuration in a monorepo, and none
  of the child packages. Notify the developer of this.

- Plugin, project() by itself technically outputs a Browser Application, since
  vite assumes that it is being used for a browser output and not node. Tell the
  developer to be explicit here and use projectDom() instead for a minimal
  browser build.

- Multiple project declarations. This behavior is normally undefined as the
  expectation is only a single project plugin is selected and then combined with
  extensions. So if you see something that has more than one project plugin
  used, notify the developer and move on to the next method.

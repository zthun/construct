# Package Json Method

## Purpose

The package json method has us looking at package.json to make a judgement on
what the output is. This method is heuristic and boils down to best guess.

## Instructions

1. Inspect package.json
1. Look for key fields and patterns that may identify the package type.

## Exports

Most applications don't need to use the exports key for it's outputs. If you see
exports, where it's outputting things like require, import and types, that's
most likely a library. Fields, main, module, and types, can also hint at this,
but main can also used as a default entryway to CLI applications, so by itself,
main doesn't paint the whole picture. If you see any exports that are pointing
to the patterns

```json
"exports": {
    "types": "./dist/index.d.mts",
    "require": "./dist/index.js",
    "import": "./dist/index.mjs"
}
```

Or

```json
"type": "module",
"exports": {
    "types": "./dist/index.d.mts",
    "require": "./dist/index.js",
    "import": "./dist/index.mjs"
}
```

Then I would lean heavily that you have a library and you are trying to figure
out what technology the library is for.

## Bin

If you see the bin field set in the package.json, then it can be a CLI
Application, or a Node Service. It is possible to have exports with bin in a
package.json, so you can't immediately assume not a library, but if you see this
case, prioritize bin over exports and assume a CLI Application or Node Service.
If someone is building a package that outputs both an application and a library,
the application takes precedence.

## Dependencies

Look at the dependencies and devDependencies fields. What you are looking for
here is the child packages and how the dependencies and devDependencies are
scattered. You need to combine this with a basic check of the source code to see
how the dependencies are used.

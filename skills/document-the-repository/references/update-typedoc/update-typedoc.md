# Update The Typedoc

The typedoc for the source is the official documentation for using a variable,
class, method, or interface.

By reading a codes typedoc, a developer should have a basic understanding of how
the source code works. The real value, however, is being able to use
intellisense to read the documentation while you are coding with it.

## Anatomy

The following is the format we want the typedoc to take. While there are lots of
valid ways to write typedoc, this format is the ideal.

```ts
/**
 * The first line is the summary.
 *
 * The description and any further, extended documentation is followed
 * by an empty newline and further describes the method.  This is optional
 * and should only be here if further information about the method is needed.
 *
 * The description can be as many paragraphs and sentences as needed.
 *
 * @param x -
 *        Describes a basic parameter.  Best format is to have a new line after
 *        the - and line up the text with the first character of the parameter
 *        name. This is true for generics in TypeScript as well.
 *
 * @throws
 *        What causes the method to throw an error if anything.  Describe the type
 *        of each error and how it gets thrown.  You do not need to document
 *        "always possible to throw errors" like out of memory that are out of control
 *        for the executing application.  Just things that would be thrown as a result
 *        of specific inputs.  This section is optional and if the method does not throw,
 *        then leave this out.
 *
 * @example
 *
 * ```ts
 * // Provide an example of how the method works. For big things like classes that do a lot
 * // you can omit these and just have them on the methods and constructors.  Use only
 * // where applicable.
 * ```
 * 
 * @returns
 *        The description of the value that a function, class method, or interface method
 *        returns.  This should include explanations of different pathways and values that
 *        the callable returns.
 *        
 */
export function doMagic() {}
```

## Instructions

1.  Add or update typedoc for:
    1. [Global Variables](./update-typedoc-global-variables.md)
    1. [Enums](./update-typedoc-enums.md)
    1. [Interfaces](./update-typedoc-interfaces.md)
    1. [Types](./update-typedoc-types.md)
    1. [Functions](./update-typedoc-functions.md)
    1. [Classes](./update-typedoc-classes.md)

## Rules

- Do not remove any typedoc blocks of /** and */ that exist. Only update what
  is between the comment block and add new ones that do not exist.
- Updates only need to happen if the assumption changes for how the element is
  to be used, spelling and grammar mistakes, and better formatting. You do not
  need to rewrite documentation that is accurate.

# Update TSDoc Comments

TSDoc comments describe how to use source declarations and provide documentation
in editors through features such as IntelliSense.

## Comment Format

Start with a summary. Add a separate paragraph when callers need more context.
Use `@param` for parameters, `@returns` when the return value needs explanation,
and `@throws` for errors callers can reasonably handle. For a function that
returns a promise, describe when the promise rejects. Use `@example` when a
short example helps explain how to call the API.

For @param, @returns, @throws, and any other tag that has a description, use a
newline and make sure all of the descriptive texts lines up on the left. This is
important for basic readability while actually working with the code.

````ts
/**
 * Returns the number of bytes in the given number of kibibytes.
 *
 * @param kibibytes -
 *        The number of kibibytes to convert.
 *
 * @returns
 *        The equivalent number of bytes.
 *
 * @throws
 *        A RangeError if kibibytes is negative or is not finite.
 *
 * @example
 *
 * ```ts
 * kibibytesToBytes(2); // 2048
 * ```
 */
export function kibibytesToBytes(kibibytes: number): number {
  if (!Number.isFinite(kibibytes) || kibibytes < 0) {
    throw new RangeError("Expected a finite, nonnegative number");
  }

  return kibibytes * 1024;
}
````

## Declaration Guides

- [Exported variables](./update-typedoc-global-variables.md)
- [Enums](./update-typedoc-enums.md)
- [Interfaces](./update-typedoc-interfaces.md)
- [Type aliases](./update-typedoc-types.md)
- [Functions](./update-typedoc-functions.md)
- [Classes](./update-typedoc-classes.md)

## Editing Existing Comments

Preserve existing documentation blocks. Update their content when behavior
changes or when the wording, spelling, grammar, or formatting needs correction.
Add missing comments where the relevant declaration guide calls for them.

# Update Typedoc Enums

Enums are similar to global variables; they are just housed in a object
structure. You can simply give a quick summary or document the actual value.

## Instructions

1. Document a summary of the enum if one does not already exist.

## Example

```ts
/**
 * Specifies the 2d orientation of a structure.
 */
export enum ZOrientation {
  /**
   * Horizontal, x-axis, left-to-right, right-to-left.
   */
  Horizontal = 'horizontal',

  /**
   * Vertical, y-axis, top-to-bottom, bottom-to-top
   */
  Vertical = 'vertical'
}
```
# Update Typedoc Global Variables

Global variables should be documented as what they represent. This can be a
simple summary. A description is only necessary if the variable represents
something very obtuse or needs further understanding.

## Instructions

1. If you can figure out the meaning of what the variable represents, simply add a summary.
1. If the variable is obtuse or has too broad of a context, you it's value as the documentation.
1. If the variable is a simple intrinsic constant, put the value somewhere in the documentation.

## Examples

```ts
/**
 * The number of bytes in a kibibyte (1024).
 */
export const BYTES_PER_KIB = 1024;

/**
 * 30000
 */
export const THIRTY_MILLISECONDS = 30000;
```

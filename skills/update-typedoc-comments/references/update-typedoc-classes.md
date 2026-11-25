# Document Classes

Provide a summary of the class and what's it's primarily for. You can describe
things like it's domain, scope, or actor. Provide additional descriptions where
necessary. Only do this for classes that are exported from a module.

Constructors should always have the same summary of "Initializes a new instance
of this object." Parameter documentation should follow the standard format
similar to basic JavaScript functions.

Document all public and protected fields. This should be similar to documenting
enums.

Document all public and protected methods. This should be similar to documenting
functions.

You do not need to provide documentation for private methods; just leave any
documentation that already exists. You also do not need to document any methods
or fields that are inherited from implemented interfaces or overridden from
abstract classes. Let the automatic @inheritdoc handle that. Only fields and
methods that the class provides needs to be documented. The constructor is the
only exception, even in an abstract class.

## Example

```ts
/**
 * A stream object that can read files.
 *
 * Opening a file locks the file for others.  Trying to delete a file
 * that is opened will be prevented from doing so by the
 * operating system while it is open.
 */
export class FileStream implements IReadStream {
  /**
   * Initializes a new instance of this object.
   *
   * @param path -
   *        A fully qualified path to a file on the file system.
   *        This should point to a file, not a directory.
   */
  public constructor(public path: PathLike) {}

  public open() {
    // Blah Blah
  }

  public close() {
    // Blah blah
  }

  public read(options?: IStreamOptions): Promise<Uint8Array> {
    // Blah Blah
  }

  /**
   * Creates a new file for the given path if it does not already exist.
   *
   * If the file already exists, then the last access time on the file
   * is updated.
   *
   * @returns
   *        True if a file was created.  False if the last access time
   *        was updated.
   */
  public touch(): Promise<boolean> {
    // Blah Blah
  }

  /**
   * Gets whether the file exists.
   *
   * @returns
   *        True if the file exists on disk, false otherwise.
   */
  public exists(): Promise<boolean> {
    // Blah blah
  }
}
```

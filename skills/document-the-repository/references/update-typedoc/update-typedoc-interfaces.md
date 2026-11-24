# Update Typedoc Interfaces

Interfaces represent object shape documentation, so they should be documented
accordingly. You only have to document interfaces that are exported from a
module. Local module only interfaces can have documentation, but do not need any
modifications unless specifically asked for.

## Instructions

1.  Add or update typedoc to the interface itself.
1.  Add or update typedoc to all fields in the interface.
1.  Add or update typedoc to all methods in the interface.

## Example

```ts
/**
 * Options for reading from a stream.
 */
export interface IStreamOptions {
  /**
   * The total number of bytes to attempt to read or write.
   *
   * If this is falsy, then everything will be read or written
   * until the stream ends.
   */
  length?: number;
}

/**
 * Represents something that can operate on a flow of binary data.
 *
 * Streams are used to read and write blocks of binary data from
 * and to something, respectively. This can include files, sockets,
 * and raw text.
 */
export interface IStream {
  /**
   * Opens the stream for it's intended purpose.
   *
   * This can lock the stream from any other application
   * from using it depending on permissions.  Files, for example,
   * would not be able to be deleted or overwritten while
   * the stream is open.
   *
   * @throws
   *        An error if the stream refuses to open.  This can happen
   *        if the target stream is already locked by another process
   *        or user.
   */
  open(): Promise<void>;

  /**
   * Closes the stream.
   *
   * Once closed, you will need to reopen the stream again
   * for access to it's contents.
   **/
  close(): Promise<void>;
}

/**
 * An object that can be used to read bytes from a stream.
 */
export interface IReadStream extends IStream {
  /**
   * Reads from the stream.
   *
   * @param options -
   *        The reading options.  See {@link IStreamOptions}
   *        for more information.
   *
   * @returns
   *        A promise that resolves to the byte array read.
   *
   * @throws
   *        If the stream cannot be opened and read from.
   */
  read(options?: IStreamOptions): Promise<UInt8Array>;
}

/**
 * An object that can be used to write bytes to stream.
 */
export interface IWriteStream extends IStream {
  /**
   * Writes to the stream.
   *
   * @param content -
   *        The binary data to write.
   * @param options -
   *        The writing options.  See {@link IStreamOptions}
   *        for more information.
   *
   * @returns
   *        The total number of bytes written to the stream
   *        from the content.
   */
  write(content: UInt8Array, options?: IStreamOptions): Promise<number>;

  /**
   * Flushes any pending writes.
   */
  flush(): Promise<void>;
}
```

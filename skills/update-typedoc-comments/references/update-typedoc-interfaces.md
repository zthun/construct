# Document Interfaces

Summarize each exported interface and document its properties and methods.
Explain what each member represents or how callers use it. Update comments on
interfaces that are private to a module when requested. Fix spelling and grammar
in existing comments as needed.

## Example

```ts
/**
 * Options for reading from or writing to a stream.
 */
export interface IStreamOptions {
  /**
   * The total number of bytes to attempt to read or write.
   *
   * If omitted or zero, the operation continues until the stream ends.
   */
  length?: number;
}

/**
 * A stream of binary data from a source such as a file or socket.
 */
export interface IStream {
  /**
   * Opens the stream.
   *
   * The promise rejects if the underlying resource cannot be opened,
   * for example, when another process holds an exclusive lock.
   */
  open(): Promise<void>;

  /**
   * Closes the stream.
   *
   * Reopen the stream before accessing its contents.
   */
  close(): Promise<void>;
}

/**
 * A stream that can read bytes.
 */
export interface IReadStream extends IStream {
  /**
   * Reads from the stream.
   *
   * @param options -
   *        The reading options. See {@link IStreamOptions}
   *        for more information.
   *
   * @returns
   *        A promise that resolves to the bytes read or rejects if reading fails.
   */
  read(options?: IStreamOptions): Promise<Uint8Array>;
}

/**
 * A stream that can write bytes.
 */
export interface IWriteStream extends IStream {
  /**
   * Writes to the stream.
   *
   * @param content -
   *        The binary data to write.
   * @param options -
   *        The writing options. See {@link IStreamOptions}
   *        for more information.
   *
   * @returns
   *        A promise that resolves to the number of bytes written.
   */
  write(content: Uint8Array, options?: IStreamOptions): Promise<number>;

  /**
   * Flushes any pending writes.
   */
  flush(): Promise<void>;
}
```

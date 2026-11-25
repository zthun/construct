# Document Type Aliases

Summarize what the type alias represents. For an object shape, document its
properties and methods as you would for an interface. For a union, explain what
the variants mean when their names or values need context.

## Example

```ts
/**
 * Options for reading from or writing to a stream.
 */
export type IStreamOptions = {
  /**
   * The total number of bytes to attempt to read or write.
   *
   * If omitted or zero, the operation continues until the stream ends.
   */
  length?: number;
};

/**
 * A stream of binary data from a source such as a file or socket.
 */
export type IStream = {
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
};

/**
 * A value that can be converted to a Date.
 *
 * Date and time components use UTC.
 */
export type DateLike =
  | number
  | string
  | Date
  | {
      /**
       * The zero-based month index, from 0 (January) to 11 (December).
       *
       * Defaults to 0.
       */
      month?: number;
      /**
       * The day of the month (1–31).
       *
       * Defaults to 1.
       */
      day?: number;
      /**
       * The year.
       *
       * Defaults to 0.
       */
      year?: number;
      /**
       * The hour in 24-hour format (0–23).
       *
       * Defaults to 0.
       */
      hour?: number;
      /**
       * The minute (0–59).
       *
       * Defaults to 0.
       */
      minute?: number;
      /**
       * The second (0–59).
       *
       * Defaults to 0.
       */
      second?: number;
    };

/**
 * A monetary amount expressed as text or a number.
 */
export type MoneyLike = string | number;
```

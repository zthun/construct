# Types

Types should behave like interfaces if they represent object shapes in any form.
If the type is an alias, simply say the underlying type, and if the type is a
union of flat values, just summarize it the best you can.

## Instructions

1.  Add or update typedoc to the type itself.
1.  Add or update typedoc to all fields in the type that are part of an object shape.
1.  Add or update typedoc to all methods in the type that are part of an object shape.

## Example

```ts
/**
 * Options for reading from a stream.
 */
export type IStreamOptions = {
  /**
   * The total number of bytes to attempt to read or write.
   *
   * If this is falsy, then everything will be read or written
   * until the stream ends.
   */
  length?: number;
};

/**
 * Represents something that can operate on a flow of binary data.
 *
 * Streams are used to read and write blocks of binary data from
 * and to something, respectively. This can include files, sockets,
 * and raw text.
 */
export type IStream = {
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
};

/**
 * Represents something that can become a Date object.
 *
 * If this is a time descriptor, then assume the timezone
 * is UTC.
 */
export type DateLike =
  | number
  | string
  | Date
  | {
      /**
       * The month index (0-11)
       *
       * January = 0.
       * December = 11.
       *
       * @default 0
       */
      month?: number;
      /**
       * The day of the month (1-31).
       *
       * @default 1
       */
      day?: number;
      /**
       * The year.
       *
       * @default 0
       */
      year?: number;
      /**
       * Hour in 24 hour format (0-23)
       *
       * @default 0.
       */
      hour?: number;
      /**
       * The minute (0-59)
       *
       * @default 0.
       */
      minute?: number;
      /**
       * The second (0-59)
       *
       * @default 0.
       */
      second?: number;
    };

/**
 * Represents something that can represent money.
 */
export type MoneyLike = string | number;
```

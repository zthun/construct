# Document Functions

Summarize when the function is supposed to do, it's purpose, and provide
examples of how to use it. Only bother with functions exported from modules that
are publicly accessible to a consumer.

## Example

````ts
/**
 * Attempts to guess what a date like object represents when converted to a Date.
 *
 * This supports a set of standard known formats.  See {@link DateFormats} for
 * more information.
 *
 * @param date -
 *        The date value to guess the date from.
 *        This can be a Date object, a string, or a number
 *        that can potentially represent a date object.
 * @param options -
 *        Options that can hint at how to guess the date and provide defaults
 *        and information that can help the guess be accurate.  See
 *        {@link DateOptions} for more information.
 *
 * @returns
 *        A correctly guessed date object, or null if the date cannot be guessed
 *        from date.
 *
 * @example
 *
 * ```ts
 * // Should be August 22nd 2019 at 11:44 UTC
 * const date = guessDate('2019-08-22T11:44:00.000Z')
 * ```
 *
 * @example
 *
 * ```ts
 * // Should be November 24th 2026 at 22:02:24 CST
 * const date = guessDate(1795579344332);
 * ```
 *
 * @example
 * ```ts
 * // Should be October 12th, 2021 10:42 UTC
 * const date = guessDate('2021-10-12T10:42:00, { timezone: 'Etc/Utc' });
 * ```
 */
export function guessDate(date: DateLike, options?: DateOptions): Date | null {
  // Do something
}
````

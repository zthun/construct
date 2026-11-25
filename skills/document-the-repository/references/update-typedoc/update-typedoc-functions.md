# Document Functions

Document functions that consumers can import through a public package entry
point. Start with what the function does and explain when to use it if that
helps callers.

For each parameter, explain what it controls and note relevant units, accepted
formats, or defaults. Describe what the function returns on success and what
signals failure, such as a `null` result, a thrown error, or a rejected promise.
Add examples when they illustrate distinct ways to call the function or show how
to handle its result.

## Example

This example shows the contract for an illustrative date parser.

````ts
/**
 * Interprets the input as a date and returns a `Date` when possible.
 *
 * See {@link DateFormats} for supported input formats.
 *
 * @param date -
 *        A date-like value, such as a `Date`, a date string, or a Unix
 *        timestamp in milliseconds.
 * @param options -
 *        Hints and defaults used to interpret the input, such as the time zone
 *        for a string without an offset. See {@link DateOptions}.
 *
 * @returns
 *        The interpreted `Date`, or `null` if the input cannot be interpreted.
 *
 * @example
 *
 * ```ts
 * const date = guessDate("2019-08-22T11:44:00.000Z");
 * date?.toISOString(); // "2019-08-22T11:44:00.000Z"
 * ```
 *
 * @example
 *
 * ```ts
 * const date = guessDate(1795579344332);
 * date?.toISOString(); // "2026-11-25T04:02:24.332Z"
 * ```
 *
 * @example
 *
 * ```ts
 * const date = guessDate("2021-10-12T10:42:00", { timezone: "Etc/UTC" });
 * date?.toISOString(); // "2021-10-12T10:42:00.000Z"
 * ```
 */
export declare function guessDate(
  date: DateLike,
  options?: DateOptions,
): Date | null;
````

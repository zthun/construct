# Document Classes

For each class exported from a module, summarize its main responsibility. Add
details about its lifecycle or usage when callers need them.

Document each declared constructor, including constructors in abstract classes.
Use “Initializes a new instance of this object.” as the summary and explain what
each parameter controls.

Document public and protected fields and methods. For fields, explain what the
value represents and when it changes. For methods, follow the
[function guide](./update-typedoc-functions.md) for parameters, results, and
errors. Preserve existing comments on private members.

For members inherited as-is, document the original declaration. For an override
or interface implementation that follows the same contract, reuse the source
comment through the project's documentation tooling or use an explicit
[`{@inheritDoc}` reference](https://tsdoc.org/pages/tags/inheritdoc/). Document
class-specific behavior directly when the inherited contract needs
clarification.

## Example

This declaration uses the contract from the
[interface example](./update-typedoc-interfaces.md).

```ts
/**
 * Reads bytes from a file.
 *
 * Open the stream before reading and close it when finished.
 */
export declare class FileStream implements IReadStream {
  /**
   * The absolute path to the file this stream reads.
   */
  public path: string;

  /**
   * Initializes a new instance of this object.
   *
   * @param path -
   *        The absolute path to a file.
   */
  public constructor(path: string);

  /** {@inheritDoc IStream.open} */
  public open(): Promise<void>;

  /** {@inheritDoc IStream.close} */
  public close(): Promise<void>;

  /** {@inheritDoc IReadStream.read} */
  public read(options?: IStreamOptions): Promise<Uint8Array>;

  /**
   * Creates the file if it is missing or updates its last access time.
   *
   * @returns
   *        A promise that resolves to `true` if the file was created or
   *        `false` if its last access time was updated.
   */
  public touch(): Promise<boolean>;

  /**
   * Checks whether the file exists.
   *
   * @returns
   *        A promise that resolves to `true` if the file exists or
   *        `false` otherwise.
   */
  public exists(): Promise<boolean>;
}
```

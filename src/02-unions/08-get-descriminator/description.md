## Extracting Discriminator From Union

In TypeScript, discriminated unions are powerful constructs that allow you to handle different types of objects that share a common field, known as a **discriminator**. The discriminator is typically a string literal that uniquely identifies each type in the union. When working with discriminated unions, you may sometimes need to extract this discriminator type from the union.

By using **indexed access types**, you can extract the discriminator (such as the type field) from all members of the union, resulting in a union of the possible values for that field.

## 🎯 Assignment

Your task is to extract the the discriminator from the `Characters` discriminated union and assign the resulting union of types to `CharacterTypes`.

- Use indexed access to extract the discriminator field from `Characters` union and assign the resulting union to `CharacterTypes`.
- Ensure that your solution passes the provided tests

## 🧩 Resources

https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
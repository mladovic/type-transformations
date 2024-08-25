# Exclude from Discriminated Union

In TypeScript, discriminated unions are a powerful way to model multiple object types with a shared discriminant field. Sometimes, however, you may need to exclude a particular type from a discriminated union. This is where the `Exclude` utility type comes into play.

The `Exclude` utility type allows you to create a new union type by excluding a specific type or set of types from an existing union. This can be particularly useful when you want to work with all but one type from a union.

## Assignment

Your task is to exclude the `FireDragon` type from the `Dragons` discriminated union. Assign the remaining types to `NonFireDragons`.

- Use the `Exclude` utility type to exclude the `FireDragon` type from the `Dragons` union, and assign the resulting union type to `NonFireDragons`.
- Ensure that your solution passes the provided tests.

## Resources

https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
# Extract from Discriminated Union

In TypeScript, a discriminated union is a powerful construct that combines multiple object types under a shared discriminant property. This allows for type-safe pattern matching. Sometimes, you might need to extract one specific type from a discriminated union based on its discriminant field.

The `Extract` utility type helps achieve this by selecting a subset of types from a union that match a given condition. This can be especially useful when dealing with complex unions, where you need to narrow down to a specific type while maintaining type safety.

For example, you may have different character types like `Warrior`, `Mage`, and `Rogue` in a discriminated union. If you want to work only with `Mage`, you can use the `Extract` utility type to pull out just the `Mage` type from the union.

## Assignment

Your task is to extract the type for the `Mage` character from the `Characters` union. Assign this filtered type to the `MageType` type.

- Use the `Extract` utility type to extract the `Mage` type from the `Characters` discriminated union.
- Ensure that your solution passes the provided test.

## Resources

https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
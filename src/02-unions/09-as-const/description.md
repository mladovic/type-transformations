# `as const`

In TypeScript, `as const` is a powerful assertion that allows you to create immutable, deeply `readonly` values from objects or arrays. When you use `as const`, TypeScript locks the values to their literal types rather than allowing them to be inferred as more general types like `string` or `number`. This is particularly useful when you want to work with a set of constant values that should not change or be altered in any way.

For example, when you define an object with enemy types, using `as const` ensures that each value retains its exact type, providing more type safety and helping to avoid unintended changes.

## 🎯 Assignment

Your task is to assert `as const` on the provided `enemiesEnum` object. This will ensure that the types of the values in the object are locked to their literal types. For example, `'Assassin'` will become a literal type, rather than being inferred as `string`.

- Apply `as const` to the `enemiesEnum` object to make its values readonly and lock them to their exact literal types.
- Ensure that your solution passes the provided tests

## 🧩 Resources

https://blog.logrocket.com/complete-guide-const-assertions-typescript/
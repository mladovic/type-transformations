# Creating a Custom Utility Type for Nullable Values

In TypeScript, there are scenarios where a value may not always be present; it could be null or undefined. For example, a character's special abilities, loot, or quests may sometimes be unknown or unassigned. To handle these cases, we can create a custom utility type that makes any given type optionally `null` or `undefined`.

In this lesson, you'll create a custom utility type called `Nullable` that allows a value to either be its original type or optionally `null` or `undefined`. This type is useful for scenarios where optional or missing values are expected.

## 🎯 Assignment

Your task is to complete the `Nullable` utility type. The `Nullable` type should take any type `T` and return a union of `T | null | undefined`. This type will represent values that are either present (of type `T`) or optionally absent (either `null` or `undefined`).

- Define a `Nullable` utility type that takes a generic type `T` and returns `T | null | undefined`.
- Ensure that your solution passes the provided test cases.

## 🧩 Resources

[TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
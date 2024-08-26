# Utility Type Pattern

In TypeScript, **utility types** are predefined generic types that perform various common operations on types, such as `Partial<T>`, `ReturnType<T>`, or `Extract<T, U>`. But beyond the built-in utilities, you can create your own custom utility types to solve specific problems in your codebase.

At the core of many custom utility types is the **generic type slot**, a placeholder that allows you to pass in a type that can be reused or transformed within the utility. By defining utility types with generics, you create flexible and reusable type helpers that can be applied to different types throughout your code.

## 🎯 Assignment

Your task is to complete the `IdentityType` utility type by correctly utilizing the generic type slot. Once completed, the utility should simply return whatever type is passed in.

- Define a generic type slot for `IdentityType`.
- Ensure that the utility type returns the type passed to it without modification.
- Ensure that your solution passes the provided tests.

## 🧩 Resources

[TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
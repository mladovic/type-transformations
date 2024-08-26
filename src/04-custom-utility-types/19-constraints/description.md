# Generic Type Constraints

In TypeScript, generic types allow you to create flexible and reusable code that works with different types. However, sometimes you need to **constrain** the types that can be passed to a generic function or type. By using constraints, you can ensure that the types passed into your generic type meet certain criteria, preventing invalid types from being used. Generic constrains are defined by using the `extends` keyword. (`<T extends someType>`)

In this lesson, you'll explore generic type constraints by working with a legendary item system. The goal is to create a utility type that adds the prefix "legendary" to a string representing an item. However, we want to ensure that **only valid string item names** are accepted.

## 🎯 Assignment

Your task is to complete the utility type `AddLegendaryPrefix`. The utility should accept a generic type `TItem`, but it must constrain `TItem` to only be of type `string`. If a non-string type is passed, TypeScript should throw a type error.

- Define the `AddLegendaryPrefix` utility type using a generic type with a constraint that ensures only string types can be passed.
- Ensure that when the utility type is passed a valid `string`, it prefixes the `string` with "legendary".
- Ensure that your solution passes the provided test cases.

## 🧩 Resources

[TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
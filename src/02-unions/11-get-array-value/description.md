# Get Array Value

In TypeScript, you can extract types directly from arrays using **indexed access types**. This is particularly useful when you have a set of values, such as an array of strings, and you want to create a union of these values or extract specific ones by their index.

When dealing with arrays, combining `typeof` with `as const` allows TypeScript to infer the array’s values as literal types, rather than broadening them to a more general type like `string[]`. You can then use indexed access to extract specific values by their index, or use the `number` index to retrieve all possible values in the array as a union type.

## 🎯 Assignment

Your task is to work with an array of weapons. You will:

1. Extract the types of the first two weapons (`Sword` and `Dagger`) into a union and assign it to `SwordOrDagger`.
2. Create a union of all weapon values from the array and assign it to `Weapons`.

- Convert the weapons array into a readonly array using `as const` to preserve the literal values.
- Use indexed access to extract the types for `SwordOrDagger` and `Weapons`.
- Ensure that your solution passes the provided tests.

## 🧩 Resources

https://blog.logrocket.com/complete-guide-const-assertions-typescript/
https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
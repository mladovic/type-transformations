# Indexed Access Types

In TypeScript, **indexed access types** allows you to access the type of a specific property within an already defined type. By using syntax like `Type['propertyName']`, you can extract the type of individual properties. This is particularly useful when you want to work with or reuse the type of a specific property without manually redefining it.

For example, if you have a type representing an archer, you can access the types of specific properties like `id`, `name`, `age`, and more by indexing into the type.

## Assignment

Your task is to use **indexed access** to extract the types of properties from the predefined `archer` object. For each property (`id`, `name`, `age`, `accuracy`, `isAvailable`, and `bowType`), use indexed access to extract its type and assign to a corresponding type alias (`Id`, `Name`, `Age`, `Accuracy`, `IsAvailable`, `BowType`)

- Use indexed access (`Type['propertyName']`) to extract the type of each property and assign the extracted to the corresponding type alias.
- Ensure that your solution passes the provided tests.

## Resources

https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
https://www.typescript-training.com/course/intermediate-v1/08-indexed-access-types/
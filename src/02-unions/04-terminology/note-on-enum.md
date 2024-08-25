# Note on `enum` in TypeScript

While enums can be useful for defining a set of named constants, they come with certain trade-offs that the TypeScript team and community have highlighted. As TypeScript has evolved, many developers now recommend using alternatives like `union types` or `as const` assertions instead of enums for most use cases.

## Why Avoid `enum`?

1. **JavaScript Compatibility**: Enums introduce additional runtime code, which might not always be desirable. When you use an enum in TypeScript, TypeScript generates JavaScript code for it, unlike union types which are purely type-level constructs with no runtime overhead.

2. **Type Safety Issues**: Enums can sometimes behave in unexpected ways, especially with numeric enums. For instance, enums can be incremented or assigned values that don't exist in the original set, which can lead to type-safety issues.

3. **Limited Flexibility**: Enums are less flexible than union types because they cannot be easily composed, extended, or combined with other types, while union types allow for greater compositional power and flexibility.

4. **String Literals and Union Types**: Many of the use cases for enums can be handled effectively by `union types` or `as const` assertions. This provides the same benefits as an enum without introducing any runtime code, and it also maintains better type safety and flexibility.

## When Might You Use `enum`?

Despite these concerns, enums can still be useful in certain cases, such as:

- When you need a set of constants that are shared between TypeScript and JavaScript codebases.

- When numeric values need to be associated with constants, or when reverse mapping of enum values is required (where you need to convert a value back to its enum name).

However, for most cases, `union types` or `as const` are the preferred choice due to their simplicity and lack of runtime impact.

## Resources

https://www.youtube.com/watch?v=jjMbPt_H3RQ
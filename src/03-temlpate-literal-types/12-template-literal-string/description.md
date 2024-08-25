# Template Literal Types with String

In TypeScript, **template literal types** allow you to define string types that follow specific patterns. These types are useful when you need to enforce particular formats for strings, such as URLs, identifiers, or commands.

In this exercise, we have different game can be issued by players. These commands always start with a `!` followed by the command name (e.g., `!attack`, `!heal`, `!defend`). By using template literal types, you can enforce that only valid command strings are allowed.

## 🎯 Assignment

Your task is to define a template literal type `Command` that enforces the pattern where all commands must start with a `!`. Any string that doesn't start with ! should cause a type error.

- Define the `Command` type using a template literal type that ensures all commands start with a `!`.
- Ensure that provided test cases succeed and fail where expected

## 🧩 Resources

https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#handbook-content
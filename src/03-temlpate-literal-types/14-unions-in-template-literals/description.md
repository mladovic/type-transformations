# Unions in Template Literals

n TypeScript, **template literal types** allow you to create new string types by combining string literals and union types. When unions are used within template literals, TypeScript generates all possible combinations of the unions, allowing you to dynamically construct new types based on the provided values.

In this lesson, we'll apply this concept to create a set of magical potions, where each potion is made up of different base liquids and magical ingredients. Your goal is to use template literal types with unions to generate all possible combinations of potions.

## 🎯 Assignment

Your task is to create a `Potion` type by combining different `BaseLiquid` and `Ingredient` unions using template literal types. The `Potion` type should represent all possible combinations of base liquids with magical ingredients.

- Use a template literal type to create the `Potion` type that represents all possible combinations of `BaseLiquid` and `Ingredient`.
- Ensure that your solution passes the provided tests.

## 🧩 Resources

https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#handbook-content
# Unions, Discriminated Unions, and Enums

In TypeScript, unions, discriminated unions, and enums are powerful tools for working with different types of data in a structured and safe way. Each of these concepts helps model different kinds of scenarios, especially in situations where there are limited, specific options.

## Unions

A union type allows a variable to hold one of several types. You can think of a union as an "or" type, meaning a value can be of either one type or another. For example, if you have a character class that can be a Warrior, Mage, or Rogue.

## Discriminated Unions

A discriminated union is a more advanced form of union that combines unions with object types, where each type in the union has a "discriminant" field (often a string or number literal) that uniquely identifies which kind of object it is. This makes them particularly useful for type-safe pattern matching.

## Enums

An enum is a way to define a set of named constants that can have either numeric or string values. Enums are useful when you need a more formal structure with defined constants that can represent different options.

## 🎯 Assignment

Your task is to analyze the three types: `A`, `B`, and `C`. Determine which one is a union, a discriminated union, and an enum. After identifying them, provide a brief explanation of why each type belongs to its category.

## 🧩 Resources

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
https://dev.to/darkmavis1980/what-are-typescript-discriminated-unions-5hbb
https://www.typescriptlang.org/docs/handbook/enums.html
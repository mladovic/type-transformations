# Template Literals in Object Keys

In TypeScript, **template literal types** can be used not only for constructing string types but also for dynamically generating object keys. This allows you to programmatically create structured types with specific key patterns while maintaining strong type safety.

In this lesson, you’ll be working with a character system. Each character can have a variety of attributes like `Id`, `Name`, and other properties. You will generate a type where the keys are dynamically created based on different character types (e.g., `Warrior`, `Mage`, `Rogue`) combined with attribute suffixes like `Id` and `Name`.

## 🎯 Assignment

Your task is to create an `Attributes` type where the keys are generated using template literal types. The keys should be a combination of the character type (`Warrior`, `Mage`, `Rogue`) and the attribute type (`Id`, `Name`). The resulting type will have all possible combinations of these keys, with their values being of type `string`.

- Use a template literal type to generate the keys for the `CharacterAttributes` object.
- Use the `Record` utility type to define the values of each key as `string`.
- Ensure that your solution passes the provided tests.

## 🧩 Resources

https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#handbook-content
https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
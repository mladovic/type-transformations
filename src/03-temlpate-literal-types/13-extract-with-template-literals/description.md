# Extract with Template Literals

In TypeScript, **template literal types** allow you to create new types by combining string literals with unions or other string types. When combined with the `Extract` utility type, you can filter specific patterns from a union of string literals.

In this exercise, you'll work with a list of spells. Some of these spells are offensive and deal damage, while others are supportive, providing healing or buffs. Your goal is to extract the names of all spells that deal damage by leveraging template literal types.

## 🎯 Assignment

Your task is to use template literal types to extract the names of all damage-dealing spells from the `Spells` type. The damage-dealing spells are those that contain the word `"Damage"` in their names. Use `Extract` to filter these spells into a new type `DamageSpells`.

- Use the `Extract` utility type along with template literal types to create a new type `DamageSpells` that includes only spells with `"Damage"` in their names.
- Ensure that your solution passes the provided tests.

## 🧩 Resources

https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#handbook-content
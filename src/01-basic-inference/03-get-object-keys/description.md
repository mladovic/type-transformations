# Get Object Keys

In TypeScript, the `keyof` and `typeof` keywords can be combined to create a type that represents the keys of an object or an enum. The `typeof` keyword lets you refer to the type of a variable or object, and `keyof` extracts the keys from that type as a union of string literals. This is useful when you want to work with the keys of an object or enum in a type-safe manner.

For example, if you have a list of magical items or potions, you might want to infer the keys of this list so that you can use them elsewhere in your code. This ensures that if your list of items ever changes, your types will stay up-to-date and accurate.

# 🎯 Assignment

You are tasked with determining the valid keys of the `magicItems` object. Your goal is to use `keyof` and `typeof` to create a union of string literals representing the keys of the `magicItems` object and assign them to the `MagicItemKeys` type.

- Use `keyof` and `typeof` to extract the keys from the `magicItems` object.
- Assign the extracted keys to the `MagicItemKeys` type.
- Ensure that your solution passes the provided tests.

## 🧩 Resources

https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
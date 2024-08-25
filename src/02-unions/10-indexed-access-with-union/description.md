# Indexed Access With Union

In TypeScript, **indexed access types** allow you to extract the type of a property from another type or object. You can even combine indexed access with union types to extract multiple properties simultaneously. This is particularly useful when working with complex objects where you want to retrieve the types of several properties at once, forming a union of their types.

For example, you might have an `enemiesEnum` object representing different types of enemies in a game, and you want to group some of them into specific categories, like `HumanLike` enemies.

## 🎯 Assignment

Your task is to use indexed access types combined with a union of keys to extract the types of the `ASSASSIN`, `BANDIT`, and `NECROMANCER` properties from the enemiesEnum object. Assign this union of types to the `HumanLike` type alias.

- Use indexed access to extract the types of `ASSASSIN`, `BANDIT`, and `NECROMANCER` from `enemiesEnum`.
- Combine these extracted types into a union and assign it to `HumanLike`.
- Ensure that your solution passes the provided tests.

## 🧩 Resources

https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
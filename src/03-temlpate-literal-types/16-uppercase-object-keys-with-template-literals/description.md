# Uppercase Object Keys with Template Literals

In TypeScript, **template literal types** can be combined with utility types like `Uppercase`, `Lowercase`, `Capitalize` and `Uncapitalize` to transform string literals. This can be useful when you want to programmatically manipulate object keys, enforcing consistent formats.

In this lesson, you’ll be working with an event system where players interact with different activities like exploring dungeons, battling monsters, and trading with merchants. The events are initially named in lowercase (e.g., explore_dungeon, battle_monster, trade_goods), but your task is to create an object where the keys are the uppercase versions of these event names.

## 🎯 Assignment

Your task is to use template literal types combined with the `Uppercase` utility type to generate an object where the keys are the uppercase versions of the event names. The values for each key should be of type string.

- Use the `Uppercase` utility type to transform the event names into uppercase versions.
- Use the `Record` utility type to create an object where the keys are the uppercase event names and the values are string.
- Ensure that your solution passes the provided tests.

## 🧩 Resources

https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#handbook-content
https://www.typescriptlang.org/docs/handbook/utility-types.html#intrinsic-string-manipulation-types
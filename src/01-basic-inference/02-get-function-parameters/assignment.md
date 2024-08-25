# Get Function Parameters

In TypeScript, `Parameters` in a utility type that extracts the parameter types of a given function as a tuple type. This is especially helpful when you want to reuse the same argument types in multiple places without manually duplicating them. This helps to ensure that your argument types remain consistent across your codebase, even if the function signature changes over time.

For example, if you have a function that casts a spell, you might want to extract its parameter types and use them elsewhere. The benefit here is flexibility: just like `ReturnType`, the parameter types will automatically adjust sa the function signature evolves.

## Assignment

Your task is to complete the type interface for the `castSpell` function by determining its parameter types. You will assign the inferred parameter types to the `CastSpellParams` type.

- Use the `castSpell` function to infer its parameter types.
- Assign the inferred parameter types to `CastSpellParams`.
- Ensure that your solution passes the provided tests.
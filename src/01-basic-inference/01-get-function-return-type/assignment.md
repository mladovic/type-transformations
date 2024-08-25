# Get Function Return Type

In TypeScript, `ReturnType` is a utility type that allows you to infer the return type of a given function. Instead of manually specifying the return type, you can let TypeScript figure it out for you by using this utility. This is especially useful when the return type of a function might change over time, as it ensures your types always stay in sync with the function's implementation.

For example, if you have a function that generates a greeting for a hero, you might want to infer its return type to ensure it matches the actual value returned by the function. The key benefit here is flexibility: the return type will automatically adjust as your function evolves, without you needing to manually update it.

## Assignment

Complete the `greetHero` function's type inference by determining its return type. The function takes a hero's name and returns a greeting message. Your task is to infer the return type and assign it to the `WelcomeHeroReturn` type.

- Use the function `greetHero` to infer the return type.
- Assign the inferred type to `GreetHeroReturn`.
- Ensure that your solution passes the provided tests.
# `ReturnType`

When building TypeScript applications, it's often helpful to automatically infer
the return type of a function instead of manually specifying it. TypeScript
provides a built-in utility type called `ReturnType` for this purpose.

`ReturnType<typeof someFunction>` is a special utility that extracts the type of
th value returned by `someFunction`. This ensures taht the inferred tyoe remains
accurate and consistent with the function's implementation.

In TypeScript the `typeof` keyword is used to capture the type of a value or
object. It's especially useful when you want to refer to the type of an existing
function or variable without having to manually write out the type definition.

For example, consider the following:

```ts
const greetHero = (name: string) => `Welcome, {name}, to the town of Oakvale!`
type GreetHeroReturn = ReturnType<typof greetHero>
```

Here's what happens:

1. `typeof greetHero`: This extracts the type of the `greetHero` function.
   `(name: string) => string`

2. `ReturnType<typeof greetHero>`: This takes the type of `greetHero` and infers
   its return value. In this case, `GreetHeroReturn` will automatically be
   inferred as `string` bacause that's what `greetHero` returns.

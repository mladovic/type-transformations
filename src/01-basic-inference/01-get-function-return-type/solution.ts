import { Equal, Expect } from '../../helpers'

const greetHero = (name: string) => `Welcome, ${name}, to the town of Oakvale!`

// ---- Don't touch above this line ----

type GreetHeroReturn = ReturnType<typeof greetHero>

// ---- Don't touch below this line ----

type tests = [Expect<Equal<GreetHeroReturn, string>>]

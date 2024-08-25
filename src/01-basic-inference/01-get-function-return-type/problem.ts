import { Equal, Expect } from '../../helpers'

const greetHero = (name: string) => `Welcome, ${name}, to the town of Oakvale!`

// ---- Don't touch above this line ----

type GreetHeroReturn = unknown

// ---- Don't touch below this line ----

type tests = [Expect<Equal<GreetHeroReturn, string>>]

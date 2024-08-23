import { Equal, Expect } from '../../helpers'

const greetHero = (name: string) => `Welcome, ${name}, to the town of Oakvale!`

type GreetHeroReturn = ReturnType<typeof greetHero>

type tests = [Expect<Equal<GreetHeroReturn, string>>]

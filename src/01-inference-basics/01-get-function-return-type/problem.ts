import { Equal, Expect } from '../../helpers'

const greetHero = (name: string) => `Welcome, ${name}, to the town of Oakvale!`

type GreetHeroReturn = unknown

type tests = [Expect<Equal<GreetHeroReturn, string>>]

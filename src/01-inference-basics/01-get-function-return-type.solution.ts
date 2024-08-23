import { Equal, Expect } from '../helpers'

/*
 * Quest: Implement the Hero's Greeting
 *
 * You're building an RPG game where players arrive in the town of Stonehill.
 * Determine the return type of the `welcomeHero` function and assign it to `WelcomeHeroReturn`.
 */

const greetHero = (name: string) => `Welcome, ${name}, to the town of Oakvale!`

type GreetHeroReturn = ReturnType<typeof greetHero>

type tests = [Expect<Equal<GreetHeroReturn, string>>]

import { Expect, Equal } from '../../helpers'

export const enemiesEnum = {
  ASSASSIN: 'Assassin',
  SPIDER: 'Spider',
  BANDIT: 'Bandit',
  DRAGON: 'Dragon',
  WOLF: 'Wolf',
  NECROMANCER: 'Necromancer',
} as const

// ---- Don't touch above this line ----

type HumanLike = (typeof enemiesEnum)['ASSASSIN' | 'BANDIT' | 'NECROMANCER']

// ---- Don't touch below this line ----

type tests = [Expect<Equal<HumanLike, 'Assassin' | 'Bandit' | 'Necromancer'>>]

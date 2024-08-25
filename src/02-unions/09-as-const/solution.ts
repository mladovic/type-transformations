import { Expect, Equal } from '../../helpers'

// ---- Don't touch above this line ----

export const enemiesEnum = {
  ASSASSIN: 'Assassin',
  SPIDER: 'Spider',
  BANDIT: 'Bandit',
  DRAGON: 'Dragon',
  WOLF: 'Wolf',
  NECROMANCER: 'Necromancer',
} as const

// ---- Don't touch below this line ----

type Enemies = typeof enemiesEnum

type Assassin = Enemies['ASSASSIN']
type Spider = Enemies['SPIDER']
type Bandit = Enemies['BANDIT']
type Dragon = Enemies['DRAGON']
type Wolf = Enemies['WOLF']
type Necromancer = Enemies['NECROMANCER']

type tests = [
  Expect<Equal<Assassin, 'Assassin'>>,
  Expect<Equal<Spider, 'Spider'>>,
  Expect<Equal<Bandit, 'Bandit'>>,
  Expect<Equal<Dragon, 'Dragon'>>,
  Expect<Equal<Wolf, 'Wolf'>>,
  Expect<Equal<Necromancer, 'Necromancer'>>,
]

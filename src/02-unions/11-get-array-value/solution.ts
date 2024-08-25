import { Expect, Equal } from '../../helpers'

// ---- Don't touch above this line ----

const weapons = ['Sword', 'Dagger', 'Bow', 'Axe', 'Staff', 'Crossbow'] as const

type WeaponsArr = typeof weapons
type SwordOrDagger = WeaponsArr[0 | 1]
type Weapons = WeaponsArr[number]

// ---- Don't touch below this line ----

type test = [
  Expect<Equal<SwordOrDagger, 'Sword' | 'Dagger'>>,
  Expect<
    Equal<Weapons, 'Sword' | 'Dagger' | 'Bow' | 'Axe' | 'Staff' | 'Crossbow'>
  >,
]

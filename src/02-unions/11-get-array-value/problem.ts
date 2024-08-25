import { Expect, Equal } from '../../helpers'

// ---- Don't touch above this line ----

const weapons = ['Sword', 'Dagger', 'Bow', 'Axe', 'Staff', 'Crossbow']

type SwordOrDagger = unknown
type Weapons = unknown

// ---- Don't touch below this line ----

type test = [
  Expect<Equal<SwordOrDagger, 'Sword' | 'Dagger'>>,
  Expect<
    Equal<Weapons, 'Sword' | 'Dagger' | 'Bow' | 'Axe' | 'Staff' | 'Crossbow'>
  >,
]

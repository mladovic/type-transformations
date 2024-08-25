import { Equal, Expect } from '../../helpers'

type Spells =
  | 'FireDamage'
  | 'IceDamage'
  | 'Heal'
  | 'Shield'
  | 'LightningDamage'
  | 'Boost'

// ---- Don't touch above this line ----

type DamageSpells = unknown

// ---- Don't touch below this line ----

type tests = [
  Expect<Equal<DamageSpells, 'FireDamage' | 'IceDamage' | 'LightningDamage'>>,
]

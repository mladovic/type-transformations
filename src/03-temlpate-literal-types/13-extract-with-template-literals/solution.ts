import { Equal, Expect } from '../../helpers'

type Spells =
  | 'FireDamage'
  | 'IceDamage'
  | 'Heal'
  | 'Shield'
  | 'LightningDamage'
  | 'Boost'

// ---- Don't touch above this line ----

type DamageSpells = Extract<Spells, `${string}Damage`>

// ---- Don't touch below this line ----

type tests = [
  Expect<Equal<DamageSpells, 'FireDamage' | 'IceDamage' | 'LightningDamage'>>,
]

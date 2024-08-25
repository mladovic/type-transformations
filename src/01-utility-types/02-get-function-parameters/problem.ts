import { Equal, Expect } from '../../helpers'

const castSpell = (caster: string, spell: string, manaCost: number) =>
  `${caster} casts ${spell} for ${manaCost} mana!`

type CastSpellParams = unknown

// ---- Don't touch below this line ----

type tests = [Expect<Equal<CastSpellParams, [string, string, number]>>]

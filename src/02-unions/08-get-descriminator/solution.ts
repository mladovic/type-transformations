import { Expect, Equal } from '../../helpers'

type Characters =
  | { type: 'Warrior'; weapon: 'Sword' }
  | { type: 'Mage'; spell: 'Fireball' }
  | { type: 'Rogue'; tool: 'Dagger' }

// ---- Don't touch above this line ----

type CharacterTypes = Characters['type']

// ---- Don't touch below this line ----

type tests = [Expect<Equal<CharacterTypes, 'Warrior' | 'Mage' | 'Rogue'>>]

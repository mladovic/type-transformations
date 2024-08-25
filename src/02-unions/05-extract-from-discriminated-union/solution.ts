import { Expect, Equal } from '../../helpers'

type Characters =
  | { type: 'Warrior'; weapon: 'Sword' }
  | { type: 'Mage'; spell: 'Fireball' }
  | { type: 'Rogue'; tool: 'Dagger' }

// ---- Don't touch above this line ----

type MageType = Extract<Characters, { type: 'Mage' }>

// ---- Don't touch below this line ----

type test = [Expect<Equal<MageType, { type: 'Mage'; spell: 'Fireball' }>>]

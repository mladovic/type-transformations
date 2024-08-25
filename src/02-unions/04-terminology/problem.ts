type A =
  | { type: 'Warrior'; weapon: 'Sword' }
  | { type: 'Mage'; spell: 'Fireball' }
  | { type: 'Rogue'; tool: 'Dagger' }

type B = 'Warrior' | 'Mage' | 'Rogue'

enum C {
  Warrior = 'Warrior',
  Mage = 'Mage',
  Rogue = 'Rogue',
}

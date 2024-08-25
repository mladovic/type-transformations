// type `A` is a Discriminated Union type because it uses a "discriminant"
// field (`type`) to differentiate between the types of characters.
// Each object in the union has a unique type and associated data.

type A_s =
  | { type: 'Warrior'; weapon: 'Sword' }
  | { type: 'Mage'; spell: 'Fireball' }
  | { type: 'Rogue'; tool: 'Dagger' }

// type `B` is a Union type because it allows the value to be either
// 'Warrior', 'Mage', or 'Rogue'.
// It doesn't provide any structure beyond listing these possible types.

type B_s = 'Warrior' | 'Mage' | 'Rogue'

// CharacterEnum is an Enum because it defines a set of named constants
// (Warrior, Mage, Rogue), representing distinct character classes with
// specific values.

enum C_s {
  Warrior = 'Warrior',
  Mage = 'Mage',
  Rogue = 'Rogue',
}

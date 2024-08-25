import { Equal, Expect } from '../../helpers'

const magicItems = {
  potionOfHealing: 'Restores 50 HP',
  scrollOfFireball: 'Deals 100 fire damage',
  elixirOfSpeed: 'Increases speed by 20%',
}

// ---- Don't touch above this line ----

type MagicItemKeys = keyof typeof magicItems

// ---- Don't touch below this line ----

type tests = [
  Expect<
    Equal<
      MagicItemKeys,
      'potionOfHealing' | 'scrollOfFireball' | 'elixirOfSpeed'
    >
  >,
]

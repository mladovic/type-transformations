import { Equal, Expect } from '../../helpers'

type BaseLiquid = 'elixir' | 'potion' | 'brew'
type Ingredient = 'dragon scales' | 'phoenix feathers' | 'mandrake root'

// ---- Don't touch above this line ----

type Potion = unknown

// ---- Don't touch below this line ----

type tests = [
  Expect<
    Equal<
      Potion,
      | 'elixir with dragon scales'
      | 'elixir with phoenix feathers'
      | 'elixir with mandrake root'
      | 'potion with dragon scales'
      | 'potion with phoenix feathers'
      | 'potion with mandrake root'
      | 'brew with dragon scales'
      | 'brew with phoenix feathers'
      | 'brew with mandrake root'
    >
  >,
]

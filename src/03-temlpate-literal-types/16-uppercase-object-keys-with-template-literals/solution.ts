import { Equal, Expect } from '../../helpers'

type Event = 'explore_dungeon' | 'battle_monster' | 'trade_goods'

// ---- Don't touch above this line ----

type Events = Record<Uppercase<Event>, string>

// ---- Don't touch below this line ----

type tests = [
  Expect<
    Equal<
      Events,
      {
        EXPLORE_DUNGEON: string
        BATTLE_MONSTER: string
        TRADE_GOODS: string
      }
    >
  >,
]

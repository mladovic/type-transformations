import { Equal, Expect } from '../../helpers'

type Dragons =
  | { type: 'FireDragon'; breathWeapon: 'Fire'; strength: number }
  | { type: 'IceDragon'; breathWeapon: 'Frost'; speed: number }
  | { type: 'StormDragon'; breathWeapon: 'Lightning'; agility: number }

// ---- Don't touch above this line ----

type NonFireDragons = Exclude<Dragons, { type: 'FireDragon' }>

// ---- Don't touch below this line ----

type tests = [
  Expect<
    Equal<
      NonFireDragons,
      | { type: 'IceDragon'; breathWeapon: 'Frost'; speed: number }
      | { type: 'StormDragon'; breathWeapon: 'Lightning'; agility: number }
    >
  >,
]

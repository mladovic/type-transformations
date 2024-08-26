import { Equal, Expect } from '../../helpers'

// ---- Don't touch above this line ----

type AddLegendaryPrefix<TItem extends string> = `legendary ${TItem}`

// ---- Don't touch below this line

type tests = [
  Expect<Equal<AddLegendaryPrefix<'sword'>, 'legendary sword'>>,
  Expect<Equal<AddLegendaryPrefix<'shield'>, 'legendary shield'>>,
  Expect<Equal<AddLegendaryPrefix<'bow'>, 'legendary bow'>>,
  Expect<
    Equal<AddLegendaryPrefix<'staff of power'>, 'legendary staff of power'>
  >,
  // @ts-expect-error
  AddLegendaryPrefix<boolean>,
  // @ts-expect-error
  AddLegendaryPrefix<number>,
]

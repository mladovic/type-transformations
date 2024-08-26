import { Expect, Equal } from '../../helpers'

// ---- Don't touch above this line ----

type IdentityType = unknown

// ---- Don't touch below this line ----

type tests = [
  Expect<Equal<IdentityType<100>, 100>>,
  Expect<Equal<IdentityType<'Sword'>, 'Sword'>>,
  Expect<Equal<IdentityType<true>, true>>,
  Expect<Equal<IdentityType<undefined>, undefined>>,
  Expect<Equal<IdentityType<null>, null>>,
]

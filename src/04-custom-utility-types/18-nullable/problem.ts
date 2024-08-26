import { Expect, Equal } from '../../helpers'

// ---- Don't touch above this line ----

type Nullable = unknown

// ---- Don't touch below this line ----

type tests = [
  Expect<Equal<Nullable<string>, string | null | undefined>>,
  Expect<Equal<Nullable<number>, number | null | undefined>>,
  Expect<Equal<Nullable<boolean>, boolean | null | undefined>>,
]

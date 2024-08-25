import { Expect, Equal } from '../../helpers'

export const archer = {
  id: 123,
  name: 'Legolas',
  age: 2931,
  accuracy: 99.8,
  isAvailable: true,
  bowType: 'Elven Longbow',
}

// ---- Don't touch above this line ----

type Archer = typeof archer

type Id = Archer['id']
type Name = Archer['name']
type Age = Archer['age']
type Accuracy = Archer['accuracy']
type IsAvailable = Archer['isAvailable']
type BowType = Archer['bowType']

// ---- Don't touch below this line ----

type tests = [
  Expect<Equal<Id, number>>,
  Expect<Equal<Name, string>>,
  Expect<Equal<Age, number>>,
  Expect<Equal<Accuracy, number>>,
  Expect<Equal<IsAvailable, boolean>>,
  Expect<Equal<BowType, string>>,
]

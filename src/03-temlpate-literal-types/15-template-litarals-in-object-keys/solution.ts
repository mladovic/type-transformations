import { Equal, Expect } from '../../helpers'

type CharacterType = 'Warrior' | 'Mage' | 'Rogue'
type AttributeType = 'Id' | 'Name'

// ---- Don't touch above this line ----

type CharacterAttributesKey = `${CharacterType}${AttributeType}`

type CharacterAttributes = Record<CharacterAttributesKey, string>

// ---- Don't touch below this line

type tests = [
  Expect<
    Equal<
      CharacterAttributes,
      {
        WarriorId: string
        WarriorName: string
        MageId: string
        MageName: string
        RogueId: string
        RogueName: string
      }
    >
  >,
]

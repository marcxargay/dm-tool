import ICharacter, { IAttributes, EAttribute } from '../interfaces/ICharacter'
import IDice from '../interfaces/IDice'
import IWeapon from '../interfaces/IWepaon'

export default class Character implements ICharacter {
  id: string
  playerName: string
  name: string
  attributes: IAttributes
  armorClass: number
  totalHp: number
  skills: { name: string; value: number }[]
  clas: string
  race: string
  level: number
  initative: number
  speed: number
  proficiencyBonus: number
  currentHp: number
  alignment: string
  background: string
  hitDice: IDice
  hitDiceTotal: number
  deathSaves: { faliure: number; success: number }
  weapons: IWeapon[]
  spells: any
  spellHitModifier: number
  spellBonus: number
  spellSlot: any

  constructor(
    id: string = '',
    playerName: string = '',
    name: string = '',
    attributes: IAttributes = {
      strength: { text: EAttribute.strength, value: 0 },
      dexterity: { text: EAttribute.dexterity, value: 0 },
      constitution: { text: EAttribute.constitution, value: 0 },
      intelligence: { text: EAttribute.intelligence, value: 0 },
      wisdom: { text: EAttribute.wisdom, value: 0 },
      charisma: { text: EAttribute.charisma, value: 0 },
    },
    armorClass: number = 0,
    totalHp: number = 0,
    skills: { name: string; value: number }[] = [],
    clas: string = '',
    race: string = '',
    level: number = 0,
    initative: number = 0,
    speed: number = 0,
    proficiencyBonus: number = 0,
    currentHp: number = 0,
    alignment: string = '',
    background: string = '',
    hitDice: any = null,
    hitDiceTotal: number = 0,
    deathSaves: { faliure: number; success: number } = {
      faliure: 0,
      success: 0,
    },
    weapons: IWeapon[] = [],
    spells: any = null,
    spellHitModifier: number = 0,
    spellBonus: number = 0,
    spellSlot: any = null
  ) {
    this.id = id
    this.playerName = playerName
    this.name = name
    this.name = name
    this.attributes = attributes
    this.armorClass = armorClass
    this.totalHp = totalHp
    this.skills = skills
    this.clas = clas
    this.race = race
    this.level = level
    this.initative = initative
    this.speed = speed
    this.proficiencyBonus = proficiencyBonus
    this.currentHp = currentHp
    this.alignment = alignment
    this.background = background
    this.hitDice = hitDice
    this.hitDiceTotal = hitDiceTotal
    this.deathSaves = deathSaves
    this.weapons = weapons
    this.spells = spells
    this.spellHitModifier = spellHitModifier
    this.spellBonus = spellBonus
    this.spellSlot = spellSlot
  }
}

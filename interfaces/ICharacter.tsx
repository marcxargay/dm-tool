import IDice from './IDice'
import IWeapon from './IWepaon'

export default interface ICharacter {
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
}

export interface IAttribute {
  text: string 
  value: number 
}

export interface IAttributes {
  strength: IAttribute
  dexterity: IAttribute
  constitution: IAttribute
  intelligence: IAttribute
  wisdom: IAttribute
  charisma: IAttribute
}

export enum EAttribute {
  strength = 'Strength',
  dexterity = 'Dexterity',
  constitution = 'Constitution',
  intelligence = 'Intelligence',
  wisdom = 'Wisdom',
  charisma = 'Charisma'
}
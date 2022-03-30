import IWeapon from '../interfaces/IWepaon'

export default class Weapon implements IWeapon {
  name: string
  attackBonus: string
  damage: string

  constructor(
    name:string = '',
    attackBonus: string ='',
    damage:string=''
  ){
    this.name = name
    this.attackBonus = attackBonus
    this.damage = damage
  }
}
import React, { useState } from 'react'
import AttributeInput from './AttributeInput'
import Weapons from './Weapons'
import ICharacter from '../interfaces/ICharacter'
import Character from '../classes/Character'
import Weapon from '../classes/Weapon'

interface IProps {}

class CharacterSheet extends React.Component<IProps, ICharacter> {
  constructor(props: IProps) {
    super(props)
    this.state = new Character()
    console.log(this.state)
  }

  handleAttrInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log('the event was fired', event)
  }

  handleChange() {}

  handleAddWeapon() {
    this.setState({
      weapons: [...this.state.weapons, new Weapon()]
    })
  }

  render() {
    return (
      <div>
        <AttributeInput
          handleChange={(ev) => this.handleAttrInputChange(ev)}
          text={'Strength'}
          value={'2'}
          editable={false}
        />
        <Weapons
          weapons={this.state.weapons}
          handleChange={() => this.handleChange()}
          handleOnClick={() => this.handleAddWeapon()}
        />
      </div>
    )
  }
}

export default CharacterSheet

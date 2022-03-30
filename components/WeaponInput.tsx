import React from 'react'
import Input from './Input'

export type Props = {
  name: InputProp,
  attackBonus: InputProp,
  damage: InputProp
}

type InputProp = {
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  editable: boolean,
  styles?: string
}

const shredStyles = 'border-solid border-2 border-black'
const Weapon = ({name, attackBonus, damage}: Props) => (
  <div>
    <Input
      handleChange={name.handleChange}
      type={'text'}
      value={name.value}
      editable={name.editable}
      styles={shredStyles}
    />
    <Input
      handleChange={attackBonus.handleChange}
      type={'text'}
      value={attackBonus.value}
      editable={attackBonus.editable}
      styles={shredStyles}
    />
    <Input
      handleChange={damage.handleChange}
      type={'text'}
      value={damage.value}
      editable={damage.editable}
      styles={shredStyles}
    />
  </div>
)

export default Weapon
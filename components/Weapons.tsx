import React from 'react'
import WeaponInput from './WeaponInput'
import IWeapon from '../interfaces/IWepaon'

type Props = {
  weapons: IWeapon[]
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  handleOnClick: () => void
}

const Weapons = ({ weapons, handleChange, handleOnClick }: Props) => (
  <div>
    {weapons.map((w, i) => (
      <WeaponInput
        name={{
          value: w.name,
          editable: true,
          handleChange: handleChange,
        }}
        attackBonus={{
          value: w.attackBonus,
          editable: true,
          handleChange: handleChange,
        }}
        damage={{
          value: w.damage,
          editable: true,
          handleChange: handleChange,
        }}
        key={w.name+i}
      />
    ))}
    <button onClick={handleOnClick}>Add Weapon</button>
  </div>
)

export default Weapons

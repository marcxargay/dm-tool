import React from 'react'

export type Props = {
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void,
  type: string,
  name?: string,
  value: string,
  editable: boolean,
  styles: string
}

const Input = ({ handleChange, type, name, value, editable, styles, }: Props) => (
  <input
    onChange={handleChange}
    type={type}
    name={name}
    value={value}
    readOnly={!editable}
    className={styles}
  ></input>
)

export default Input
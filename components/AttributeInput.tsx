import React from 'react'
import Input from './Input'

type Props = {
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void,
  text: string,
  value: string,
  editable: boolean,
}

const AttributeInput = ({ handleChange, text, value, editable, }: Props) => (
  <div>
    <Input
      handleChange={handleChange}
      type={'number'}
      value={value}
      editable={editable}
      styles={''}
    />
    <span>{text}</span>
  </div>
)

export default AttributeInput
import React from 'react'
import Link from 'next/link'

type Props = {
  items: ItemProps[]
}

type ItemProps = {
  path: string,
  text: string
}

const Menu = ({ items }: Props) => (
  <ul className='flex flex-row '>
    {items.map((item) => <MenuItem path={item.path} text={item.text} key={item.path}/>)}
  </ul>
)

const MenuItem = ({ path, text }: ItemProps) => (
  <li className='p-2 text hover:text-blue-700 hover:underline underline-offset-4'>
    <Link href={`${path}`}>
      <a>{text}</a>
    </Link>
  </li>
)

export default Menu